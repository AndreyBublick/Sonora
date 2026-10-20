import {BaseMediaAttributes} from "@/src/shared/api/types";

export type TrackAttachment = {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
};

export type Track = {
    id: string;
    type: "tracks";
    attributes: BaseMediaAttributes & {
        isPublished: boolean;
        publishedAt?: string;
        attachments?: TrackAttachment[];
    };
    relationships?: {
        artists?: {
            data: { id: string; type: string }[];
        };
    };
};