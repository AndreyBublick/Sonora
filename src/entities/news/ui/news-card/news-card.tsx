"use client";

import clsx from "clsx";
import type { NewsCardProps } from "./news-card.props";
import {MediaElement} from "@/src/shared/ui/media-element";
import {UiButton} from "@/src/shared/ui";

export const NewsCard = ({
    title,
    subTitle,
    textBody,
    image,
    className,
}: NewsCardProps & { className?: string }) => {
    return (
        <div
            style={{
                padding: "10px 12px",
                background: 'var(--gray-700)',
            }}
            className={clsx(
                "d-flex gap-2 rounded-1",
                className
            )}
        >
            <div style={{ width: 148, flexShrink: 0 }}>
                <MediaElement
                    type="image"
                    src={image.url}
                    alt={title}
                    className="rounded-1"
                />
            </div>

            <div className="">
                <div className={`fw-medium mb-1`} style={{
                    color: "var(--gray-100)",
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                }}>

                <h3 className="mb-2 fs-6 overflow-hidden" style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                }}>
                    {title}
                </h3>
                <p className="overflow-hidden" style={{ fontSize: "14px",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                }}>
                    {subTitle}
                </p>

                </div>
                <p
                    className="fw-light overflow-hidden"
                    style={{
                        fontSize: "12px",
                        color: "var(--gray-300)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {textBody}
                </p>
                <div className="d-flex justify-content-end">

                <UiButton as={'link'} variant={'text'}
                    href={`/news/${image.url.split("/").pop()}`}
                    className="px-3 fw-light pb-2"
                    style={{marginLeft:'auto' , color: "var(--accent-400)", textAlign: "end" , fontSize: "14px" , paddingTop:12, }}
                >
                    Show more
                </UiButton>
                </div>
            </div>
        </div>
    );
};
