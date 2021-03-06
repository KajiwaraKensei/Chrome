// ______________________________________________________
// root
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// ______________________________________________________
// 準備
const ROOT_ID = "cat_root";
let newContent = document.createTextNode("Hello!");
let newElement = document.createElement("div");
newElement.appendChild(newContent);
newElement.setAttribute("id", ROOT_ID);
document.body.insertBefore(newElement, document.body.lastChild);

// ______________________________________________________
// React
ReactDom.render(<App />, document.getElementById(ROOT_ID));
