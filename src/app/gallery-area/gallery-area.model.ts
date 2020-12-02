export interface IGalleryAreaImage {
    src: string;
    href: string;
}

export interface IGalleryAreaOptions {
    title: string;
    subtitle: string;
    images: IGalleryAreaImage[];
}