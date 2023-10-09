export interface bookItem {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        authors: string[];
        categories: string[];
        publisher: string;
        publishedDate: string;
        description: string;
        language: string;
        previewLink: string;
        pageCount: number;
        imageLinks:{
            smallThumbnail: string;
            thumbnail: string;
        }

    };
}
