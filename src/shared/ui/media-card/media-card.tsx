import type {CSSProperties, ReactNode} from "react";
import clsx from "clsx";
import {MediaElement, MediaElementProps} from "@/src/shared/ui/media-element";

export const MediaCard = ({
                  children,
                  onClick,
                  className,
                  style,
              }: {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
}) => (
    <div
        className={clsx("d-flex flex-column gap-2 p-2 rounded-3", className)}
        style={{background:'var(--gray-700)' , ...style }}
        onClick={onClick}
    >
        {children}
    </div>
);

const MediaCardElement = (props: MediaElementProps) => {
        return <MediaElement {...props} />;
};


const Actions = ({ children }: { children: ReactNode }) => (
    <div className="position-absolute bottom-0 end-0 m-2">{children}</div>
);
const Body = ({ children }: { children: ReactNode }) => (
    <div className="d-flex flex-column gap-2">{children}</div>
);

const Title = ({ children }: { children: ReactNode }) => (
    <div
        className="text-truncate fw-medium fs-6"
        style={{
            color: "var(--gray-100)",
            maxWidth: "88%",
            minWidth: 0,
        }}
    >
        {children}
    </div>
);

const Subtitle = ({ children }: { children: ReactNode }) => (
    <div className="text-truncate small" style={{ color: "var(--gray-500)" }}>
        {children}
    </div>
);
const Meta = ({ children }: { children: ReactNode }) => (
    <div  className={`fw-light d-flex justify-content-between`} style={{opacity:0.8, color: "var(--gray-100)", fontSize:12, marginTop:2 }}>
        {children}
    </div>
);


MediaCard.MediaElement = MediaCardElement;
MediaCard.Actions = Actions;
MediaCard.Body = Body;
MediaCard.Title = Title;
MediaCard.Subtitle = Subtitle;
MediaCard.Meta = Meta;