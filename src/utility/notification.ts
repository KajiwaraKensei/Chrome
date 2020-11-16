// ______________________________________________________
// 主に通知
import { browser } from "webextension-polyfill-ts";

// ______________________________________________________
// 通知の設定を取得
export const getNotificationConfig = () =>
  browser.storage.local.get("notificationConfig").then((storage) => {
    if (storage.notificationConfig === undefined) {
      return false;
    }
    return !!storage.notificationConfig;
  });

// ______________________________________________________
// 通知設定の更新
export const setNotificationConfig = (notificationConfig: boolean) =>
  browser.storage.local.set({ notificationConfig });

// ______________________________________________________
// 通知の設定をリセット
export const resetNotification = async () => {
  await setNotificationConfig(true);
};
