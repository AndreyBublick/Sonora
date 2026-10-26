import { useEffect, useRef, useState } from "react";
import { CircularAudioPlayerProps } from "./circular-audio-player.props";
import Image from "next/image";
import {audioManager} from "../../model/audio-manager";
import {PauseIcon, PlayIcon} from "@radix-ui/react-icons";

export const CircularAudioPlayer = ({ src, cover, fallbackCover, onLoadMedia, size = 50, isCircle=true }: CircularAudioPlayerProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOver, setIsOver] = useState(false);
    const stroke = 4;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;

    const showControls = isLoaded && (isOver || playing);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio || !isLoaded) return;

        if (audio.paused) {
            audioManager.register(audio, () => setPlaying(false));

            audio.play()
                .then(() => setPlaying(true))
                .catch((err) => {
                    if (err.name === "AbortError") return;
                    console.error("Ошибка play():", err);
                });
        } else {
            audio.pause();
            setPlaying(false);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        let sent = false;

        const onTime = () => {
            if (audio.duration) setProgress(audio.currentTime / audio.duration);
        };
        const onEnd = () => {
            setPlaying(false);
            setProgress(0);
            audioManager.unregister(audio);
        };

        const onMeta = () => {
            if (sent || !isFinite(audio.duration)) return;
            sent = true;
            onLoadMedia?.({ duration: audio.duration/*, src*/ });
        };

        const onCanPlay = () => setIsLoaded(true);

        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("ended", onEnd);
        audio.addEventListener("canplaythrough", onCanPlay);
        audio.addEventListener("loadedmetadata", onMeta);

        if (audio.readyState >= 1) onMeta();

        return () => {
            audioManager.unregister(audio);
            audio.removeEventListener("timeupdate", onTime);
            audio.removeEventListener("ended", onEnd);
            audio.removeEventListener("canplaythrough", onCanPlay);
            audio.removeEventListener("loadedmetadata", onMeta);
        };
    }, []);

    return (
        <div onMouseEnter={()=>{
            setIsOver(true)
        }} onMouseLeave={()=>{
            setIsOver(false)
        }} className="position-relative d-flex justify-content-center align-items-center h-100 w-100">
            {cover ? (
                <Image src={cover}
                    fill
                    alt="audio-cover"
                    style={{ position: "absolute", inset: 0, objectFit: "cover" }}
                />
            ) : (
                <div style={{ position: "absolute", inset: 0 }}>
                    {fallbackCover ?? null}
                </div>
            )}

                <div
                    className="position-relative d-flex justify-content-center align-items-center rounded-circle"
                    style={{
                        width: size,
                        height: size,
                        background: isOver && isCircle ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.0)",
                        zIndex: 1,
                        transform: showControls ? "scale(1)" : "scale(0.85)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                        pointerEvents: showControls ? "auto" : "none",
                    }}
                >
                    {isCircle && <svg
                        width={size}
                        height={size}
                        style={{opacity: isOver ? 1 : 0, position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
                    >
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={r}
                            fill="none"
                            stroke="rgba(255,255,255,0.25)"
                            strokeWidth={stroke}
                        />
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={r}
                            fill="none"
                            stroke="white"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                            strokeDasharray={c}
                            strokeDashoffset={c * (1 - progress)}
                            style={{ transition: "stroke-dashoffset 0.15s linear" }}
                        />
                    </svg>}

                    <button
                        type="button"
                        onClick={toggle}
                        className="btn border-0 d-flex justify-content-center align-items-center cursor-pointer"
                        style={{padding: size * 0.28, opacity: isOver ? 1 : 0, color: "white", background: "transparent", zIndex: 1 }}
                    >
                        {!isLoaded && <div className="spinner-border" />}
                        {isLoaded && (playing
                                ? <PauseIcon width={size * 0.4} height={size * 0.4} />
                                : <PlayIcon width={size * 0.4} height={size * 0.4} />
                        )}
                    </button>
                </div>
            <div className={`w-100 h-100 position-absolute`} style={{ transition:'opacity 0.15s linear', inset:0, background:'black', opacity: isOver ? 0.4 : 0}} />

            <audio ref={audioRef} src={src} preload="auto" style={{ display: "none" }} />
        </div>
    );
};