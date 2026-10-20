import {request} from "@/src/shared/api";
import {Track} from "../model/types";
import {GetTracksParams} from "./types";
import {ListResponse} from "@/src/shared/api/types";

export const getTracks = (params: GetTracksParams = {}): Promise<ListResponse<Track>> =>
    request<ListResponse<Track>>({
        method: "GET",
        url: "/playlists/tracks",
        params,
    });

export const getTrackById = (id: string): Promise<Track> =>
    request<Track>({ method: "GET", url: `/playlists/tracks/${id}` });

export const getTracksByPlaylistId = (artistId: string): Promise<Track[]> =>
    request<Track[]>({ method: "GET", url: `/playlists/tracks`, params: { artistId } });