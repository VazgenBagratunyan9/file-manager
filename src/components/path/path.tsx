import React, {FC} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {fileManager} from '../../store/fileManager'
import {observer} from 'mobx-react-lite'
import {Button} from "@mui/material";



export const Path: FC = observer(() => {
    const {path, link} = fileManager

    return (
        <Breadcrumbs>
            {
                path.map(item => {
                    return (
                        <Button
                            key={item.id}
                            onClick={() => {
                                link(item.id)
                            }}
                        >
                            {item.name}
                        </Button>
                    )
                })
            }
        </Breadcrumbs>
    );
})
