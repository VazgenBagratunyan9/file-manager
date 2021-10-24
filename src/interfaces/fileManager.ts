import uniqid from "uniqid";

export interface iFile {
    id:string,
    name:string,
    type:'folder' | 'file'
    parentID?:string
    folder?:iFile[],
}

export interface iFileManager {
    currentFolder: iFile
    path: iFile[]
    removal:iFile[]
    prevFolder: iFile[]
}

export interface iFolderOrFile {
    folder: iFile
}

export interface iSettings {
    id:string
    defaultValue:string
    toggleDropdown:()=>void
}




