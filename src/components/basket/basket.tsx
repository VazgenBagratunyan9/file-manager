import {fileManager} from '../../store/fileManager'

import {FC} from "react";
import {Grid} from "@mui/material";

export const Basket: FC = () => {

    const {basket} = fileManager
    return (
        <Grid
            container
            direction="column"
        >
            {
                basket.map(item => {
                    return (
                        <Grid
                            key={item.id}
                            item
                        >

                        </Grid>
                    )
                })
            }
        </Grid>
    )
}