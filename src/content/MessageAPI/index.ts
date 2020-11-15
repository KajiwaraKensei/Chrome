import { browser } from "webextension-polyfill-ts";
import { openNewTab } from "~/utility";
const customId = "custom-id-yes";
browser.runtime.onMessage.addListener((message, sender) => {
  switch (message.type) {
    case "onMessage":
      if (
        confirm(
          message.to + " さんがタブを共有しようとしています。開きますか？"
        )
      ) {
        openNewTab(message.url);
      }
  }
});
