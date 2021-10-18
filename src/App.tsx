import React, {FC,useEffect} from 'react';

import {observer} from "mobx-react-lite";

import {fileManager} from "./store/fileManager";

import {Path} from "./components/path";
import {FileExplorer} from "./components/fileExplorer";
import {Grid} from "@mui/material";




export const App:FC = observer(() => {

    const {getStore} = fileManager

    useEffect(()=>{

        getStore()

    },[getStore])


    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <Path />
            </Grid>
            <Grid item>
                <FileExplorer />
            </Grid>
        </Grid>
    );
})


