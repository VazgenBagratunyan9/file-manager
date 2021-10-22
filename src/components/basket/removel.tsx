import {fileManager} from '../../store/'

import {FC} from "react";
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Item} from "./Item";


export const Removal:FC = observer(
    () => {
        const {removal} = fileManager

        return (
            <Grid
                container
                columnSpacing={2}
                rowSpacing={2}
                minWidth={500}
            >
                {
                    removal.map(item => {
                        console.log(item)
                        return (
                            <Grid item>
                                <Item folder={item} />
                            </Grid>

                        )
                    })
                }
            </Grid>
        )
    }
)