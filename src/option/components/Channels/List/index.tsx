import React from "react";
import styled from "./style";
import { getChannels, deleteChannel, addChannel } from "~/option/util";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const [channels, setChannels] = React.useState<null | string[]>(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleDeleteChannel = (channelID: string) => () => {
    setLoading(true);
    deleteChannel(channelID)
      .then((channels) => {
        setError("");
        setChannels(channels);
      })
      .catch(() => {
        setError("通信エラー");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddChannel = (channelID: string) => {
    setLoading(true);
    addChannel(channelID)
      .then((channels) => {
        setError("");
        setChannels(channels);
      })
      .catch(() => {
        setError("通信エラー");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getChannels()
      .then(setChannels)
      .catch(() => {
        setError("チャンネルの取得に失敗しました。");
      });
  }, []);
  const mapChannels =
    channels &&
    channels.map((channel) => (
      <li key={"channel_" + channel}>
        {channel} <DeleteButton onClick={handleDeleteChannel(channel)} />
      </li>
    ));

  const empChannel = channels && channels.length === 0 && <div>登録なし</div>;
  return (
    <div className={className}>
      <h2>登録チャンネル一覧</h2>
      {error && <div>{error}</div>}
      <ul>{mapChannels}</ul>
      {empChannel}
      <AddButton onSubmit={handleAddChannel} />
      {loading && "通信中..."}
    </div>
  );
};

export default styled(Component);
