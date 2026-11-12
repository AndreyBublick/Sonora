import {Author, AuthorPreview} from "../model/types";
import {ListResponse} from "@/src/shared/api/types";

export const toAuthorPreviews = (data: ListResponse<Author> | undefined): AuthorPreview[] => {
    if (!data?.data) return [];
    return data.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        years: item.attributes.years,
        image: item.attributes.image,
    }));
};
