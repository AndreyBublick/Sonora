import {MediaCard} from "../../media-card";
import {Skeleton} from "@/src/shared/ui";
import {MediaCardSkeletonProps} from "./media-card-skeleton.props";

const META_WIDTHS: Record<number, (string | number)[]> = {
    1: ["50%"],
    2: ["50%", 40],
    3: ["33%", "33%", "33%"],
};

export const MediaCardSkeleton = ({schema, shape = "square"}:MediaCardSkeletonProps) => {
    const shapeClass = shape === "circle" ? "rounded-circle" : "rounded-3";

    return (
        <MediaCard>
            <MediaCard.Body>
                {schema.media && <MediaCard.MediaElement type={'other'}>
                        <Skeleton
                            className={shapeClass}
                            style={{ width: "100%", aspectRatio: "1.095 / 1" }}
                        />
                </MediaCard.MediaElement>}

                {schema.title && <Skeleton className={`rounded-1`} style={{ width: "80%", height: 16, margin:'4px 0px' }} />}

                {schema.meta && META_WIDTHS[schema.meta] && (
                    <div className="d-flex justify-content-between gap-2 mt-2">
                        {META_WIDTHS[schema.meta].map((width, i) => (
                            <Skeleton
                                key={i}
                                className={`rounded-1`}
                                style={{ width, height: 12 }}
                            />
                        ))}
                    </div>
                )}
            </MediaCard.Body>
        </MediaCard>
    );
};