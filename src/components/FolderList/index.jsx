import React from "react";
import Folder from "./Folder"

export const FolderList = function(props) {
    return (
        <div>
            {props.folders.map(function(folder_name, i) {
                return <Folder name={folder_name}/>;
            })}
        </div>
    )
}
