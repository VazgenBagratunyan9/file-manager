import React, {FC} from "react";
import {Grid} from '@mui/material';
import {TopBar} from "./topBar";
import {ExplorerWindow} from "./ExplorerWindow";


export const FileExplorer: FC = () => {

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
                <ExplorerWindow />
            </Grid>
        </Grid>
    )
}