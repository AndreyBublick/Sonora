import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeTrack, dislikeTrack } from "../api/mutation-likes";
import {type ListResponse, type MutateResponse} from "@/src/shared/api/types";
import {type FlatTrack,type Track} from "@/src/entities/track";
import {LIKE, NONE} from "../model/constants";
import {type LikeContext, type LikeVariables, type UseLikeTrackOptions} from "./types";

const patch = (t: FlatTrack, trackId: string, liked: boolean): FlatTrack =>
    t.id === trackId
        ? {
            ...t,
            currentUserReaction: liked ? LIKE : NONE,
            likesCount: Math.max(NONE, t.likesCount + (liked ? LIKE : -1)),
        }
        : t;

export const useLikeTrack =({onSuccess, onError}: UseLikeTrackOptions = {})=> {
    const queryClient = useQueryClient();


    return useMutation<MutateResponse, unknown, LikeVariables, LikeContext>({

        onMutate: async ({ trackId, currentState }) => {
            await queryClient.cancelQueries({ queryKey: ["tracks"] });
            const previous = queryClient.getQueriesData<ListResponse<Track>>({ queryKey: ["tracks"] });
            const liked = currentState !== "liked";
            queryClient.setQueriesData<FlatTrack[]>({ queryKey: ["tracks"] }, (old) =>
                old?.map((t) => patch(t, trackId, liked)),
            );
            return { previous };
        },

        mutationFn: ({ trackId, currentState }) => {
            if (currentState === "liked") {
                return dislikeTrack(trackId);
            }
            return likeTrack(trackId);
        },

        onSuccess: (data, variables) => {
            onSuccess?.(data, variables);
        },
        onError: (error, _, ctx) => {
            ctx?.previous.forEach(([key, data]) => queryClient.setQueryData(key, data));
            onError?.(error);
        },
    });
}
