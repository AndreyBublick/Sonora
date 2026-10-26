import {Track} from "../../track";
import {ListResponse} from "@/src/shared/api/types";

export const mapTracksData = (data:  ListResponse<Track> | undefined) => {
    if (!data?.data) return [];
    return data.data.flatMap((item) =>
        (item.attributes.attachments ?? []).map((att) => ({
            ...att,
            id: item.id,
            title: item.attributes.title,
            likesCount: item.attributes.likesCount,
            publishedAt: item.attributes.publishedAt,
            isPublished: item.attributes.isPublished,
            image: item.attributes.images?.main?.find((img) => img.type === 'medium'),
            duration: item.attributes.duration,
            addedAt: item.attributes.addedAt,
            creator: item.attributes.user,
        })),
    );
};