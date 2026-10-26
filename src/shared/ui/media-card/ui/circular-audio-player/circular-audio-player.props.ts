import {ReactNode} from "react";
import {OnLoadMedia} from "../../media-card.props";

export type CircularAudioPlayerProps = {
    onLoadMedia?:OnLoadMedia
    src: string;
    cover?: string;
    fallbackCover?: ReactNode;
    size?: number;
    isCircle?:boolean;
}