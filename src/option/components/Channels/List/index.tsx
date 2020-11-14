// ______________________________________________________
// チャンネルリスト
import React from "react";
import styled from "./style";
import {
  getChannels,
  deleteChannel,
  addChannel,
  setSelectChannel,
  getSelectChannel,
} from "~/utility/channel";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";

export type Props = {};

const Component: React.FC<Props> = (props) => {
  const [channels, setChannels] = React.useState<null | string[]>(null); // 登録チャンネルリスト
  const [error, setError] = React.useState(""); // エラーメッセージ
  const [loading, setLoading] = React.useState(false); // ロード中か true:ロード中
  const [selectChannelID, setSelectChannelID] = React.useState(""); // 選択中のチャンネル

  // チャンネル削除処理
  const handleDeleteChannel = (channelID: string) => () => {
    setLoading(true); // ロード中に
    deleteChannel(channelID)
      .then((channels) => {
        setError("");
        setChannels(channels);
      })
      .catch(() => {
        setError("通信エラー");
      })
      .finally(() => {
        setLoading(false); // ロード終了
      });
  };

  // チャンネル追加処理
  const handleAddChannel = (channelID: string) => {
    setLoading(true); // ロード中に
    addChannel(channelID)
      .then((channels) => {
        setError("");
        setChannels(channels);
      })
      .catch(() => {
        setError("通信エラー");
      })
      .finally(() => {
        setLoading(false); // ロード終了
      });
  };

  // チャンネル選択処理
  const handleSetSelectChannelID = (channelID: string) => () => {
    setSelectChannel(channelID);
    setSelectChannelID(channelID);
  };

  // Chrome から初期値を読み込み
  React.useEffect(() => {
    getSelectChannel()
      .then(setSelectChannelID)
      .catch(() => {
        setSelectChannelID("");
      });
    getChannels()
      .then(setChannels)
      .catch(() => {
        setError("チャンネルの取得に失敗しました。");
      });
  }, []);

  // channels 展開
  const mapChannels =
    channels &&
    channels.map((channel) => (
      <li
        key={"channel_" + channel}
        className={channel === selectChannelID ? "select" : "not_select"}
        onClick={handleSetSelectChannelID(channel)}
      >
        {channel}
        {channel === selectChannelID && <span>selected</span>}
        <div className="delete_button">
          <DeleteButton onClick={handleDeleteChannel(channel)} />
        </div>
      </li>
    ));

  // 登録がない場合
  const empChannel = channels && channels.length === 0 && <div>登録なし</div>;

  return (
    <div {...props}>
      <div>
        <h2>チャンネル</h2>
        <div className="channel_list">
          <ul>
            {mapChannels}
            {empChannel}
            {loading && <li>通信中...</li>}
          </ul>
          <AddButton onSubmit={handleAddChannel} />
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default styled(Component);
