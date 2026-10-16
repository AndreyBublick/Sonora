import {ReactNode} from "react";

export type MediaCarouselProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
    className?: string;
};