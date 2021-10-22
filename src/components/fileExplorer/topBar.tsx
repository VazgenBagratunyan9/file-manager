import React, {ChangeEvent, FC, useState} from "react";
import {Alert, Button, FormControl, Grid, InputLabel, Select, SelectChangeEvent, TextField} from "@mui/material";

import {fileManager} from "../../store/";
import {MUIArrowBackIcon, MUICreateNewFolderIcon, MUIDeleteOutlineIcon, MUIDescriptionIcon} from "../../assets/icons";
import {observer} from "mobx-react-lite";
import {MenuItem} from "@mui/material/";

export const TopBar: FC = observer(
    () => {
        const [value, setValue] = useState<string>('')
        const [fileFormat, setFileFormat] = useState<string>('')


        const handleChange = (e: SelectChangeEvent) => {
            setFileFormat(e.target.value)
        }

        const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }

        const {addFolder, addFile, back, path,alertName} = fileManager

        const addNewFolder = () => {
            if (!!value.trim()) {
                addFolder(value)
                setValue('')
            } else {
                alertName('folder name not specified')
            }
        }

        const addNewFile = () => {
            if (!!value.trim() && !!fileFormat) {
                addFile(value, fileFormat)
                setValue('')
            } else {
                alertName('file name or format not specified')
            }
        }

        return (
            <Grid
                container
            >
                {/*button addFolder*/}

                <Grid item>
                    <Button onClick={addNewFolder}>
                        <MUICreateNewFolderIcon/>
                    </Button>
                </Grid>


                {/*button addFile*/}

                <Grid
                    item
                    justifyItems={"center"}
                    sx={{border: 1, borderRadius: 1, marginRight: 2}}
                >
                    <Button onClick={addNewFile}>
                        <MUIDescriptionIcon/>
                    </Button>
                    <FormControl variant={"standard"} sx={{minWidth: 40, minHeight: 5}}>
                        <Select
                            sx={{height: 35}}
                            defaultValue={fileFormat}
                            value={fileFormat}
                            onChange={handleChange}
                        >
                            <MenuItem value={'.text'}>txt</MenuItem>
                            <MenuItem value={'.gif'}>gif</MenuItem>
                            <MenuItem value={'.jpeg'}>jpeg</MenuItem>
                            <MenuItem value={'.pdf'}>pdf</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


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
                        <Button onClick={() => {
                            back()
                        }}>
                            <MUIArrowBackIcon/>
                        </Button>
                    }
                </Grid>

            </Grid>
        )
    }
)