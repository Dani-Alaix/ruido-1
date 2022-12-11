export interface Media {
    id?: any,
    name: string,
    description: string,
    isImage: boolean,
    isVideo: boolean,
    previewSrc: string,
    previewAudio: string,
    comments: {
        user: string,
        comment: string,
        date: Date,
        //like: boolean,
    }[]
}
