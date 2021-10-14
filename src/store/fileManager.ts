import {makeAutoObservable} from "mobx";
import {iFileManager, iFolder} from '../interfaces/fileManager'
import uniqid from 'uniqid';
class FileManager implements iFileManager{

    globalFolder = [
        {
            id:'1',
            name:'new folder',
            file:{
                id:'1',
                name:'index.html'
            },
            folder:{
                id:'3',
                name:'folder'
            }
        }
    ]


    constructor(){
        makeAutoObservable(this)
        this.addFolder = this.addFolder.bind(this)
    }

    addFolder(name:string,id:string){
        const idx = this.globalFolder.findIndex(item=>item.id === id)
        console.log(idx)
        this.globalFolder[idx].folder.push({
            id:'1',
            name:'new folder'
        })
    }

    addFile(name:string){

    }

    removeFolder(){

    }

    removeFile(){

    }
}

export default new FileManager()