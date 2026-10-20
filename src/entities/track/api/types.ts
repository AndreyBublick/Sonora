import {BaseListParams} from "@/src/shared/api/types";

export type TracksSortBy = "publishedAt" | "likesCount";
export type TracksPaginationType = "offset" | "cursor";

export type GetTracksParams = BaseListParams & {
    sortBy?: TracksSortBy;
    artistIds?: string[];
    includeDrafts?: boolean;
    paginationType?: TracksPaginationType;
    cursor?: string;
};