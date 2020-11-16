// ______________________________________________________
//
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import axios from "axios";

// ______________________________________________________
//
const ROOT_ID = "cat_root";
let newContent = document.createTextNode("");
let newElement = document.createElement("div");
newElement.appendChild(newContent);
newElement.setAttribute("id", ROOT_ID);
document.body.insertBefore(newElement, document.body.lastChild);

// ______________________________________________________
//
ReactDom.render(<App />, document.getElementById(ROOT_ID));

// ______________________________________________________
//
axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Headers"] =
  "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept";
