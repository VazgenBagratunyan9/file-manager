import {fileManager} from '../../store/fileManager'

import {FC} from "react";
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";


export const Basket: FC = observer(
    () => {
        const {currentFolder, basket, toBringBack} = fileManager
        console.log(currentFolder)
        return (
            <Grid
                container
                direction="column"
            >
                {
                    basket.map(item => {
                        console.log(item)
                        return (
                                <Grid
                                    key={item.id}
                                    item
                                    onClick={() => {
                                        if(item.parentID)
                                        toBringBack(item.id,item.parentID)
                                    }
                                    }
                                >
                                    {item.name}
                                </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
)