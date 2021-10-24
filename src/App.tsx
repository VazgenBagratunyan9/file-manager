import React, {FC,useEffect,Suspense} from 'react';

import {observer} from "mobx-react-lite";

import {fileManager} from "./store/";

import {FileExplorer} from "./components/fileExplorer";
import {Grid} from "@mui/material";
import {GlobalAlert} from "./components/globalAlert";




export const App:FC = observer(() => {

    const {getStore,alert} = fileManager

    useEffect(()=>{

        getStore()

    },[getStore])


    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Grid
                container
                direction='column'
                spacing={2}
            >
                <Grid item>
                    <FileExplorer />
                </Grid>
                {
                    !!alert &&
                    <GlobalAlert />
                }

            </Grid>
        </Suspense>
    );
})


