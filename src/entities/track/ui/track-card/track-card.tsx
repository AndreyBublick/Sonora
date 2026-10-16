import type {TrackCardProps} from "./track-card.props";
import {MediaCard} from "@/src/shared/ui/media-card";
import {ReactNode, useMemo, useState} from "react";

const formatDuration = (sec: number | null) => {
    if (sec == null || !isFinite(sec)) return "--:--";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
};

export const TrackCard = ({title, cover, meta, type, src}: TrackCardProps) => {

    const [mediaMeta, setMediaMeta] = useState<Record<string, unknown>>({duration: null})

    const metaAttributes = useMemo(()=>{
        return Object.entries({...(meta ?? {}), ...(mediaMeta ?? {})})
    },[mediaMeta])

    const placeholder =  <MediaCard.MediaElement type={'other'}>
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} height={'70%'} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-music-2 preview-icon">
            <circle cx="8" cy="18" r="4"/>
            <path d="M12 18V2l7 4"/>
        </svg>
    </MediaCard.MediaElement>

    if(type.includes('audio')) {
        return (
            <MediaCard>
                <MediaCard.Body>
                    <MediaCard.MediaElement mediaPlaceholder={placeholder} cover={cover} src={src} type={'audio'} onLoadMedia={setMediaMeta}/>

                    <MediaCard.Title>{title}</MediaCard.Title>
                    <MediaCard.Meta>
                        {metaAttributes.map(([key, value]) => (
                            <span
                                key={key}
                                className="text-truncate"
                                style={{ minWidth: 0, maxWidth: "68%" }}
                            >
            {key === "duration"
                ? formatDuration(typeof value === "number" ? value : null)
                : (value as ReactNode)}
        </span>
                        ))}
                    </MediaCard.Meta>
                </MediaCard.Body>
            </MediaCard>
        );
    }

    return <></>

};