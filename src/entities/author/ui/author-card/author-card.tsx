import type {AuthorCardProps} from "./author-card.props";
import {MediaElement} from "@/src/shared/ui/media-element";

export const AuthorCard = ({name, years, image}: AuthorCardProps) => {
    return (
        <div className="text-center d-flex flex-column gap-3">
                <MediaElement
                    type="image"
                    src={image.url}
                    alt={name}
                    shape="circle"
                />
            <div className="text-center">
                <div
                    className="text-truncate fs-5 mb-1"
                    style={{ maxWidth: 140, margin:"0 auto"}}
                >
                    {name}
                </div>
                <div className="fw-light" style={{fontSize:12, color: "var(--accent-second-400)"}}>
                    {years}
                </div>
            </div>
        </div>
    );
};
