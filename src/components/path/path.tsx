import React, {FC} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {fileManager} from '../../store/fileManager'
import {observer} from 'mobx-react-lite'


export const Path: FC = observer(() => {
    const {path, link} = fileManager

    return (
        <Breadcrumbs>
            {
                path.map(item => {
                    return (
                        <Link
                            key={item.id}
                            onClick={() => {
                                link(item.id)
                            }}
                            underline="hover"
                            sx={{color:"inherit"}}
                            href="#"
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </Breadcrumbs>
    );
})
