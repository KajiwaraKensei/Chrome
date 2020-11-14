import { browser } from "webextension-polyfill-ts";

export const getNotificationConfig = () =>
  browser.storage.local.get("notificationConfig").then((storage) => {
    if (storage.notificationConfig === undefined) {
      return false;
    }
    return !!storage.notificationConfig;
  });

export const setNotificationConfig = (notificationConfig: boolean) =>
  browser.storage.local.set({ notificationConfig });

export const resetNotification = async () => {
  await setNotificationConfig(false);
};
