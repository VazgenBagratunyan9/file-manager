export interface iFile {
    id:string,
    name:string,
    folder?:iFile[] | [],
}


export interface iFolder {
    folder: iFile
}

export interface iSettings {
    id:string
    toggleDropdown:()=>void
}




