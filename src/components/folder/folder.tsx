import {FC} from "react";
import {iFile} from "../../interfaces/fileManager";
import FileManager from '../../store/fileManager';
import fileManager from "../../store/fileManager";
interface iFolder {
    id?:string,
    folder:iFile[],
}
export const Folder:FC<iFolder> = ({folder,id})=>{
    const {addFolder} = fileManager

    console.log(FileManager.globalFolder)
    return (
        <ul>
            {
                folder.map(item=>{
                    return <ul key={item.id} onClick={(e)=>{
                        e.stopPropagation()
                        // console.log(item.id)
                        addFolder(item,item.id)
                    }}>
                        <li>{item.name}</li>
                        {
                            item.folder && <ul>
                                <Folder id={item.id} folder={item.folder} />
                            </ul>
                        }
                    </ul>
                })
            }
        </ul>
    )
}