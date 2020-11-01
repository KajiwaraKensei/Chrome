import React from "preact"

const ROOT_ID = "cat_root";
let newContent = document.createTextNode("Hello!");
let newElement = document.createElement("div");
newElement.appendChild(newContent)
newElement.setAttribute("id", ROOT_ID)
document.body.insertBefore(newElement, document.body.firstChild);

const Component = () => <div>Hello</div>;
React.render(<Component />, document.getElementById(ROOT_ID));
