import React, {ChangeEvent} from 'react';
import FileManager from './store/fileManager'
import {observer} from "mobx-react-lite";
import fileManager from "./store/fileManager";



export const App = observer(() => {
    const {globalFolder,addFolder} = fileManager

    return (
        <div className="App" >

            <ul>
                {globalFolder.map(item=>{
                    return <ul>
                        {
                           !!item.folder && <ul>
                                <li onDoubleClick={()=>{addFolder('sss',item.id)}}>{item.name} folder</li>
                            </ul>
                        }

                        {
                            !!item.file && <ul>
                                <li>{item.file.name} file</li>
                            </ul>
                        }


                    </ul>
                })}
            </ul>
        </div>
    );
})

export default App;
