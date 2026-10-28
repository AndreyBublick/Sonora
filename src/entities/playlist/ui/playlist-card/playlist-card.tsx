import type {PlaylistCardProps} from "./playlist-card.props";
import {MediaCard} from "@/src/shared/ui/media-card";
import {getMediaType} from "@/src/shared/lib/utils";

const TYPE = 'image'

export const PlaylistCard = ({title, type, src}: PlaylistCardProps) => {

    const placeholder = <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-list-music preview-icon">
            <path d="M16 5H3"/>
            <path d="M11 12H3"/>
            <path d="M11 19H3"/>
            <path d="M21 16V5"/>
            <circle cx="18" cy="16" r="3"/>
        </svg>


    if (getMediaType(src) === TYPE || type.includes(TYPE)) {
        return (
            <MediaCard>
                <MediaCard.Body>
                    <MediaCard.MediaElement alt={'playlist-cover'} mediaPlaceholder={placeholder} src={src}
                                            type={TYPE}/>
                    <MediaCard.Title>{title}</MediaCard.Title>
                </MediaCard.Body>
            </MediaCard>
        );
    }

    return <></>

};