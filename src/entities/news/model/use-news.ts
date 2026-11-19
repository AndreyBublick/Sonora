"use client";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {toNewsPreviews} from "../lib/to-news-previews";
import {News} from "../model/types";
import {ListResponse} from "@/src/shared/api/types";
import {GetNewsParams} from "../api/types";
import NewsPoster from "@assets/images/news/news_poster.avif";

export const MOCK_NEWS_RESPONSE: ListResponse<News> = {
    data: [
        {
            id: "news-1",
            type: "news",
            attributes: {
                id: "news-1",
                title: "Sony Music and The Weeknd release a new album",
                subTitle: "Music and Technology",
                textBody: "Major music labels have teamed up with leading tech companies to create a new streaming platform that promises to change the way music is consumed.",
                publishedAt: "2025-09-15T00:00:00Z",
                addedAt: "2025-09-15T00:00:00Z",
                isPublished: true,
                image: { url: NewsPoster.src, width: 200, height: 200, fileSize: 40000 },
            },
        },
        {
            id: "news-2",
            type: "news",
            attributes: {
                id: "news-2",
                title: "Billie Eilish announces world tour",
                subTitle: "Concerts and Tours",
                textBody: "Popular singer Billie Eilish has officially announced her new world tour, which will kick off in spring 2026 and cover more than 30 cities worldwide.",
                publishedAt: "2025-09-16T00:00:00Z",
                addedAt: "2025-09-16T00:00:00Z",
                isPublished: true,
                image: { url: NewsPoster.src, width: 200, height: 200, fileSize: 40000 },
            },
        },
        {
            id: "news-3",
            type: "news",
            attributes: {
                id: "news-3",
                title: "Spotify launches a shared listening feature",
                subTitle: "Apps and Services",
                textBody: "Streaming service Spotify has introduced a new feature that allows friends to listen to music together in real time, regardless of their geographical location.",
                publishedAt: "2025-09-17T00:00:00Z",
                addedAt: "2025-09-17T00:00:00Z",
                isPublished: true,
                image: { url: NewsPoster.src, width: 200, height: 200, fileSize: 40000 },
            },
        },
        {
            id: "news-4",
            type: "news",
            attributes: {
                id: "news-4",
                title: "Grammy 2026: Nominees announced",
                subTitle: "Awards and Prizes",
                textBody: "The Recording Academy has released the list of nominees for the 2026 Grammy Awards. Among the leaders are Taylor Swift, Drake, and a new artist of the year.",
                publishedAt: "2025-09-18T00:00:00Z",
                addedAt: "2025-09-18T00:00:00Z",
                isPublished: true,
                image: { url: NewsPoster.src, width: 200, height: 200, fileSize: 40000 },
            },
        },
    ],
    meta: { page: 1, pageSize: 4, totalCount: 4, pagesCount: 1 },
};

export const useNews = (params: GetNewsParams = {}) =>
    useQuery({
        queryKey: ["news", params],
        queryFn: async () => (Promise.resolve(MOCK_NEWS_RESPONSE) as Promise<ListResponse<News>>).then((response) => toNewsPreviews(response)),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
        meta: { skipToast: true },
    });
