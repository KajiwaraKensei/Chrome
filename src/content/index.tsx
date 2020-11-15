import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Firebase from "firebase/app";
import "./MessageAPI";

Firebase.initializeApp({
  apiKey: "AIzaSyDKeTd2arQLi_T1xbBJlVnC6UxmFQZGW_M",
  authDomain: "extension-chrome-gotcha.firebaseapp.com",
  databaseURL: "https://extension-chrome-gotcha.firebaseio.com",
  projectId: "extension-chrome-gotcha",
  storageBucket: "extension-chrome-gotcha.appspot.com",
  messagingSenderId: "577226677636",
  appId: "1:577226677636:web:38f186eb9bbbc7b3e391d1",
});
const ROOT_ID = "cat_root";
let newContent = document.createTextNode("Hello!");
let newElement = document.createElement("div");
newElement.appendChild(newContent);
newElement.setAttribute("id", ROOT_ID);
document.body.insertBefore(newElement, document.body.lastChild);
ReactDom.render(<App />, document.getElementById(ROOT_ID));
