import {makeAutoObservable} from "mobx";
import {iFile} from '../interfaces/fileManager'
import uniqid from 'uniqid';


class FileManager  {
    currentFolder: iFile = {id:uniqid(),name:'document',folder:[]}
    path: iFile[] = [this.currentFolder]
    basket:iFile[] = []
    prevFolder: iFile[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getStore = ()=>{
        const currentFolderStore = sessionStorage.getItem('currentFolder')
        const pathStore = sessionStorage.getItem('path')
        const prevFolderStore = sessionStorage.getItem('prevFolder')

        if(currentFolderStore && pathStore && prevFolderStore){
            this.currentFolder = JSON.parse(currentFolderStore)
            this.path = JSON.parse(pathStore)
            this.prevFolder = JSON.parse(prevFolderStore)
            this.setStore()
        }
    }

    setStore = ()=>{
        sessionStorage.setItem('currentFolder',JSON.stringify(this.currentFolder))
        sessionStorage.setItem('path',JSON.stringify(this.path))
        sessionStorage.setItem('prevFolder',JSON.stringify(this.prevFolder))
    }
    addFile = ()=>{

    }
    add = (name:string)=>{
        if(this.currentFolder.folder)
        this.currentFolder.folder = [...this.currentFolder.folder,{id:uniqid(),name:name,folder:[]}]
        this.setStore()
    }

    open = (obj: iFile) => {
        this.path.push(obj)
        this.currentFolder = obj
        this.setStore()
    }

    link = (id: string) => {
        const idx = this.prevFolder.findIndex(item => item.id === id)
        console.log(idx)
        if(idx >= 0){
            const count = (this.prevFolder.length) - idx
            this.prevFolder.splice(idx+1, count)
            this.path.splice(idx+1, count)
            this.currentFolder = this.prevFolder[this.prevFolder.length-1]
            this.setStore()
        }
    }

    remove = (id: string) => {
        if(this.currentFolder.folder){
            const idx = this.currentFolder.folder?.findIndex(item => item.id === id)
            if(idx >= 0){
                const remove= this.currentFolder.folder?.splice(idx,1)
                this.basket.push(remove[0])
                this.setStore()
            }
        }
    }

    changeName = (id:string,value:string)=>{
        if(this.currentFolder.folder){
            const idx = this.currentFolder.folder?.findIndex(item => item.id === id)
            if(idx >= 0){
                this.currentFolder.folder[idx].name = value
                this.setStore()
            }
        }
    }

    back = () => {
        if(this.prevFolder.length > 0){
            this.currentFolder = this.prevFolder[this.prevFolder.length - 1]
            this.prevFolder.pop()
            this.path.pop()
            this.setStore()
        }

    }
}

export const fileManager = new FileManager()

