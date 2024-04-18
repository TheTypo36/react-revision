import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function MyApp() {
  return <h1>this is my app</h1>;
}
const username = "ashish raghuvanshi";
const ReactEle = React.createElement(
  "a",
  { href: "https://www.google.com" },
  "click me to go to google",
  username
);
ReactDOM.createRoot(document.getElementById("root")).render(ReactEle);
