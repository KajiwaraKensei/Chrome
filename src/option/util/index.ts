import { browser } from "webextension-polyfill-ts";

const MAX_CHANNEL_ID_LENGTH = 20;
const MAX_ABLE_CHANNEL = 10;
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
export const getChannels = () =>
  browser.storage.local.get("channels").then((storage) => {
    if (!storage["channels"]) {
      return [];
    }
    return storage["channels"] as string[];
  });

export const addChannel = (channelID: string) =>
  getChannels().then((channels) => {
    const nextChannels = [...new Set([...channels, channelID])];
    browser.storage.local.set({ channels: nextChannels });
    return nextChannels;
  });

export const deleteChannel = (channelID: string) =>
  getChannels().then((channels) => {
    const nextChannels = channels.filter((c) => c !== channelID);
    browser.storage.local.set({ channels: nextChannels });
    return nextChannels;
  });

export const getUsername = () =>
  browser.storage.local.get("username").then((storage) => {
    if (!storage.username) {
      return "guest";
    }
    return storage.username + "";
  });

export const updateUsername = (username: string) =>
  browser.storage.local.set({ username });
