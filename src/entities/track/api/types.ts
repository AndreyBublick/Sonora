export type TracksSortBy = "publishedAt" | "likesCount";
export type TracksSortDirection = "asc" | "desc";
export type TracksPaginationType = "offset" | "cursor";

export type GetTracksParams = {
    pageNumber?: number;
    pageSize?: number;           // 0–20, default: 20
    search?: string;
    sortBy?: TracksSortBy;       // default: "publishedAt"
    sortDirection?: TracksSortDirection; // default: "desc"
    tagIds?: string[];
    artistIds?: string[];
    userId?: string;
    includeDrafts?: boolean;
    onlyLikedByMe?: boolean;
    paginationType?: TracksPaginationType; // default: "offset"
    cursor?: string;
};

export type MutateResponse = {
    objectId: string,
    value: number,
    likes: number,
    dislikes: number
}