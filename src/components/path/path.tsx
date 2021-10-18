/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FileManager from '../../store/fileManager'
import {observer} from 'mobx-react-lite'
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export  const Path = observer(()=> {
    const {path,byLink} = FileManager
    return (
        <div role="presentation" onClick={handleClick}>

            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                {
                    path.map(item=>{
                        return(
                            <Link onClick={
                                ()=>{byLink(item.id)}
                            } underline="hover" color="inherit" href="#">
                                {item.name}
                            </Link>
                        )
                    })
                }
            </Breadcrumbs>
        </div>
    );
})
