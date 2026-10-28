// export type MediaElementProps = {};

import {CSSProperties, ReactNode} from "react";

export type OnLoadMedia = (media:Record<string, unknown>)=>void

type BaseProps = {
    shape?: "square" | "circle";
    children?: ReactNode;
    mediaPlaceholder?:ReactNode
    src?: string;
    className?:string
    backgroundColor?:string
    style?:CSSProperties
}

export type MediaElementProps =
    | {
    type: "image";
    alt: string;
    onLoadMedia?:OnLoadMedia
} & BaseProps
    | {
    type: "video";
    poster?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    onLoadMedia?:OnLoadMedia
} & BaseProps
    | {
    type: "audio";
    cover?:string;
    onLoadMedia?:OnLoadMedia
    sizePlayElement?:number
}
& BaseProps
    | {
    type: "text";
    textBody?:string;

} & BaseProps
    | {
    type: 'other';
} & BaseProps;