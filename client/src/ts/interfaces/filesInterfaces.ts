// TYPES FOR FILES
export type FilesType = FileList | File[]

export type FilesMetadataArray = {
    name: string,
    type: string,
    size: number,
    lastModified: number
}[]

// Interface for filesContext
export interface FilesInterface {
    files: File[],
    setFiles: React.Dispatch<React.SetStateAction<File[]>>,
}