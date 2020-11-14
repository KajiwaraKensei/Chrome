import { clearChannels, getChannels } from "../utility/channel";
import { setChannel } from "../utility/CloudFunctions";
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
  const oldToken = await chrome.storage.local
    .get("token")
    .then((storage) => storage.token);
  await new Promise((resolve, reject) => {
    chrome.storage.local.set({ token }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
  if (oldToken !== token && oldToken !== undefined) {
    await clearChannels();
    const channels = await getChannels();
    for (let channel of channels) {
      await setChannel(channel);
    }
  }
};
chrome.runtime.onInstalled.addListener((details) => {
  refreshToken();
});
chrome.instanceID.onTokenRefresh.addListener(() => {
  refreshToken();
});
chrome.gcm.onMessage.addListener((res) => {
  console.log(res);
  const message = res.data.message || "不明";
  const to = res.data.to || "guest";

  chrome.tabs.create({ url: message });
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
