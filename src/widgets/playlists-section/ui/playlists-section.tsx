import { CarouselSection } from "@/src/widgets/carousel-section";
import {usePlaylists, type GetPlaylistsParams, PlaylistCard} from "@/src/entities/playlist";

type PlaylistsSectionProps = {
    title: string;
    queryPlaylistParams?: GetPlaylistsParams;
}

export const PlaylistsSection = ({ title, queryPlaylistParams }: PlaylistsSectionProps) => {
    const { data:items=[], isLoading } = usePlaylists(queryPlaylistParams);

    const ratio = "1.095 / 1"

    return (
        <CarouselSection
            schema={{media:true, title:true}}
            isLoading={isLoading}
            ratio={ratio}
            type={'Playlists'}
            title={title}
            items={items}
            mb={60}
            renderItem={(playlist) => (
                <PlaylistCard
                    ratio={ratio}
                    type={'image'}
                    title={playlist.title}
                    src={playlist.src}
                />
            )}
        />
    );
};