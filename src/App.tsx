import React, {FC} from 'react';

import {observer} from "mobx-react-lite";


import {Path} from "./components/path";
import {FileExplorer} from "./components/fileExplorer";




export const App:FC = observer(() => {
    return (
        <div className="App" >
            <Path />
            <FileExplorer />
        </div>
    );
})


