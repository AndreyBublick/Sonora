import {BaseMediaAttributes} from "@/src/shared/api/types";
import {JsonApiResource, PublishableAttributes} from "@/src/shared/types";

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

type TrackRelationships = {
    artists?: {
        data: { id: string; type: string }[];
    };
};

export type TrackAttributes = BaseMediaAttributes & PublishableAttributes & {
    attachments?: TrackAttachment[];
};

export type Track = JsonApiResource<"tracks", TrackAttributes, TrackRelationships>;