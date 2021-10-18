import React, {ChangeEvent, FC, useState} from "react";
import {fileManager} from "../../store/fileManager";

import {Button, Grid} from "@mui/material";
import {DeleteForever, DriveFileRenameOutline} from "../../assets/icons";
import {iSettings} from "../../interfaces/fileManager";


export const Settings: FC<iSettings> = ({id,toggleDropdown}) => {
    const [isRename, setIsRename] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const {changeName, remove} = fileManager

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const folderDelete = () => {
        remove(id)
    }
    const rename = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!!value) {
            changeName(id, value)
            toggleDropdown()
        }
    }

    return (
        <Grid direction='row'
              container
              justifyContent="center"
              alignItems="center" bgcolor='white'>
            {
                !isRename &&
                <Grid item>
                    <Button onClick={folderDelete}>
                        <DeleteForever/>
                    </Button>
                </Grid>
            }
            {
                !isRename &&
                <Grid item>
                    <Button onClick={() => setIsRename(p => !p)}>
                        <DriveFileRenameOutline/>
                    </Button>
                </Grid>
            }
            {
                isRename &&
                <Grid item>
                    <form onSubmit={rename}>
                        <input
                            value={value}
                            onChange={handleInput}
                            style={{width:'100px'}}
                        />
                    </form>
                </Grid>
            }
        </Grid>

    )
}