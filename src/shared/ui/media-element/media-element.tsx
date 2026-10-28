import type {MediaElementProps} from "./media-element.props";
import {Skeleton} from "@/src/shared/ui";
import {CSSProperties, ReactNode} from "react";
import {MediaType} from "@/src/shared/types";
import {CircularAudioPlayer} from "@/src/shared/ui/media-card";
import Image from "next/image";
import {PlaceholderIcons} from "./placeholder-icons";


export const MediaElement = ({
                                 shape, children, mediaPlaceholder , className='rounded-3', backgroundColor='var(--gray-900)', style:styles={} , ...props
                                 }: MediaElementProps) => {
    const type: MediaType = props.type ?? "image";

    const shapeClass = shape === "circle" ? "rounded-circle" : `overflow-hidden ${className}`;
        const style: CSSProperties = {
            objectFit: "cover",
            position:'absolute',
            inset:0,
            ...styles,
        };

        // const renderPlaceholder = ()=> <Placeholder className={shapeClass} style={style} src={props.src || ''} />

    const renderInBox = (content: ReactNode) => (
        <div className={shapeClass} style={style}>
            <div
                style={{ backgroundColor }}
                className="d-flex justify-content-center align-items-center h-100"
            >
                {content}
            </div>
        </div>
    );

    const renderPlaceholder = () =>
        renderInBox(mediaPlaceholder || <PlaceholderIcons src={"src" in props ? props.src : undefined} type={type} />);

        const render: Record<MediaType, () => ReactNode> = {

            audio: () =>
                (props.type === "audio") && props.src ? ( <div className={shapeClass} style={style}>
                        <CircularAudioPlayer size={props.sizePlayElement} onLoadMedia={props.onLoadMedia} src={props.src} cover={props.cover} fallbackCover={renderPlaceholder()} />
                    </div>
                ) : null,

            image: () =>
                (props.type === "image" ) && props.src ? (
                    <Image
                        fill
                        src={props.src}
                        alt={props.alt}
                        className={shapeClass}
                        style={style}
                    />
                ) : renderPlaceholder(),

            text: () =>
                (props.type === "text") && props.src ? (
                    <p>{props.textBody}</p>
                ) : renderPlaceholder(),

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
                ) : renderPlaceholder(),

            other: () => (
                props.type === 'other' ? renderInBox(children) : null
            ),
        };



        return (
            <div className="position-relative overflow-hidden" style={{
                width: "100%",
                height: "100%"
            }}>
                <div className={`${shapeClass} position-absolute`} style={{ inset:0, background:'var(--gray-600)'}}>
                    <Skeleton className={'w-100 h-100'} />
                </div>
                {render[props.type]()}
            </div>
        );


};