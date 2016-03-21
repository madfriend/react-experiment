import React from "react";

import {FolderList} from "../FolderList";
import {MessageList} from "../MessageList";
import {MessageView} from "../MessageView";

import $ from "jquery/src/core";
import "jquery/src/ajax";
import "jquery/src/ajax/xhr";

export class Root extends React.Component {
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
            <div>
                <FolderList folders={folders} />
                <MessageList/>
                <MessageView/>
            </div>
        )
    }
};

