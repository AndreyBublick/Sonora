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

    return (
        <CarouselSection
            schema={{media:true, title:true}}
            isLoading={isLoading}
            type={'Playlists'}
            title={title}
            items={items}
            renderItem={(playlist) => (
                <PlaylistCard
                    type={'image'}
                    title={playlist.title}
                    src={playlist.src}
                />
            )}
        />
    );
};