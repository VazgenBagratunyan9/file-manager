import React, {ChangeEvent, FC, useState} from "react";
import {fileManager} from "../../store/";

import {Grid,ListItemIcon ,ListItemText,Paper, TextField} from "@mui/material";
import {iSettings} from "../../interfaces/fileManager";
import {MUIDriveFileRenameOutlineIcon, MUIRestoreFromTrashIcon} from "../../assets/icons";

import {MenuItem} from "@mui/material/";


export const Settings: FC<iSettings> = ({id, toggleDropdown}) => {
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
                    <Paper sx={{width: 120, maxWidth: '100%'}}>
                        <MenuItem onClick={folderDelete}>
                            <ListItemIcon>
                                <MUIRestoreFromTrashIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Delete</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => setIsRename(p => !p)}>
                            <ListItemIcon>
                                <MUIDriveFileRenameOutlineIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>rename</ListItemText>
                        </MenuItem>
                    </Paper>
                </Grid>

            }
            {
                isRename &&
                <Grid item>
                    <form onSubmit={rename}>
                        <TextField
                            value={value}
                            variant="standard"
                            onChange={handleInput}
                            sx={{width: 120, maxWidth: '100%'}}
                        />
                    </form>
                </Grid>
            }
        </Grid>

    )
}