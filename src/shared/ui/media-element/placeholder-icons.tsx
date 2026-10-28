import {ReactNode} from "react";
import {getMediaType} from "@/src/shared/lib/utils";
import {MediaType} from "@/src/shared/types";

const placeholderIcons: Record<MediaType, ReactNode> = {
    image: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-list-music preview-icon">
            <path d="M16 5H3"/><path d="M11 12H3"/><path d="M11 19H3"/><path d="M21 16V5"/><circle cx="18" cy="16" r="3"/>
        </svg>
    ),
    video: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-video">
            <path d="m16 13 5.223 3.482v-6.964Z"/><rect x="3" y="5" width="13" height="14" rx="2"/>
        </svg>
    ),
    audio: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-music-2 preview-icon">
            <circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/>
        </svg>
    ),
    text: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-file-text">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        </svg>
    ),
    other: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-image">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
    ),
};

type PlaceholderIconsProps = {
    src?: string;
    type?: MediaType;
};

export const PlaceholderIcons = ({ src, type }: PlaceholderIconsProps) => {
    const mediaType = type ?? getMediaType(src || '');

    return <>{placeholderIcons[mediaType]}</>;
};