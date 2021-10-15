export interface iFile {
    id:string,
    name:string,
    folder?:iFile[] | [],
}

export interface iFolder {
    file?: iFile,
    folder?:iFolder[]
}

export interface iFileManager {
    globalFolder:iFile[]
}

