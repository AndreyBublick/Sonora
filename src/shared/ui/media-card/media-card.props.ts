import {ReactNode} from "react";

export type OnLoadMedia = (media:Record<string, unknown>)=>void

    type BaseProps = {
    shape?: "square" | "circle";
    children?: ReactNode;
    mediaPlaceholder?:ReactNode
}

export type MediaElementProps =
    | {
    type?: "image";
    src: string;
    alt: string;
    onLoadMedia?:OnLoadMedia
} & BaseProps
    | {
    type: "video";
    src: string;
    poster?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    onLoadMedia?:OnLoadMedia

} & BaseProps
    | {
    type: "audio";
    src: string;
    cover?:string;
    onLoadMedia?:OnLoadMedia


} & BaseProps
    | {
    type: 'other';
} & BaseProps;