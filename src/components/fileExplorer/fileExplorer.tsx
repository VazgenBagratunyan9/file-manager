import React, {FC, useEffect} from "react";

import {observer} from "mobx-react-lite";
import FileManager from '../../store/fileManager'
import {Grid} from '@mui/material';
import {Folder} from "../folder";
import {TopBar} from "./topBar";


export const FileExplorer: FC = observer(() => {
    const {currentFolder} = FileManager

    return (
        <Grid justifyContent={'center'} padding={3}>
            <TopBar />
            <Grid container columnSpacing={2} rowSpacing={2} minWidth={500}>
                {
                     currentFolder.folder?.map(item => {
                        return (
                            <Folder key={item.id} folder={item}/>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
})