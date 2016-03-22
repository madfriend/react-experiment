import React from "react";
import Folder from "./Folder";

export default function FolderList(props) {
    return (
        <div>
            {props.folders.map(function(folder_name, i) {
                return <Folder name={folder_name}/>;
            })}
        </div>
    )
}
