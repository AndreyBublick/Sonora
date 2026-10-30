import {ReactNode} from "react";
import {OnLoadMedia} from "@/src/shared/ui/media-element";

export type CircularAudioPlayerProps = {
    onLoadMedia?:OnLoadMedia
    src: string;
    cover?: string;
    fallbackCover?: ReactNode;
    size?: number;
    isCircle?:boolean;
    isHovered?:boolean;
}