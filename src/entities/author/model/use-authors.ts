import {keepPreviousData, useQuery} from "@tanstack/react-query";
import Hero from "@assets/images/hero.avif";
import {ListResponse} from "@/src/shared/api/types";
import {GetAuthorsParams} from "../api/types";
import {toAuthorPreviews} from "../lib/to-author-previews";
import {Author, AuthorPreview} from "../model/types";

export const MOCK_AUTHORS_RESPONSE: ListResponse<Author> = {
    data: [
        {
            id: "poet-1",
            type: "author",
            attributes: {
                id: "poet-1",
                name: "Alexander Pushkin",
                years: "1799 – 1837",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "poet-2",
            type: "author",
            attributes: {
                id: "poet-2",
                name: "Anna Akhmatova",
                years: "1889 – 1966",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "poet-3",
            type: "author",
            attributes: {
                id: "poet-3",
                name: "Mikhail Lermontov",
                years: "1814 – 1841",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "poet-4",
            type: "author",
            attributes: {
                id: "poet-4",
                name: "Sergei Yesenin",
                years: "1895 – 1925",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "poet-5",
            type: "author",
            attributes: {
                id: "poet-5",
                name: "Marina Tsvetaeva",
                years: "1892 – 1941",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "poet-6",
            type: "author",
            attributes: {
                id: "poet-6",
                name: "Osip Mandelstam",
                years: "1891 – 1938",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-1",
            type: "author",
            attributes: {
                id: "comp-1",
                name: "Pyotr Tchaikovsky",
                years: "1840 – 1893",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-2",
            type: "author",
            attributes: {
                id: "comp-2",
                name: "Sergei Rachmaninoff",
                years: "1873 – 1943",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-3",
            type: "author",
            attributes: {
                id: "comp-3",
                name: "Igor Stravinsky",
                years: "1882 – 1971",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-4",
            type: "author",
            attributes: {
                id: "comp-4",
                name: "Dmitri Shostakovich",
                years: "1906 – 1975",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-5",
            type: "author",
            attributes: {
                id: "comp-5",
                name: "Sergei Prokofiev",
                years: "1891 – 1953",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "comp-6",
            type: "author",
            attributes: {
                id: "comp-6",
                name: "Nikolai Rimsky-Korsakov",
                years: "1844 – 1908",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-1",
            type: "author",
            attributes: {
                id: "sing-1",
                name: "Fyodor Chaliapin",
                years: "1873 – 1938",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-2",
            type: "author",
            attributes: {
                id: "sing-2",
                name: "Galina Vishnevskaya",
                years: "1934 – 2012",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-3",
            type: "author",
            attributes: {
                id: "sing-3",
                name: "Leonid Kharitonov",
                years: "1925 – 2016",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-4",
            type: "author",
            attributes: {
                id: "sing-4",
                name: "Anna Netrebko",
                years: "1971 – 2004",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-5",
            type: "author",
            attributes: {
                id: "sing-5",
                name: "Dmitri Hvorostovsky",
                years: "1962 – 2017",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
        {
            id: "sing-6",
            type: "author",
            attributes: {
                id: "sing-6",
                name: "Boris Shavro",
                years: "1930 – 2014",
                image: {url: Hero.src, width: 80, height: 80, fileSize: 4000},
            },
        },
    ],
    meta: {page: 1, pageSize: 18, totalCount: 18, pagesCount: 1},
};

type AuthorCategory = {
    title: string;
    authors: AuthorPreview[];
};

const GROUP_ORDER = ["Poets", "Composers", "Singers"] as const;

const GROUPS: Record<string, string> = {
    "poet": "Poets",
    "comp": "Composers",
    "sing": "Singers",
};

const groupAuthors = (authors: AuthorPreview[]): AuthorCategory[] => {
    const groups = new Map<string, AuthorPreview[]>();
    for (const author of authors) {
        const prefix = author.id.split("-")[0];
        const title = GROUPS[prefix] ?? "Other";
        if (!groups.has(title)) groups.set(title, []);
        groups.get(title)?.push(author);
    }
    return GROUP_ORDER.map((title) => ({
        title,
        authors: groups.get(title) ?? [],
    }));
};

export const useAuthors = (params: GetAuthorsParams = {}) =>
    useQuery({
        queryKey: ["authors", params],
        queryFn: async () =>
            (Promise.resolve(MOCK_AUTHORS_RESPONSE) as Promise<ListResponse<Author>>).then((response) => groupAuthors(toAuthorPreviews(response))),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
        meta: {skipToast: true},
    });
