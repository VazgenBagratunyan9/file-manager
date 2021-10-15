import React, {ChangeEvent} from 'react';
import FileManager from './store/fileManager'
import {observer} from "mobx-react-lite";
import fileManager from "./store/fileManager";
import {Folder} from "./components/folder";



export const App = observer(() => {
    const {count,globalFolder} = fileManager
    console.log(count)
    return (
        <div className="App" >

            <ul>
                <Folder folder={globalFolder} />
            </ul>
        </div>
    );
})

export default App;
