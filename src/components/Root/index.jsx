import React from "react";
import CSSModules from "react-css-modules";

import FolderList from "../FolderList";
import MessageList from "../MessageList";
import MessageView from "../MessageView";

import styles from "./styles.css";

import $ from "jquery/src/core";
import "jquery/src/ajax";
import "jquery/src/ajax/xhr";

class Root extends React.Component {
    constructor() {
        super();
        this.state = {"folders": []};
    }

    componentDidMount() {
        $.get(this.props.endpoints.messages_list, (result) => {
            this.setState(result);
        });
    }

    render() {
        var folders = this.state.folders.map(function(folder) {
            return folder["name"];
        });

        return (
            <div styleName="Viewport">
                <div styleName="Column-left">
                    <FolderList folders={folders} />
                </div>
                <div styleName="Column-middle">
                    <MessageList />
                </div>
                <div styleName="Column-right">
                    <MessageView />
                </div>
            </div>
        )
    }
};

export default CSSModules(Root, styles);
