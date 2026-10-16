import type {CSSProperties, ReactNode} from "react";
import {MediaElementProps} from "./media-card.props";
import clsx from "clsx";
import Image from "next/image";
import {CircularAudioPlayer} from "./ui/circular-audio-player";
import {Skeleton} from "@/src/shared/ui";

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
        style={{background:'var(--gray-700)' , cursor: onClick ? "pointer" : "default", ...style }}
        onClick={onClick}
    >
        {children}
    </div>
);

const MediaElement = (props: MediaElementProps) => {
    const { shape = "square", children, mediaPlaceholder } = props;
    const type = props.type ?? "image";

    const shapeClass = shape === "circle" ? "rounded-circle" : "rounded-3 overflow-hidden";
    const style: CSSProperties = {

        objectFit: "cover",
        position:'absolute',
        inset:0

    };

    const renderers: Record<"image" | "audio" | "video" | "other", () => ReactNode> = {

        audio: () =>
            (props.type === "audio") && props.src ? ( <div className={shapeClass} style={style}>

                   {/* {props.cover ? <Image
                        fill
                        className={shapeClass}
                        src={props.cover}
                        alt={'audio-cover'}
                        style={style}
                    /> : mediaPlaceholder }*/}


                    <CircularAudioPlayer onLoadMedia={props.onLoadMedia} src={props.src} cover={props.cover} fallbackCover={mediaPlaceholder} />

                </div>
            ) : null,

        image: () =>
            (props.type === "image" || props.type === undefined ) && props.src ? (
                <Image
                    fill
                    src={props.src}
                    alt={props.alt}
                    className={shapeClass}
                    style={style}
                />
            ) : null,

        video: () =>
            props.type === "video" && props.src ? (
                <video
                    src={props.src}
                    poster={props.poster}
                    autoPlay={props.autoPlay}
                    muted={props.muted}
                    loop={props.loop}
                    controls={props.controls}
                    className={shapeClass}
                    style={style}
                />
            ) : null,

        other: () => ((props.type === 'other' )  ? <div  className={shapeClass}
                                                                                    style={style}>
            <div style={{
                background:'var(--gray-800)'
            }} className={'d-flex justify-content-center align-items-center h-100'}>

            {children}
            </div>

        </div> : null),
    };


    return (
        <div className="position-relative overflow-hidden" style={{
            width: "100%",
            aspectRatio: "1 / 1",
        }}>
            <div className={`${shapeClass} position-absolute`} style={{ inset:0, background:'var(--gray-600)'}}>
                <Skeleton className={'w-100 h-100'} />
            </div>
            {renderers[type]()}
        </div>
    );
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


MediaCard.MediaElement = MediaElement;
MediaCard.Actions = Actions;
MediaCard.Body = Body;
MediaCard.Title = Title;
MediaCard.Subtitle = Subtitle;
MediaCard.Meta = Meta;