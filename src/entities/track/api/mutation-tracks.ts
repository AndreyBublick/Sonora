import {request} from "@/src/shared/api";
import {MutateResponse} from "./types";

export const likeTrack = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/tracks/${id}/likes` });

export const dislikeTrack = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/tracks/${id}/dislikes` });

export const removeTrack = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "DELETE", url: `/playlists/tracks/${id}/reactions` });