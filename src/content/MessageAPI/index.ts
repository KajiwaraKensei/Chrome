// ______________________________________________________
// 
import { browser } from "webextension-polyfill-ts";
import { ConfirmType } from "~/content/components/Confirm/Component";
import { getType } from "~/utility";

// ______________________________________________________
// 
export type callbackProps = { to: string; url: string; type?: ConfirmType };

export default (callback: (p: callbackProps) => void) => {

  // background.jsからのメッセージを受け取る
  browser.runtime.onMessage.addListener(async (message, sender) => {
    switch (message.type) {
      case "onMessage":
        const type = await getType();
        callback({ to: message.to, url: message.url, type }); //コールバック
    }
  });
};
