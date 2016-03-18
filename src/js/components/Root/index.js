var React = require("react");
import {Menu} from "../Menu";

export class Root extends React.Component {
    constructor() {
        super();
    }

    render() {
        return React.createElement("div", null, [
            React.createElement(Menu, null),
            React.DOM.h1(null, "Hello")
        ]);
    }
};

