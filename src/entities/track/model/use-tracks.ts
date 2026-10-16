"use client";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTracks } from "../api/get-tracks";
import type { GetTracksParams } from "../api/types";

export const useTracks = (params: GetTracksParams = {}) =>
    useQuery({
        queryKey: ["tracks", params],
        queryFn: () => getTracks(params),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
        meta: { skipToast: true },
    });