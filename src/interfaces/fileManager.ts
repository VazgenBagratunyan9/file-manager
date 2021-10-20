import uniqid from "uniqid";

export interface iFile {
    id:string,
    name:string,
    parentID?:string
    folder?:iFile[],
    basket?:iFile[]
}

export interface iFileManager {
    currentFolder: iFile
    path: iFile[]
    basket:iFile[]
    prevFolder: iFile[]
}

export interface iFolderOrFile {
    folder: iFile
}

export interface iSettings {
    id:string
    toggleDropdown:()=>void
}




