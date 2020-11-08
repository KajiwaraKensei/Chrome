import { browser } from "webextension-polyfill-ts";

export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

export const checkLogin = async () => {
  return browser.storage.local.get("login").then(async (storage) => {
    const today = getToday();

    if (storage["login"] === today) return true;
    browser.storage.local.set({ login: today });
    return false;
  });
};
