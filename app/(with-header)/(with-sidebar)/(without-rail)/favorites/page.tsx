"use client";

import {LikeButton} from "@/src/features/like";
import {DataTable} from "@/src/shared/ui/data-table";
import {SectionTitle} from "@/src/shared/ui/section-title";
import {MediaElement} from "@/src/shared/ui/media-element";
import {FlatTrack, useTracks} from "@/src/entities/track";

export default function FavoritesPage() {
    const { data, isLoading } = useTracks({ onlyLikedByMe: true });

    const items = data ?? [];

    return (
        <section className="px-0" style={{ marginBottom: 64 }}>
            <div style={{ marginBottom: 32, marginTop: -30 }}>
                <SectionTitle>
                    Your <SectionTitle.Label>Favorites</SectionTitle.Label>
                </SectionTitle>
            </div>

            <div style={{ overflowY: "clip" }} className={`w-100 overflow-x-auto custom-y-scroll`}>
                <DataTable<FlatTrack>
                    items={items}
                    style={{
                        minWidth: "860px",
                        borderCollapse: "separate",
                        borderSpacing: "0 16px",
                        marginBottom: -8,
                    }}
                    thStyles={{ whiteSpace: "nowrap" }}
                    keyExtractor={(track) => track.id}
                    columns={[
                        {
                            header: "",
                            style: { paddingRight: 20 },
                            render: (_, index?: number) => (
                                <span className="fs-4 fw-semibold">{`#${index}`}</span>
                            ),
                        },
                        {
                            header: "Track",
                            render: (track) => {
                                const cover = track.image?.url;
                                const src = track.url;

                                return (
                                    <div className="d-flex gap-3 align-items-center">
                                        <div
                                            style={{ width: 58, height: 58, borderRadius: 5, transform: "scale(1.035)" }}
                                            className="overflow-hidden position-relative"
                                        >
                                            <MediaElement
                                                sizePlayElement={35}
                                                type={"audio"}
                                                cover={cover}
                                                src={src}
                                                backgroundColor={"var(--gray-500)"}
                                                className={""}
                                                style={{ borderRadius: 5 }}
                                            />
                                        </div>

                                        <div className="d-flex flex-column gap-1">
                                            <h3
                                                title={track.title}
                                                className="fs-5 fw-semibold"
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    maxWidth: 180,
                                                }}
                                            >
                                                {track.title}
                                            </h3>
                                            {track.creator?.name && (
                                                <div
                                                    style={{ whiteSpace: "nowrap", fontSize: 12, opacity: 0.85 }}
                                                    className="fw-light"
                                                >
                                                    {track.creator.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            },
                        },
                        {
                            header: "Time",
                            render: (track) => {
                                const m = Math.floor(track.duration / 60);
                                const s = Math.floor(track.duration % 60);
                                return (
                                    <div className="d-flex align-items-center gap-3" style={{ paddingRight: 32 }}>
                                        {track.id && (
                                            <LikeButton
                                                trackId={track.id}
                                                liked={!!track.currentUserReaction}
                                                likesCount={track.likesCount}
                                                size="sm"
                                            />
                                        )}
                                        <span className="d-inline-flex">
                                            {`${m}:${s.toString().padStart(2, "0")}`}
                                        </span>
                                    </div>
                                );
                            },
                        },
                    ]}
                    isLoading={isLoading}
                    emptyText="You haven't liked any tracks yet"
                />
            </div>
        </section>
    );
}
