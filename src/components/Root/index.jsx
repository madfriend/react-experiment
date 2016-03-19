var React = require("react");
import {Menu} from "../Menu";

export class Root extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wow this works">
                <Menu/>
                <h1>Hello?</h1>
            </div>
        )
    }
};

