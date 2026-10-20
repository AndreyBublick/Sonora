import {CarouselSection} from "@/src/widgets/carousel-section";
import {type GetTracksParams, mapTracksData, TrackCard, useTracks} from "@/src/entities/track";
import {useMemo} from "react";

type TracksSectionProps = {
    title: string;
    queryTrackParams?:GetTracksParams
}

export const TracksSection = ({ title, queryTrackParams }: TracksSectionProps) => {
    const { data, isLoading } = useTracks(queryTrackParams);

    const items = useMemo(() => mapTracksData(data), [data]);
//todo вынести
    if (!isLoading && (!data || data?.data.length === 0)) {
        return null;
    }

    return (
        <CarouselSection
            isLoading={isLoading}
            type={'Songs'}
            title={title}
            items={items}
            renderItem={(track) => (
                <TrackCard
                    src={track.url}
                    cover={track.image?.url ?? ""}
                    type={track.contentType}
                    title={track.title}
                    meta={{ creatorName: track.creator?.name }}
                />
            )}
        />
    );
};