import {makeAutoObservable} from "mobx";
import {iFile, iFileManager} from '../interfaces/fileManager'
import uniqid from 'uniqid';


export class FileManager implements iFileManager{
    currentFolder: iFile = {id:uniqid(),type:'folder',name:'document',folder:[]}
    path: iFile[] = [this.currentFolder]
    removal:iFile[] = []
    prevFolder: iFile[] = []
    history:iFile[] = [this.currentFolder]
    alert:string = ''

    constructor() {
        makeAutoObservable(this)
    }

    alertName = (name:string)=>{
        this.alert = name
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

    restore = (id:string,parentID:string)=>{
        const idx = this.removal.findIndex(item => item.id === id)
        console.log(idx)
        if(idx >= 0){
            const rest = this.removal.splice(idx,1)
            if(this.currentFolder.id === parentID){
                this.currentFolder.folder?.push(rest[0])
            }


            if(this.currentFolder.id !== parentID){
                this.history.map(item => {
                    if(item.id === parentID){
                        item.folder?.push(rest[0])
                    }
                })
            }
        }
    }

    addFile = (name:string,format:string)=>{
        if(this.currentFolder.folder){
            const idx =  this.currentFolder.folder.findIndex(item => (item.name === name+format && item.type === 'file'))
            if(idx < 0 ){
                this.currentFolder.folder = [...this.currentFolder.folder,{id:uniqid(),name:`${name}${format}`,type:'file'}]
                this.setStore()
            }else{
                this.alertName('this file already exists')
            }
        }
    }

    addFolder = (name:string)=>{
        if(this.currentFolder.folder){
            const idx =  this.currentFolder.folder.findIndex(item => (item.name === name && item.type === 'folder'))
            if(idx < 0){
                this.currentFolder.folder = [...this.currentFolder.folder,{id:uniqid(),name:name,folder:[],type:'folder'}]
                this.setStore()
            }else {
                this.alertName('this folder already exists')
            }
        }
    }

    open = (obj: iFile) => {
        this.path.push(obj)
        this.prevFolder.push(this.currentFolder)
        const idx = this.history.findIndex(item => item.id === obj.id)
        if(idx < 0){
            this.history.push(obj)
        }
        this.currentFolder = obj
        this.setStore()
    }

    link = (id: string) => {
        const pathIdx = this.path.findIndex(item => item.id === id)
        const prevIdx = this.prevFolder.findIndex(item => item.id === id)
        if(pathIdx >= 0 && prevIdx >=0){
            const prevCount = (this.prevFolder.length) - prevIdx+1
            const pathCount = (this.path.length) - pathIdx+1
            this.prevFolder.splice(prevIdx+1, prevCount)
            this.path.splice(pathIdx+1, pathCount)
            this.currentFolder = this.prevFolder[this.prevFolder.length-1]
            this.setStore()
        }
    }

    remove = (id: string) => {
        if(this.currentFolder.folder){
            const idx = this.currentFolder.folder?.findIndex(item => item.id === id)
            if(idx >= 0){
                const remove = this.currentFolder.folder?.splice(idx,1)
                this.removal?.push({...remove[0],parentID:this.currentFolder.id})
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



