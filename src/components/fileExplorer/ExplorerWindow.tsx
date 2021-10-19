import React, {FC} from "react";
import {Grid} from "@mui/material";
import {FolderOrFile} from "../folderOrFile";
import {fileManager} from "../../store/fileManager";
import {observer} from "mobx-react-lite";

export const ExplorerWindow:FC = observer(
    ()=>{
        const {currentFolder} = fileManager
        return (
            <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}  minWidth={500}>
                {
                    currentFolder.folder?.map(item => {
                        return (
                            <Grid key={item.id} item>
                                <FolderOrFile folder={item}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
)