"use client";
import useEmblaCarousel from "embla-carousel-react";
import type {MediaCarouselProps} from "./media-carousel.props";
import {ScrollArrow} from "./scroll-arrow";
import {useCarouselArrows} from "./scroll-arrow/model/use-carousel-arrows";
import {useEffect, useState} from "react";

export const MediaCarousel = <T,>({
                                      items,
                                      renderItem,
                                  }: MediaCarouselProps<T>) => {
    const [isDragging,setIsDragging] = useState(false)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
    });


    const { canScrollPrev, canScrollNext } = useCarouselArrows(emblaApi);

    useEffect(() => {
        if (!emblaApi) return;

        const current = emblaApi.selectedScrollSnap();

        emblaApi.reInit();

        const total = emblaApi.scrollSnapList().length;
        emblaApi.scrollTo(Math.min(current, total - 1));
    }, [emblaApi, items]);

    return (
        <div className={`gap-3 d-grid align-items-center`}
            style={{
                gridTemplateColumns: "40px minmax(0, 1fr) 40px",
            }}
        >
            <ScrollArrow
                disabled={!canScrollPrev}
                direction="left"
                onClick={() => emblaApi?.scrollPrev()}
            />

            <div onMouseLeave={() => setIsDragging(false)} onMouseUp={()=> setIsDragging(false)} onMouseDown={() => setIsDragging(true)} style={{ overflow: "hidden", minWidth: 0 }} ref={emblaRef}>
                <div
                    style={{
                        display: "flex",
                        gap: 16,
                        userSelect: "none",
                        touchAction: "pan-y pinch-zoom",
                        cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                cursor: isDragging ? 'grabbing' : 'grab',
                                flex: "0 0 auto",
                                minWidth: 0,
                                width: 180
                        }}
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>

            <ScrollArrow
                disabled={!canScrollNext}
                direction="right"
                onClick={() => emblaApi?.scrollNext()}
            />
        </div>
    );
};