import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from "react";

// === TYPES (mirrors react-responsive API) ===
export interface MediaQueryTypes {
    all?: boolean;
    grid?: boolean;
    aural?: boolean;
    braille?: boolean;
    handheld?: boolean;
    print?: boolean;
    projection?: boolean;
    screen?: boolean;
    tty?: boolean;
    tv?: boolean;
    embossed?: boolean;
}

export interface MediaQueryMatchers {
    aspectRatio?: string;
    deviceAspectRatio?: string;
    height?: number | string;
    deviceHeight?: number | string;
    width?: number | string;
    deviceWidth?: number | string;
    color?: boolean;
    colorIndex?: boolean;
    monochrome?: boolean;
    resolution?: number | string;
    orientation?: "portrait" | "landscape";
    scan?: "progressive" | "interlace";
    type?: keyof MediaQueryTypes;
}

export interface MediaQueryFeatures extends MediaQueryMatchers {
    minAspectRatio?: string;
    maxAspectRatio?: string;
    minDeviceAspectRatio?: string;
    maxDeviceAspectRatio?: string;
    minHeight?: number | string;
    maxHeight?: number | string;
    minDeviceHeight?: number | string;
    maxDeviceHeight?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    minDeviceWidth?: number | string;
    maxDeviceWidth?: number | string;
    minColor?: number;
    maxColor?: number;
    minColorIndex?: number;
    maxColorIndex?: number;
    minMonochrome?: number;
    maxMonochrome?: number;
    minResolution?: number | string;
    maxResolution?: number | string;
}

export interface MediaQueryAllQueryable extends MediaQueryFeatures, MediaQueryTypes {}

export type MediaQuerySettings = Partial<
    MediaQueryAllQueryable & {
    query?: string;
}
>;

// === BUILD MEDIA QUERY STRING ===
// Converts a settings object into a valid CSS media query string.
function buildQueryString(settings: MediaQuerySettings): string {
    // If a raw query string is passed, use it as-is.
    if (settings.query) return settings.query;

    const parts: string[] = [];

    // Media types (screen, print, etc.)
    if (settings.all) parts.push("all");
    if (settings.screen) parts.push("screen");
    if (settings.print) parts.push("print");
    if (settings.handheld) parts.push("handheld");
    if (settings.braille) parts.push("braille");
    if (settings.embossed) parts.push("embossed");
    if (settings.projection) parts.push("projection");
    if (settings.tty) parts.push("tty");
    if (settings.tv) parts.push("tv");
    if (settings.aural) parts.push("aural");
    if (settings.grid) parts.push("grid");

    // Media features (min-width, max-height, orientation, etc.)
    const featureMap: [keyof MediaQueryFeatures, string][] = [
        ["aspectRatio", "aspect-ratio"],
        ["deviceAspectRatio", "device-aspect-ratio"],
        ["height", "height"],
        ["deviceHeight", "device-height"],
        ["width", "width"],
        ["deviceWidth", "device-width"],
        ["color", "color"],
        ["colorIndex", "color-index"],
        ["monochrome", "monochrome"],
        ["resolution", "resolution"],
        ["orientation", "orientation"],
        ["scan", "scan"],
        ["minAspectRatio", "min-aspect-ratio"],
        ["maxAspectRatio", "max-aspect-ratio"],
        ["minDeviceAspectRatio", "min-device-aspect-ratio"],
        ["maxDeviceAspectRatio", "max-device-aspect-ratio"],
        ["minHeight", "min-height"],
        ["maxHeight", "max-height"],
        ["minDeviceHeight", "min-device-height"],
        ["maxDeviceHeight", "max-device-height"],
        ["minWidth", "min-width"],
        ["maxWidth", "max-width"],
        ["minDeviceWidth", "min-device-width"],
        ["maxDeviceWidth", "max-device-width"],
        ["minColor", "min-color"],
        ["maxColor", "max-color"],
        ["minColorIndex", "min-color-index"],
        ["maxColorIndex", "max-color-index"],
        ["minMonochrome", "min-monochrome"],
        ["maxMonochrome", "max-monochrome"],
        ["minResolution", "min-resolution"],
        ["maxResolution", "max-resolution"],
    ];

    for (const [key, cssKey] of featureMap) {
        const value = settings[key];
        if (value === undefined) continue;

        // Numeric values for width/height/resolution get "px" suffix.
        const isPixelValue =
            typeof value === "number" &&
            (cssKey.includes("width") ||
                cssKey.includes("height") ||
                cssKey.includes("resolution"));

        const formattedValue = isPixelValue ? `${value}px` : value;
        parts.push(`(${cssKey}: ${formattedValue})`);
    }

    return parts.join(" and ");
}

// === MediaQueryList CACHE ===
// Avoid creating new MQL instances for identical queries.
const mqlCache = new Map<string, MediaQueryList>();

const getMql = (query: string): MediaQueryList | null => {
    if (typeof window === "undefined") return null;

    let mql = mqlCache.get(query);
    if (!mql) {
        mql = window.matchMedia(query);
        mqlCache.set(query, mql);
    }
    return mql;
};

// === HOOK (built on useSyncExternalStore) ===
export const useMediaQuery = (
    settings: MediaQuerySettings,
    _device?: MediaQueryMatchers,
    onChange?: (matches: boolean) => void,
): boolean => {
    // Stable, value-based dependency — prevents effect re-runs on new object refs.
    const settingsKey = JSON.stringify(settings);
    const queryString = useMemo(
        () => buildQueryString(settings),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [settingsKey],
    );

    // Subscribe to matchMedia change events.
    const subscribe = useCallback(
        (onStoreChange: () => void) => {
            const mql = getMql(queryString);
            if (!mql) return () => {};

            mql.addEventListener("change", onStoreChange);
            return () => mql.removeEventListener("change", onStoreChange);
        },
        [queryString],
    );

    // Current match state on the client.
    const getSnapshot = useCallback(
        () => getMql(queryString)?.matches ?? false,
        [queryString],
    );

    // Server snapshot — always false to avoid hydration mismatch.
    const getServerSnapshot = useCallback(() => false, []);

    const matches = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    // Keep onChange in a ref so a new callback doesn't trigger re-subscription.
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    // Notify onChange on every matches change.
    useEffect(() => {
        onChangeRef.current?.(matches);
    }, [matches]);

    return matches;
};

export default useMediaQuery;