import type { MoodPlaylistsSectionProps } from "./mood-playlists-section.props";
import {PlaylistsSection} from "@/src/widgets/playlists-section";

export const MoodPlaylistsSection = ({}: MoodPlaylistsSectionProps) => {
    return (
        <PlaylistsSection
            title="Mood"
        />
    );
};