"use client";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {toNewsPreviews} from "../lib/to-news-previews";
import {News} from "../model/types";
import {ListResponse} from "@/src/shared/api/types";
import {GetNewsParams} from "../api/types";

export const MOCK_NEWS_RESPONSE: ListResponse<News> = {
    data: [
        {
            id: "news-1",
            type: "news",
            attributes: {
                id:'sdf',
                title: "First News",
                subTitle: "Subtitle 1",
                textBody: "Body text 1",
                publishedAt: "2025-09-15T00:00:00Z",
                addedAt: "2025-09-15T00:00:00Z",
                isPublished: true,
                image: { url: "/files/news-1.png", width: 200, height: 200, fileSize: 40000 },
            },
        },
    ],
    meta: { page: 1, pageSize: 1, totalCount: 1, pagesCount: 1 },
};

export const useNews = (params: GetNewsParams = {}) =>
    useQuery({
        queryKey: ["news", params],
        queryFn: async () => (Promise.resolve(MOCK_NEWS_RESPONSE) as Promise<ListResponse<News>>).then((response) => toNewsPreviews(response)),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
        meta: { skipToast: true },
    });
