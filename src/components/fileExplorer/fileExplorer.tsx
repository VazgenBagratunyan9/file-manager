import React, {FC} from "react";

import {observer} from "mobx-react-lite";
import {fileManager} from '../../store/fileManager'
import {Grid} from '@mui/material';
import {Folder} from "../folder";
import {TopBar} from "./topBar";


export const FileExplorer: FC = observer(() => {
    const {currentFolder,basket} = fileManager

    return (
        <Grid
            container
            direction={'column'}
            spacing={2}
        >
            <Grid item>
                <TopBar />
            </Grid>
            <Grid item>
                <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}  minWidth={500}>
                    {
                        currentFolder.folder?.map(item => {
                            return (
                                <Grid item>
                                    <Folder key={item.id} folder={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}  minWidth={500}>
                    {
                        basket?.map(item => {
                            return (
                                <Grid item>
                                    <Folder key={item.id} folder={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>

        </Grid>
    )
})