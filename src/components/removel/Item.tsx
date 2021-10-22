import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {iFolderOrFile} from "../../interfaces/fileManager";

import {Grid} from "@mui/material";

import {fileManager} from "../../store/";
import {MUIDescriptionIcon, MUIFolderIcon} from "../../assets/icons";


export const Item: FC<iFolderOrFile> = observer(({folder}) => {

    const {restore} = fileManager

    const restoreFile = () => {
        if (folder.parentID) restore(folder.id, folder.parentID)
    }


    return (
        <Grid
            maxWidth={100}
            container
            direction={'column'}
        >

            {
                folder?.folder &&
                <Grid
                    item
                    onDoubleClick={restoreFile}
                >
                    <MUIFolderIcon fontSize="large"/>
                </Grid>
            }

            {
                !folder?.folder &&
                <Grid
                    item
                    onDoubleClick={restoreFile}
                >
                    <MUIDescriptionIcon fontSize="large"/>
                </Grid>
            }

            <Grid item maxWidth={100}>
                {folder.name}
            </Grid>


        </Grid>


    )
})