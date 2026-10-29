"use client";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getTracks} from "../api/get-tracks";
import type {GetTracksParams} from "../api/types";
import {mapTracksData, Track} from "@/src/entities/track";
import {ListResponse} from "@/src/shared/api/types";

export const MOCK_TRACKS_RESPONSE: ListResponse<Track> = {
        data: [
                {
                        id: "track-1",
                        type: "tracks",
                        attributes: {
                                title: "Midnight City",
                                likesCount: 1243,
                                currentUserReaction: 0,
                                publishedAt: "2025-09-15T00:00:00Z",
                                isPublished: true,
                                duration: 243,
                                addedAt: "2025-09-15T00:00:00Z",
                                user: { id: "artist-1", name: "M83" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 40000 }] },
                                attachments: [{ id: "att-1", url: "/audio/midnight-city.mp3", contentType: "audio/mpeg", originalName: "midnight-city.mp3", fileSize: 4000000, addedAt: "2025-09-15T00:00:00Z", updatedAt: "2025-09-15T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-2",
                        type: "tracks",
                        attributes: {
                                title: "Blinding Lights",
                                likesCount: 5892,
                                currentUserReaction: 1,
                                publishedAt: "2025-08-20T00:00:00Z",
                                isPublished: true,
                                duration: 200,
                                addedAt: "2025-08-20T00:00:00Z",
                                user: { id: "artist-2", name: "The Weeknd" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 38000 }] },
                                attachments: [{ id: "att-2", url: "/audio/blinding-lights.mp3", contentType: "audio/mpeg", originalName: "blinding-lights.mp3", fileSize: 3800000, addedAt: "2025-08-20T00:00:00Z", updatedAt: "2025-08-20T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-3",
                        type: "tracks",
                        attributes: {
                                title: "Levitating",
                                likesCount: 3421,
                                currentUserReaction: 0,
                                publishedAt: "2025-07-10T00:00:00Z",
                                isPublished: true,
                                duration: 203,
                                addedAt: "2025-07-10T00:00:00Z",
                                user: { id: "artist-3", name: "Dua Lipa" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 42000 }] },
                                attachments: [{ id: "att-3", url: "/audio/levitating.mp3", contentType: "audio/mpeg", originalName: "levitating.mp3", fileSize: 4200000, addedAt: "2025-07-10T00:00:00Z", updatedAt: "2025-07-10T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-4",
                        type: "tracks",
                        attributes: {
                                title: "Heat Waves",
                                likesCount: 4102,
                                currentUserReaction: 0,
                                publishedAt: "2025-06-05T00:00:00Z",
                                isPublished: true,
                                duration: 238,
                                addedAt: "2025-06-05T00:00:00Z",
                                user: { id: "artist-4", name: "Glass Animals" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 36000 }] },
                                attachments: [{ id: "att-4", url: "/audio/heat-waves.mp3", contentType: "audio/mpeg", originalName: "heat-waves.mp3", fileSize: 3600000, addedAt: "2025-06-05T00:00:00Z", updatedAt: "2025-06-05T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-5",
                        type: "tracks",
                        attributes: {
                                title: "Stay",
                                likesCount: 7234,
                                currentUserReaction: 1,
                                publishedAt: "2025-05-12T00:00:00Z",
                                isPublished: true,
                                duration: 141,
                                addedAt: "2025-05-12T00:00:00Z",
                                user: { id: "artist-5", name: "The Kid LAROI & Justin Bieber" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 33000 }] },
                                attachments: [{ id: "att-5", url: "/audio/stay.mp3", contentType: "audio/mpeg", originalName: "stay.mp3", fileSize: 3300000, addedAt: "2025-05-12T00:00:00Z", updatedAt: "2025-05-12T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-6",
                        type: "tracks",
                        attributes: {
                                title: "Peaches",
                                likesCount: 6100,
                                currentUserReaction: 0,
                                publishedAt: "2025-04-18T00:00:00Z",
                                isPublished: true,
                                duration: 198,
                                addedAt: "2025-04-18T00:00:00Z",
                                user: { id: "artist-6", name: "Justin Bieber" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 35000 }] },
                                attachments: [{ id: "att-6", url: "/audio/peaches.mp3", contentType: "audio/mpeg", originalName: "peaches.mp3", fileSize: 3500000, addedAt: "2025-04-18T00:00:00Z", updatedAt: "2025-04-18T00:00:00Z", version: 1 }],
                        },
                },
                {
                        id: "track-7",
                        type: "tracks",
                        attributes: {
                                title: "Good 4 U",
                                likesCount: 4890,
                                currentUserReaction: 0,
                                publishedAt: "2025-03-22T00:00:00Z",
                                isPublished: true,
                                duration: 178,
                                addedAt: "2025-03-22T00:00:00Z",
                                user: { id: "artist-7", name: "Olivia Rodrigo" },
                                images: { main: [{ type: "medium", url: "", width: 200, height: 200, fileSize: 39000 }] },
                                attachments: [{ id: "att-7", url: "/audio/good-4-u.mp3", contentType: "audio/mpeg", originalName: "good-4-u.mp3", fileSize: 3900000, addedAt: "2025-03-22T00:00:00Z", updatedAt: "2025-03-22T00:00:00Z", version: 1 }],
                        },
                },
        ],
        meta: { page: 1, pageSize: 7, totalCount: 7, pagesCount: 1 },
};

export const useTracks = (params: GetTracksParams = {}) =>
    useQuery({
        queryKey: ["tracks", params],
        queryFn: async () => (Promise.resolve(MOCK_TRACKS_RESPONSE) || getTracks(params)).then((response) => mapTracksData(response)),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
        meta: { skipToast: true },
    });