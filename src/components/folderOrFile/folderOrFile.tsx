import React, { FC, useState} from "react";
import {observer} from "mobx-react-lite";
import {iFolderOrFile} from "../../interfaces/fileManager";
import OutsideClickHandler from 'react-outside-click-handler';
import {Grid} from "@mui/material";

import {fileManager} from "../../store/";
import {MUIDescriptionIcon, MUIFolderIcon} from "../../assets/icons";
import {Settings} from "./settings";


export const FolderOrFile: FC<iFolderOrFile> = observer(({folder}) => {
    const [show, setShow] = useState(false)
    const {open} = fileManager

    const toggleDropdown = () => {
        setShow(prevState => !prevState)
    }

    const handleOpenFolder = () => {
        open(folder)
    }


    return (
        <Grid
            maxWidth={100}
            container
            justifyContent='center'
        >
            <OutsideClickHandler disabled={!show} onOutsideClick={toggleDropdown}>
                {
                    folder?.folder &&
                    <Grid
                        item
                        onClick={toggleDropdown}
                        onDoubleClick={handleOpenFolder}
                    >
                        <MUIFolderIcon  fontSize="large"/>
                    </Grid>
                }

                {
                    !folder?.folder &&
                    <Grid
                        item
                        onClick={toggleDropdown}
                    >
                        <MUIDescriptionIcon  fontSize="large"/>
                    </Grid>
                }

                <Grid item maxWidth={100}>
                    {folder.name}
                </Grid>
                {
                    show &&
                    <Grid item position="absolute">
                        <Settings id={folder.id} toggleDropdown={toggleDropdown}/>
                    </Grid>
                }
            </OutsideClickHandler>
        </Grid>


    )
})