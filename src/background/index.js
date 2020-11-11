import { checkURL } from "~/utility";
const SENDER_ID = "577226677636";

const refreshToken = async () => {
  const tokenParams = {
    authorizedEntity: SENDER_ID,
    scope: "GCM",
  };
  let token = await new Promise((resolve, reject) => {
    chrome.instanceID.getToken(tokenParams, (token) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(token);
      }
    });
  });
  await new Promise((resolve, reject) => {
    chrome.storage.local.set({ token }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};
chrome.runtime.onInstalled.addListener((details) => {
  new Notification('"onInstalled" event fired', {
    body: JSON.stringify(details),
  });
  refreshToken();
});
chrome.instanceID.onTokenRefresh.addListener(() => {
  new Notification('"onTokenRefresh" event fired');
  refreshToken();
});
chrome.gcm.onMessage.addListener((res) => {
  console.log(res);
  const message = res.data.message || "不明";
  const to = res.data.to || "guest";

  if (checkURL(message)) {
    chrome.tabs.create({ url: message });
    return;
  }
  new Notification('"onMessage" event fired', {
    body: to + "から: " + message,
  });
});

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (request) {
    var path = request.type;
    console.log("back", path);
    port.postMessage({ data: request.path });
  });
});

chrome.runtime.onMessage.addListener(function (message) {
  switch (message.type) {
    case "newConfig":
      chrome.tabs.create({
        url: "chrome://extensions/?options=" + chrome.runtime.id,
      });
      break;
    case "newTab":
      chrome.tabs.create({ url: message.url });
  }
});
