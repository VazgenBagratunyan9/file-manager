export interface iFile {
    id:string,
    name:string
}

export interface iFolder extends iFile{
    file?: iFile,
    folder?:iFolder
}

export interface iFileManager {
    globalFolder?:iFolder[]
}

