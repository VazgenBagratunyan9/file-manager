import React, {ChangeEvent, FC, useState} from "react";
import {Button, TextField} from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileManager from "../../store/fileManager";

export const TopBar:FC = ()=>{
    const [value, setValue] = useState<string>('')

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const { add, back,path} = FileManager

    const addFolder = ()=>{
        if(!!value.trim()){
            add(value)
            setValue('')
        }
    }

    return (
        <div>
            <Button onClick={addFolder}>
                <CreateNewFolderIcon/>
            </Button>

            <TextField
                value={value}
                variant="outlined"
                onChange={handleInput}
            />
            {
                path.length > 1 &&
                <Button onClick={() => {back()}}>
                    <ArrowBackIcon/>
                </Button>
            }

        </div>
    )
}