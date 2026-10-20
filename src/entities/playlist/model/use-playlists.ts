"use client";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getPlaylists } from "../api/get-playlists";
import type { GetPlaylistsParams } from "../api/types";

export const usePlaylists = (params: GetPlaylistsParams = {}) =>
    useQuery({
            queryKey: ["playlists", params],
            queryFn: () => getPlaylists(params),
            placeholderData: keepPreviousData,
            staleTime: 60_000,
            meta: { skipToast: true },
    });