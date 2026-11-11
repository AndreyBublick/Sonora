import {BaseMediaAttributes, Tag} from "@/src/shared/api/types";
import {JsonApiResource, PublishableAttributes} from "@/src/shared/types";


export type PlaylistAttributes = BaseMediaAttributes & PublishableAttributes & {
    updatedAt: string;
    order: number;
    tags: Tag[];
    dislikesCount: number;
    tracksCount: number;
};

export type Playlist = JsonApiResource<"playlists", PlaylistAttributes>;