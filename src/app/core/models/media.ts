export interface Media {
    id: number,
    name: string,
    description: string,
    isImage: boolean,
    isVideo: boolean,
    previewSrc: string,
    previewAudio: string,
    comments: {
        user: string,
        comment: string,
        like: boolean,
    }[]
}
