import {request} from "@/src/shared/api";
import {MutateResponse} from "@/src/shared/api/types";

export const likeTrack = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/tracks/${id}/likes` });

export const dislikeTrack = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/tracks/${id}/dislikes` });

export const likePlaylist = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/${id}/likes` });

export const dislikePlaylist = (id: string): Promise<MutateResponse> =>
    request<MutateResponse>({ method: "POST", url: `/playlists/${id}/dislikes` });
