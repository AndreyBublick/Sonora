import type {WeeklyTopSongsSectionProps} from "./weekly-top-songs-section.props";
import {CarouselSection} from "@/src/widgets/carousel-section";
import {TrackCard, useTracks} from "@/src/entities/track";
import {useMemo} from "react";


export const WeeklyTopSongsSection = ({}: WeeklyTopSongsSectionProps) => {

    const {data, isLoading} = useTracks({sortBy:'likesCount'})

    const items = useMemo(()=>{

        const attachments = data?.data.flatMap((item) =>
            (item.attributes.attachments ?? []).map((att) => ({
                ...att,
                title: item.attributes.title,
                likesCount:item.attributes.likesCount,
                publishedAt:item.attributes.publishedAt,
                isPublished:item.attributes.isPublished,
                image:item.attributes.images?.main?.find(img=>img.type==='medium'),
                duration:item.attributes.duration,
                addedAt:item.attributes.addedAt,
                creator:item.attributes.user,
            })),
        );

            return attachments || []
        }, [data]
    );

    if(!isLoading && (!data || data?.data.length===0)) {
        return <></>
    }

    return (
        <CarouselSection isLoading={isLoading} type={'Songs'} title={'Weekly Top'} items={items} renderItem={(track) => {

            const medium = track.image
            const cover = medium?.url ?? "";

            return <TrackCard src={track.url} cover={cover} type={track.contentType} title={track.title} meta={{creatorName:track.creator?.name}} />

        } }/>
    );
};