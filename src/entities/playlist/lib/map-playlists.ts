import type { Playlist } from "../model/types";
import type { ListResponse } from "@/src/shared/api/types";

export const mapPlaylistsData = (data?: ListResponse<Playlist>) => {
    if (!data?.data) return [];

    return data.data.map((playlist) => {
        const attrs = playlist.attributes;
        const image = attrs.images?.main?.find(img => img.type === 'medium')
            ?? attrs.images?.main?.[0];

        return {
            id: playlist.id,
            title: attrs.title,
            src: image?.url ?? "",
            tracksCount: attrs.tracksCount,
            creatorName: attrs.user?.name,
            likesCount:attrs.likesCount,
            type:playlist.type
        };
    });
};