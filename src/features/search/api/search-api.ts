import type { SearchResult } from "../model/types";
import {api} from "@/src/shared/api";

export const getSearchArtists = async (
    query: string,
    signal?: AbortSignal,
): Promise<SearchResult[]> => {
    const { data } = await api.get<SearchResult[]>("/artists/search", {
        params: { search: query },
        signal,
    });

    return data;
};