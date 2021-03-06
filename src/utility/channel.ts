// ______________________________________________________
// 主にチャンネル関係
import { browser } from "webextension-polyfill-ts";
import {
  setChannel,
  deleteChannel as CloudDeleteChannel,
} from "~/utility/CloudFunctions";

// ______________________________________________________
// 定数
const MAX_CHANNEL_ID_LENGTH = 20;
const MAX_ABLE_CHANNEL = 5;

// ______________________________________________________
// 入力チェック
export const checkChannelID = async (channelID: string) => {
  if (!channelID.length) {
    return "入力してください";
  }
  if (channelID.length > MAX_CHANNEL_ID_LENGTH) {
    return MAX_CHANNEL_ID_LENGTH + "文字以内にしてください";
  }
  const channels = await getChannels();
  if (channels.length >= MAX_ABLE_CHANNEL) {
    return "登録は" + MAX_ABLE_CHANNEL + "件までです";
  }
  return false;
};

// ______________________________________________________
// ストレージからチャンネルを取得
export const getChannels = () =>
  browser.storage.local.get("channels").then((storage) => {
    if (!storage["channels"]) {
      return [];
    }
    return storage["channels"] as string[];
  });

// ______________________________________________________
// チャンネルを追加
export const addChannel = async (channelID: string) => {
  if (!(await setChannel(channelID))) {
    return getChannels();
  }
  return getChannels().then((channels) => {
    const nextChannels = [...new Set([...channels, channelID])];
    browser.storage.local.set({ channels: nextChannels });
    return nextChannels;
  });
};

// ______________________________________________________
// チャンネル削除
export const deleteChannel = async (channelID: string) => {
  if (!(await CloudDeleteChannel(channelID))) {
    return getChannels();
  }
  return getChannels().then((channels) => {
    const nextChannels = channels.filter((c) => c !== channelID);
    browser.storage.local.set({ channels: nextChannels });
    return nextChannels;
  });
};

// ______________________________________________________
// チャンネル選択
export const getSelectChannel = async () =>
  browser.storage.local
    .get(["select_channelID", "channels"])
    .then((storage) => {
      if (
        !storage.select_channelID ||
        !storage.channels ||
        storage.channels.indexOf(storage.select_channelID) === -1
      ) {
        throw new Error("チャンネルが選択されていません");
      }
      return storage.select_channelID + "";
    });

// ______________________________________________________
// チャンネル選択更新
export const setSelectChannel = (select_channelID: string) => {
  return browser.storage.local.set({ select_channelID: select_channelID });
};

// ______________________________________________________
// チャンネル全て削除
export const clearChannels = async () => {
  const channels = await getChannels();
  for (const channelID of channels) {
    await deleteChannel(channelID);
  }
  return;
};
