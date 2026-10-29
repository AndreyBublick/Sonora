import {Track} from "../../track";
import {ListResponse} from "@/src/shared/api/types";

export type FlatTrack = {
    id: string;
    title: string;
    likesCount: number;
    currentUserReaction: number;
    publishedAt?: string;
    isPublished: boolean;
    image?: { url: string; width: number; height: number; fileSize: number };
    duration: number;
    addedAt: string;
    creator?: { id: string; name: string };
    url: string;
    contentType: string;
    originalName?: string;
};

export const mapTracksData = (data:  ListResponse<Track> | undefined):FlatTrack[] => {
    if (!data?.data) return [];
    return data.data.flatMap((item) =>
        (item.attributes.attachments ?? []).map((att) => ({
            ...att,
            id: item.id,
            title: item.attributes.title,
            likesCount: item.attributes.likesCount,
            currentUserReaction: item.attributes.currentUserReaction,
            publishedAt: item.attributes.publishedAt,
            isPublished: item.attributes.isPublished,
            image: item.attributes.images?.main?.find((img) => img.type === 'medium'),
            duration: item.attributes.duration,
            addedAt: item.attributes.addedAt,
            creator: item.attributes.user,
        })),
    );
};