"use client";
import type {CarouselSectionProps} from "./carousel-section.props";
import {MediaCarousel} from "@/src/shared/ui";
import {SectionTitle} from "@/src/shared/ui/section-title";
import {useMediaQuery} from "@/src/shared/lib";
import {MediaCardSkeleton} from "@/src/shared/ui/media-card";
import {useMemo} from "react";

export const CarouselSection = <T,>({
                                        title,
                                        type,
                                        items,
                                        renderItem,
                                        isLoading,
    schema={media:true,title:true, meta:2}
                                    }: CarouselSectionProps<T>) => {

    const isMobile = useMediaQuery({maxWidth:992})

    const skeletonItems = useMemo(
        () => Array.from({ length: 9 }, () => ({})) as T[],
        [],
    );

    if (!isLoading && items.length === 0) {
        return null;
    }

    return (
        <section style={{
            marginBottom: isMobile ? 26 : 52
        }}>
            <SectionTitle className={`mb-3`} style={{lineHeight:1.375}}>
                {title}
                {type && (
                    <span style={{ color: "var(--accent-400)" }}>{' '}{type}</span>
                )}
            </SectionTitle>


                <MediaCarousel
                    items={isLoading ? skeletonItems : items} renderItem={isLoading ? ()=>{
                    return <MediaCardSkeleton schema={schema} />
                }  : renderItem} />

        </section>
    );
};