"use client";
import { useCallback, useSyncExternalStore } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export const useCarouselArrows = (emblaApi: CarouselApi | undefined) => {
    const subscribe = useCallback(
        (cb: () => void) => {
            if (!emblaApi) return () => {};
            emblaApi.on("select", cb);
            emblaApi.on("reInit", cb);
            return () => {
                emblaApi.off("select", cb);
                emblaApi.off("reInit", cb);
            };
        },
        [emblaApi],
    );

    const canScrollPrev = useSyncExternalStore(
        subscribe,
        () => emblaApi?.canScrollPrev() ?? false,
        () => false,   // SSR snapshot
    );

    const canScrollNext = useSyncExternalStore(
        subscribe,
        () => emblaApi?.canScrollNext() ?? false,
        () => false,
    );

    return { canScrollPrev, canScrollNext };
};