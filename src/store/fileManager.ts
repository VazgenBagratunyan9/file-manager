import {makeAutoObservable, remove} from "mobx";
import {iFile} from '../interfaces/fileManager'
import uniqid from 'uniqid';


class FileManager  {
    currentFolder: iFile = {id:uniqid(),name:'document',folder:[]}
    path: iFile[] = [this.currentFolder]
    prevFolder: iFile[] = []

    constructor() {
        makeAutoObservable(this)
    }


    add = (name:string)=>{
        if(this.currentFolder.folder)
        this.currentFolder.folder = [...this.currentFolder.folder,{id:uniqid(),name:name,folder:[]}]
    }

    open = (obj: iFile) => {
        this.prevFolder.push(this.currentFolder)
        this.path.push(obj)
        this.currentFolder = obj
    }

  

    byLink = (id: string) => {
        const idx = this.prevFolder.findIndex(item => item.id === id)
        console.log(idx)
        if(idx >= 0){
            const count = (this.prevFolder.length) - idx
            this.prevFolder.splice(idx+1, count)
            this.path.splice(idx+1, count)
            this.currentFolder = this.prevFolder[this.prevFolder.length-1]
        }

    }

    remove = (id: string) => {
        if(this.currentFolder.folder){
            const idx = this.currentFolder.folder?.findIndex(item => item.id === id)
            if(idx >= 0){
                this.currentFolder.folder?.splice(idx,1)
            }
        }
    }

    changeName = (id:string,value:string)=>{
        if(this.currentFolder.folder){
            const idx = this.currentFolder.folder?.findIndex(item => item.id === id)
            if(idx >= 0){
                this.currentFolder.folder[idx].name = value
            }
        }
    }

    back = () => {
        if(this.prevFolder.length > 0){
            this.currentFolder = this.prevFolder[this.prevFolder.length - 1]
            this.prevFolder.pop()
            this.path.pop()
        }

    }
}

export default new FileManager()