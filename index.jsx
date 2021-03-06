import React from "react";
import ReactDOM from "react-dom";

import Root from "./src/components/Root";
import "normalize.css/normalize.css";
import "./src/styles/global.scss";

var endpoints = {
    "messages_list": "http://localhost:8080/messages"
};

ReactDOM.render(
    <Root endpoints={endpoints} />,
    document.getElementById("root"));

// for React DevTools
if (typeof window !== "undefined") {
    window.React = React;
}
