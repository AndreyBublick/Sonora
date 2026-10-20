export type Image = {
    type: "thumbnail" | "original" | "medium";
    width: number;
    height: number;
    fileSize: number;
    url: string;
};

export type User = {
    id: string;
    name: string;
};

export type Tag = {
    id: string;
    name: string;
};

export type SortDirection = "asc" | "desc";

export type BaseListParams = {
    pageNumber?: number;
    pageSize?: number;
    search?: string;
    sortDirection?: SortDirection;
    tagIds?: string[];
    userId?: string;
    onlyLikedByMe?: boolean;
};

export type BaseMediaAttributes = {
    title: string;
    addedAt: string;
    likesCount: number;
    duration: number;
    currentUserReaction: number;
    images?: { main: Image[] };
    user?: User;
};

export type MutateResponse = {
    objectId: string;
    value: number;
    likes: number;
    dislikes: number;
};