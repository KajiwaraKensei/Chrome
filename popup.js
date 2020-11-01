const SERVER_KEY =
  "AAAA07JfavQ:APA91bH5-VK8JBi0n_PT_Ll1Q4U25EkK86nnXFv4mBdFVJ7397AK5GMzV_AigZsgaOsCyveEHxaBhDD75rmYjgc6EKEbpn9kKkkIonqek3n-7iwM4XWxP15PXhI4OA_kxxSREdkaeYRv";

document.addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");
  let input = document.getElementById("token");
  let message = document.getElementById("message");
  let button = document.querySelector("button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    try {
      let result = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${SERVER_KEY}`,
        },
        body: JSON.stringify({
          data: {
            message: message.value,
          },
          to: input.value,
        }),
      }).then((response) => response.json());
      new Notification("message sent from browser action", {
        body: JSON.stringify(result),
      });
    } catch (e) {
      new Notification("message not sent from browser action", {
        body: e,
      });
    } finally {
      button.disabled = false;
    }
  });
  message.value = await new Promise((resolve, reject) => {
    chrome.storage.local.get("token", (data) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(data.token);
      }
    });
  });
  button.disabled = false;
});
