import React from "react";
import styled from "./style";
export type Props = {};
import CheckIcon from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  getChannels,
  deleteChannel,
  addChannel,
  setSelectChannel,
  getSelectChannel,
} from "~/utility/channel";
import { sendMessage } from "~/utility/CloudFunctions";
import { browser } from "webextension-polyfill-ts";

const Component: React.FC<Props> = (props) => {
  const [channels, setChannels] = React.useState<null | string[]>(null); // 登録チャンネルリスト
  const [error, setError] = React.useState(""); // エラーメッセージ
  const [loading, setLoading] = React.useState(false); // ロード中か true:ロード中
  const [selectChannelID, setSelectChannelID] = React.useState("ken"); // 選択中のチャンネル

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

  // チャンネル選択処理
  const handleClickChannelID = (channelID: string) => () => {
    if (loading) return;
    setLoading(true);
    setSelectChannelID(channelID);
    sendMessage(channelID, location.href).finally(() => {
      setLoading(false);
    });
  };

  const handleClickSetting = () => {
    browser.runtime.sendMessage({ type: "newConfig" });
  };

  // channels 展開
  const mapChannels =
    channels &&
    channels.map((channel) => (
      <li
        key={"channel_" + channel}
        className={channel === selectChannelID ? "select" : "not_select"}
        onClick={handleClickChannelID(channel)}
      >
        {channel}
      </li>
    ));

  const empChannel = channels && channels.length === 0 && <div>登録なし</div>;

  return (
    <li {...props}>
      <h2>
        共有{" "}
        <SettingsIcon
          onClick={handleClickSetting}
          fontSize="small"
          className="setting_icon"
        />
      </h2>
      <div className="channel_list">
        <ul>
          {mapChannels}
          {empChannel}
          {loading && <li>通信中...</li>}
        </ul>
      </div>
    </li>
  );
};

export default styled(Component);
