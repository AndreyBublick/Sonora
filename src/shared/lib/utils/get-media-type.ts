import { MediaType } from "@/src/shared/types";

const IMAGE_EXT = new Set(["jpg", "jpeg", "png", "gif", "webp", "avif", "svg", "bmp", "ico", "tif", "tiff"]);
const AUDIO_EXT = new Set(["mp3", "wav", "ogg", "oga", "m4a", "aac", "flac", "opus", "weba"]);
const VIDEO_EXT = new Set(["mp4", "webm", "ogv", "mov", "m4v", "avi", "mkv", "mpeg", "mpg", "ts"]);
const TEXT_EXT = new Set(["txt", "md", "json", "xml", "csv", "html", "htm", "css", "js", "ts"]);

export const getMediaType = (url: string): MediaType => {
    if (!url) return "other";

    const cleanUrl = url.split(/[?#]/)[0];

    const lastDotIndex = cleanUrl.lastIndexOf(".");
    if (lastDotIndex === -1) return "other";

    const ext = cleanUrl.slice(lastDotIndex + 1).toLowerCase();

    if (IMAGE_EXT.has(ext)) return "image";
    if (AUDIO_EXT.has(ext)) return "audio";
    if (VIDEO_EXT.has(ext)) return "video";
    if (TEXT_EXT.has(ext)) return "text";

    return "other";
}