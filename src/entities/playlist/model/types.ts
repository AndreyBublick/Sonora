import {BaseMediaAttributes, Tag} from "@/src/shared/api/types";

export type Playlist = {
    id: string;
    type: "playlists";
    attributes: BaseMediaAttributes & {
        updatedAt: string;
        order: number;
        tags: Tag[];
        dislikesCount: number;
        tracksCount: number;
    };
};