import React, { FC, useState} from "react";
import {observer} from "mobx-react-lite";
import {iFolder} from "../../interfaces/fileManager";
import OutsideClickHandler from 'react-outside-click-handler';

import {Folder as FolderIcon} from '../../assets/icons'

import {Grid} from "@mui/material";

import {Settings} from "./settings";

import fileManager from "../../store/fileManager";



export const Folder: FC<iFolder> = observer(({folder}) => {
    const [show, setShow] = useState(false)
    const {open} = fileManager
    const toggleDropdown = () => {
        console.log(show)
        setShow(prevState => !prevState)
    }
    const handleOpenFolder = () => {
        open(folder)
    }
    return (

        <Grid
            maxWidth={100}
            item
            justifyContent='center'
            onDoubleClick={handleOpenFolder}
        >
            <OutsideClickHandler disabled={!show} onOutsideClick={toggleDropdown}>
                <Grid onClick={toggleDropdown}>
                    <FolderIcon fontSize="large"/>
                </Grid>
                <Grid maxWidth={100}>
                    {folder.name}
                </Grid>
                {
                    show &&
                    <Grid position="absolute">
                        <Settings id={folder.id} toggleDropdown={toggleDropdown}/>
                    </Grid>
                }
            </OutsideClickHandler>
        </Grid>


    )
})