// ______________________________________________________
// 
import { browser } from "webextension-polyfill-ts";
import { clearChannels } from "./channel";
import { resetNotification } from "./notification";

// ______________________________________________________
// トークンの取得
export const getToken = async () =>
  browser.storage.local.get("token").then((storage) => {
    return storage.token + "";
  });

// ______________________________________________________
// データリセット
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

// ______________________________________________________
// ページリロード
export const pageReload = () => {
  browser.tabs.reload();
};

// ______________________________________________________
// ユーザー名の更新
export const updateUsername = (username: string) =>
  browser.storage.local.set({ username });

// ______________________________________________________
// ユーザー名の取得
export const getUsername = () =>
  browser.storage.local.get("username").then((storage) => {
    if (!storage.username) {
      return "guest";
    }
    return storage.username + "";
  });

// ______________________________________________________
// URLの判定
export const checkURL = (url: string) => {
  const pattern1 = /^(https|http):\/\/([a-z]{1,}\.|)(qiita\.com)(\/(.*)|\?(.*)|$)$/g;
  return pattern1.test(url);
};

// ______________________________________________________
// 新規タブを開く
export const openNewTab = (url: string) => {
  browser.runtime.sendMessage({ type: "newTab", url });
};

// ______________________________________________________
// 今日の日付の取得
export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

// ______________________________________________________
// 
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

// ______________________________________________________
// ログインの確認
export const checkLogin = async () => {
  return browser.storage.local.get("login").then(async (storage) => {
    const today = getToday();

    if (storage["login"] === today) return false;
    const type = getRandomType();
    browser.storage.local.set({ login: today, type });

    return type;
  });
};

// ______________________________________________________
// 
export const getType = () =>
  browser.storage.local.get("type").then((storage) => {
    if (!storage.type) {
      types[0];
    }
    return types[storage.type];
  });
