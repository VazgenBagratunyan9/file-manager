import {makeAutoObservable} from "mobx";
import {iFile, iFileManager} from '../interfaces/fileManager'
import uniqid from 'uniqid';

class FileManager implements iFileManager {
    count = 5
    globalFolder = [
        {
            id: '1.1',
            name: 'aaa',
            folder: [
                {
                    id: '2.1',
                    name: 'bbb',
                    folder: [
                        {
                            id: '3.1',
                            name: 'ccc',
                            folder: [
                                {
                                    id:'4.1',
                                    name: 'ddd11',
                                }
                            ]
                        },
                        {
                            id: '3.2',
                            name: 'cccc',
                            folder: [
                                {
                                    id:'4.1.sds',
                                    name: 'ddddddd',
                                    folder:[{id:'5',name:'sds'}]
                                },
                                {
                                    id:'4.2.sds',
                                    name: 'ddddddd',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]


    constructor() {
        makeAutoObservable(this)
        this.addFolder = this.addFolder.bind(this)
    }

    searchFolder(obj: any[], i: number, id: string,myObj:object){
        const prevFolder = [...obj];


        const myFolder = obj.find(item => item.id === id)
        console.log(myFolder === myObj)

        if(myFolder){
            console.log(i)
            console.log(myFolder.id)
        }


        if(!myFolder && !!obj[i].folder){
            this.searchFolder(obj[i].folder,i,id,myObj)
        }else{

        }


    }

    addFolder(myObj:object, id: string) {
         this.searchFolder(this.globalFolder, 0, id,myObj)

    }

    addFile(name: string) {

    }

    removeFolder() {

    }

    removeFile() {

    }
}

export default new FileManager()