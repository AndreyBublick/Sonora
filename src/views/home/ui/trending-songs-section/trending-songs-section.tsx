'use client';

import type {TrendingSongsSectionProps} from "./trending-songs-section.props";
import {DataTable} from "@/src/shared/ui/data-table";
import styles from "./trending-songs-section.module.scss";
import {SectionTitle} from "@/src/shared/ui/section-title";
import {UiButton} from "@/src/shared/ui";
import {PlusIcon} from "@radix-ui/react-icons";
import {useMediaQuery} from "@/src/shared/lib";
import {useTracks} from "@/src/entities/track";
import {MediaElement} from "@/src/shared/ui/media-element";
import {LikeButton} from "@/src/features/like";


export const TrendingSongsSection = ({}: TrendingSongsSectionProps) => {

    const isMobile = useMediaQuery({maxWidth:992});
    const { data, isLoading } = useTracks({sortBy:'publishedAt', sortDirection: 'desc', pageSize:7});

    const items = data ?? [];

    const title = <SectionTitle style={{marginLeft: isMobile ? '-50px': 0}}>
        Trending
        <SectionTitle.Label>
            Songs
        </SectionTitle.Label>
    </SectionTitle>

    return (
        <section className={`px-0`} style={{marginBottom:64}}>

            {/* Header */}
            {!isMobile && title}

            {/* Table */}
            <div style={{overflowY: "clip", marginBottom:10, marginTop: isMobile ? '-20px' : '-30px'}} className={`w-100 overflow-x-auto custom-y-scroll`}>

            <DataTable
                className={styles["trending-songs-table"]}
                items={items}
                style={{
                    minWidth: "860px",
                    borderCollapse: 'separate',
                    borderSpacing: '0 16px',
                    marginBottom: -8,
                }}
                thStyles={{ whiteSpace: "nowrap" }}
                keyExtractor={track => track.id}
                columns={[
                    {
                       header: "",
                       style:{paddingRight:20},
                        render: (_, index?: number) => {
                            return <span className="fs-4 fw-semibold">{`#${index}`}</span>
                        }
                    },
                    {
                        header: isMobile ? title : "",
                        render: (track) => {
                            const cover = track.image?.url
                            const src = track.url

                            return <div className={`d-flex gap-3 align-items-center`}>
                                <div style={{ width: 58, height: 58, borderRadius:5, transform: "scale(1.035)",}}
                                     className={`overflow-hidden position-relative`}>

                                  <MediaElement sizePlayElement={35} type={'audio'} cover={cover} src={src} backgroundColor={'var(--gray-500)'} className={''} style={{
                                      borderRadius: 5,
                                  }} />
                                </div>

                                <div className={`d-flex flex-column gap-1`}>
                                    <h3 title={track.title} className={'fs-5 fw-semibold'} style={{whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: 180
                                    }}>
                                        {track.title}
                                    </h3>
                                    {track.creator?.name && (
                                        <div style={{ whiteSpace: "nowrap", fontSize:12, opacity:0.85 }} className={`fw-light`}>
                                            {track.creator.name}
                                        </div>
                                    )}
                                </div>

                            </div>

                        }

                    },
                    {
                        header: "Release Date",
                        className: "text-center",
                        style:{padding:'0 68px', whiteSpace: "nowrap",},
                        render: (track) =>
                            track.publishedAt
                                ? new Date(track.publishedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })
                                : "--",
                    },
                    {
                        header: "Album",
                        className: "text-center w-100",
                        style:{paddingRight:44},
                        render: (track) => (<div style={{margin:'0 auto', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth:'500px'}}>
                            {track.originalName}
                        </div>),
                    },
                    {
                        header: "Time",

                        render: (track) => {
                            const m = Math.floor(track.duration / 60);
                            const s = Math.floor(track.duration % 60);
                            return <div className={`d-flex align-items-center gap-3`} style={{paddingRight:32}}>
                                    <LikeButton
                                        trackId={track.id}
                                        liked={!!track.currentUserReaction}
                                        likesCount={track.likesCount}
                                        size="md"
                                    />
                            <span className={`d-inline-flex`}>
                               { `${m}:${s.toString().padStart(2, "0")}`}
                            </span>
                            </div>
                        },
                    },
                ]}
                isLoading={isLoading}
                emptyText="Нет треков"
            />
            </div>

            {/* View All */}
            <div className="d-flex justify-content-center align-items-center">
                <UiButton

                    className={`py-2 fw-medium d-flex gap-1`}
                    style={{
                        backgroundColor:'var(--gray-800)',
                        paddingLeft:'17.68px',
                        paddingRight:'17.68px',
                    }}
                >
                    <span className="d-flex align-items-center position-relative" ><PlusIcon width={18} height={18} /></span>View All
                </UiButton>
            </div>
        </section>
    );
};
