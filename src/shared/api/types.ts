export type ApiMeta = {
    page: number;
    pageSize: number;
    totalCount: number;
    pagesCount: number;
    nextCursor?: string;
};

export type IncludedResource = {
    id: string;
    type: string;
    attributes: Record<string, unknown>;
};

export type BodyResponse<T> = {
    data: T;
    meta?: ApiMeta;
    included?: IncludedResource[];
};

export type ListResponse<T> = BodyResponse<T[]> & { meta: ApiMeta };

export type EntityResponse<T> = {
    data: T;
};