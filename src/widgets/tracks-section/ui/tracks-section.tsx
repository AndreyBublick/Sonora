import {CarouselSection} from "@/src/widgets/carousel-section";
import {type GetTracksParams, TrackCard, useTracks} from "@/src/entities/track";
import {LIKE} from "@/src/features/like/model/constants";

type TracksSectionProps = {
    title: string;
    queryTrackParams?:GetTracksParams
}

export const TracksSection = ({ title, queryTrackParams }: TracksSectionProps) => {
    const { data, isLoading } = useTracks(queryTrackParams);

    const items = data ?? [];
    const ratio = "1.035 / 1"

    return (
        <CarouselSection
            isLoading={isLoading}
            type={'Songs'}
            ratio={ratio}
            title={title}
            items={items}
            renderItem={(track) => (
                <TrackCard
                    ratio={ratio}
                    src={track.url}
                    cover={track.image?.url ?? ""}
                    type={track.contentType}
                    title={track.title}
                    trackId={track.id}
                    liked={track.currentUserReaction === LIKE}
                    likesCount={track.likesCount}
                    meta={{ creatorName: track.creator?.name }}
                />
            )}
        />
    );
};