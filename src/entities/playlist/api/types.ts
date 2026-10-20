import {BaseListParams} from "@/src/shared/api/types";

export type PlaylistsSortBy = "addedAt" | "likesCount";

export type GetPlaylistsParams = BaseListParams & {
    sortBy?: PlaylistsSortBy;
    trackId?: string;
};