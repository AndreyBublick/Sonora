
export type TrackImage = {
    type: string;
    width: number;
    height: number;
    fileSize: number;
    url: string;
};

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

export type TrackUser = {
    id: string;
    name: string;
};

export type Track = {
    id: string;
    type: "tracks";
    attributes: {
        title: string;
        addedAt: string;
        likesCount: number;
        duration: number;
        currentUserReaction: number;
        isPublished: boolean;
        publishedAt?: string;
        attachments?: TrackAttachment[];
        images?: { main: TrackImage[] };
        user?: TrackUser;
    };
    relationships?: {
        artists?: {
            data: { id: string; type: string }[];
        };
    };
};