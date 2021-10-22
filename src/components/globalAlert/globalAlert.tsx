import {FC, useEffect, useState} from "react";
import {Alert, Grid} from "@mui/material";
import {fileManager} from "../../store";

export const GlobalAlert:FC = ()=>{

    const {alert,alertName} = fileManager
    useEffect(()=>{

        const time = setTimeout(()=>{
            alertName('')
        },2000)

        return ()=>{
            clearTimeout(time)
        }
    },[alertName])

    return <Grid container sx={{position:'absolute',left:'50%',top:'10px'}}>
        <Grid item>
            <Alert variant="outlined" severity="error">
                {alert}
            </Alert>
        </Grid>
    </Grid>
}