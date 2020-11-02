
const ROOT_ID = "cat_root";
let newContent = document.createTextNode("Hello!");
let newElement = document.createElement("div");
newElement.appendChild(newContent);
newElement.setAttribute("id", ROOT_ID);
newElement.onclick = () => {
  console.log("click");
  chrome.tabs.reload()
};
document.body.insertBefore(newElement, document.body.firstChild);
