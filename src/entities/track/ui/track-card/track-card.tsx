import type {TrackCardProps} from "./track-card.props";
import {MediaCard} from "@/src/shared/ui/media-card";
import {ReactNode, useMemo, useState} from "react";
import {LikeButton} from "@/src/features/like";

const TYPE = 'audio'

const formatDuration = (sec: number | null) => {
    if (sec == null || !isFinite(sec)) return "--:--";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
};

export const TrackCard = ({title, cover, meta, type, src, ratio="1.035 / 1", trackId, liked, likesCount}: TrackCardProps) => {

    const [mediaMeta, setMediaMeta] = useState<Record<string, unknown>>({duration: null})

    const metaAttributes = useMemo(()=>{
        return Object.entries({...(meta ?? {}), ...(mediaMeta ?? {})})
    },[meta, mediaMeta])


    if(type.includes(TYPE)) {
        return (
            <MediaCard>
                <MediaCard.Body>
                    <MediaCard.MediaElement ratio={ratio} cover={cover} src={src} type={TYPE} onLoadMedia={setMediaMeta}/>

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