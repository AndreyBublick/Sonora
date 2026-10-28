    import type { ReactNode } from "react";
    import {MediaCardSchema} from "@/src/shared/ui/media-card";
/*export type CarouselSectionProps = {
    title: string
    type?: 'Albums' | 'Playlists' | 'Songs' | 'other'
}*/

export type CarouselSectionProps<T> = {
    title: string;
    type?: string;
    items: T[];
    renderItem: (item: T) => ReactNode;
    isLoading?: boolean;
    schema?:MediaCardSchema
    ratio?:string
};
