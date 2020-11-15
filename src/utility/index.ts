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

export const openNewTab = (url: string) => {
  browser.runtime.sendMessage({ type: "newTab", url });
};

export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};
export const types: ("snow" | "bird" | "blooming")[] = [
  "snow",
  "bird",
  "blooming",
];
const min = 0;
const max = types.length - 1;

const getRandomType = () => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};
export const checkLogin = async () => {
  return browser.storage.local.get("login").then(async (storage) => {
    const today = getToday();

    if (storage["login"] === today) return false;
    const type = getRandomType();
    browser.storage.local.set({ login: today, type });

    return type;
  });
};

export const getType = () =>
  browser.storage.local.get("type").then((storage) => {
    if (!storage.type) {
      types[0];
    }
    return types[storage.type];
  });
