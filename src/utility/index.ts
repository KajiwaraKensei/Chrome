import { browser } from "webextension-polyfill-ts";
import { clearChannels } from "./channel";
import { resetNotification } from "./notification";
export const getToken = async () =>
  browser.storage.local.get("token").then((storage) => {
    return storage.token + "";
  });

export const resetStorage = async () => {
  return Promise.all([
    clearChannels(),
    updateUsername(""),
    resetNotification(),
    browser.storage.local.set({ login: "" }),
  ])
    .then(() => true)
    .catch(() => false);
};

export const pageReload = () => {
  browser.tabs.reload();
};

export const updateUsername = (username: string) =>
  browser.storage.local.set({ username });

export const getUsername = () =>
  browser.storage.local.get("username").then((storage) => {
    if (!storage.username) {
      return "guest";
    }
    return storage.username + "";
  });

export const checkURL = (url: string) => {
  const pattern1 = /^(https|http):\/\/([a-z]{1,}\.|)(qiita\.com)(\/(.*)|\?(.*)|$)$/g;
  return pattern1.test(url);
};
