import {FlatTrack, useTracks} from "@/src/entities/track";
import {useState} from "react";

// type UseTrendingSongsSectionData = {}

export const useTrendingSongsSection = () => {

    const { data, isLoading } = useTracks({sortBy:'publishedAt', sortDirection: 'desc', pageSize:7});
    const [ overElementId, setOverElementId ] = useState<string | null>(null);
    const items = data ?? [];

    const onEnterHandler = (item:FlatTrack) => {
        setOverElementId(item.id)
    }
    const onLeaveHandler = () => {
        setOverElementId(null)
    }
        return {onLeaveHandler,onEnterHandler,items,overElementId,isLoading}
};