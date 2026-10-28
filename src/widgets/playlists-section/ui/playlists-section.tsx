import { CarouselSection } from "@/src/widgets/carousel-section";
import {usePlaylists, mapPlaylistsData, type GetPlaylistsParams, PlaylistCard} from "@/src/entities/playlist";
import { useMemo } from "react";

type PlaylistsSectionProps = {
    title: string;
    queryPlaylistParams?: GetPlaylistsParams;
}

export const PlaylistsSection = ({ title, queryPlaylistParams }: PlaylistsSectionProps) => {
    const { data, isLoading } = usePlaylists(queryPlaylistParams);

    const items = useMemo(() => mapPlaylistsData(data), [data]);
    const ratio = "1.095 / 1"

    return (
        <CarouselSection
            schema={{media:true, title:true}}
            isLoading={isLoading}
            ratio={ratio}
            type={'Playlists'}
            title={title}
            items={items}
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