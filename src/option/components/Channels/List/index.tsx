import React from "react";
import styled from "./style";
import { getChannels, deleteChannel } from "~/option/util";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const [channels, setChannels] = React.useState<null | string[]>(null);
  const [error, setError] = React.useState("");

  const handleDeleteChannel = (channelID: string) => () => {
    deleteChannel(channelID).then(setChannels);
  };

  React.useEffect(() => {
    getChannels()
      .then(setChannels)
      .catch(() => {
        setError("登録チャンネルの取得に失敗しました。");
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
      <AddButton onChange={setChannels} />
    </div>
  );
};

export default styled(Component);
