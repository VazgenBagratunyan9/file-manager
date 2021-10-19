import React, {ChangeEvent, FC, useState} from "react";
import {Button, Grid, TextField} from "@mui/material";

import {fileManager} from "../../store/fileManager";
import {MUIArrowBackIcon, MUICreateNewFolderIcon, MUIDescriptionIcon} from "../../assets/icons";
import {observer} from "mobx-react-lite";

export const TopBar:FC = observer(
    ()=>{
        const [value, setValue] = useState<string>('')

        const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }

        const { addFolder,addFile, back,path} = fileManager

        const addNewFolder = ()=>{
            if(!!value.trim()){
                addFolder(value)
                setValue('')
            }
        }

        const addNewFile = ()=>{
            if(!!value.trim()){
                addFile(value)
                setValue('')
            }
        }

        return (
            <Grid
                container
            >
                {/*button addFolder*/}
                <Grid item>
                    <Button onClick={addNewFolder}>
                        <MUICreateNewFolderIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={addNewFile}>
                        <MUIDescriptionIcon />
                    </Button>
                </Grid>
                {/*button addFile*/}
                <Grid item>
                    <TextField
                        value={value}
                        variant="standard"
                        onChange={handleInput}
                    />
                </Grid>
                {/*button back*/}
                <Grid item>
                    {
                        path.length > 1 &&
                        <Button onClick={() => {back()}}>
                            <MUIArrowBackIcon />
                        </Button>
                    }
                </Grid>
            </Grid>
        )
    }
)