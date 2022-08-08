/// <reference types="../.svelte-kit/types" />

import type { Contents, Content } from 'newt-client-js';

declare export type { Contents, Content };

declare export interface Image {
    _id: string
    fileName: string
    fileSize: string
    fileType: string
    height: Number
    width: Number
    src: string
};

declare export interface Meta {
    title: string
    description: string
    ogImage: Image
}

declare export interface Machine extends Content {
    name: string
    usage: string
    os: string
    cpu: string
    gpu: string
    ram: Number
    storage: Number
    image: Image
};

declare export interface Article extends Content {
    title: string
    slug: string
    meta: Meta
    body: string
}
