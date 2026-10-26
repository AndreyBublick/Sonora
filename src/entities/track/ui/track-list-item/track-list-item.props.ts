export type MappedTrack = {
    id: string;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
    title: string;
    likesCount: number;
    publishedAt?: string;
    isPublished: boolean;
    image: { type: "thumbnail" | "original" | "medium"; width: number; height: number; fileSize: number; url: string } | undefined;
    duration: number;
    addedAt: string;
    creator: { id: string; name: string } | undefined;
};

export type TrackListItemProps = {
    id: string;
    track: MappedTrack;
    index: number;
    className?: string;
    onClick?: () => void;
};
