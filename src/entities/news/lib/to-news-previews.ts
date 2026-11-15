import {News} from "../model/types";
import {ListResponse} from "@/src/shared/api/types";

export const toNewsPreviews = (data: ListResponse<News> | undefined) => {
    if (!data?.data) return [];
    return data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        subTitle: item.attributes.subTitle,
        textBody: item.attributes.textBody,
        publishedAt: item.attributes.publishedAt,
        isPublished: item.attributes.isPublished,
        image: item.attributes.image,
    }));
};