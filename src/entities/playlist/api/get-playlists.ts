import {EntityResponse, ListResponse} from "@/src/shared/api/types";
import {Playlist} from "../model/types";
import {GetPlaylistsParams} from "./types";
import {request} from "@/src/shared/api";

export const getPlaylists = (params: GetPlaylistsParams = {}): Promise<ListResponse<Playlist>> =>
    request<ListResponse<Playlist>>({
        method: "GET",
        url: "/playlists",
        params,
    });

export const getPlaylistById = (id: string): Promise<EntityResponse<Playlist>> =>
    request<EntityResponse<Playlist>>({
        method: "GET",
        url: `/playlists/${id}`
    });
