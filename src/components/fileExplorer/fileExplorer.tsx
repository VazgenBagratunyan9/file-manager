import React, {FC, useState} from "react";
import {Button, Grid} from '@mui/material';
import {TopBar} from "./topBar";
import {FileList} from "./fileList";
import {Removal} from "../basket";
import {MUIDeleteOutlineIcon,MUISnippetFolderIcon} from '../../assets/icons'

export const FileExplorer: FC = () => {
    const [activeWindow,setActiveWindow] = useState(false)
    return (
        <Grid
            container
            direction={'column'}
            spacing={2}
        >

            <Grid container>
                {
                    !activeWindow &&
                    <Grid item>
                        <TopBar />
                    </Grid>
                }
                <Grid item >
                    <Button onClick={()=>setActiveWindow(p=>!p)}>
                        {!activeWindow && <MUIDeleteOutlineIcon />}
                        {activeWindow && <MUISnippetFolderIcon />}
                    </Button>
                </Grid>
            </Grid>

            {
                !activeWindow &&
                <Grid item>
                    <FileList />
                </Grid>
            }
            {
                activeWindow &&
                <Grid item>
                    <Removal />
                </Grid>
            }
        </Grid>
    )
}