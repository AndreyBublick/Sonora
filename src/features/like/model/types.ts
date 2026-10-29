import {ListResponse, MutateResponse} from "@/src/shared/api/types";
import {Track} from "@/src/entities/track";

export type LikeState = "liked" | null;

export type LikeVariables = {
    trackId: string;
    currentState: LikeState;
}

export type UseLikeTrackOptions = {
    onSuccess?: (response: MutateResponse, variables: LikeVariables) => void;
    onError?: (error: unknown) => void;
}

export type LikeContext = {
    previous: [readonly unknown[], ListResponse<Track> | undefined][];
};