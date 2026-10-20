import type {NewReleaseSongsSectionProps} from "./new-release-songs-section.props";
import {TracksSection} from "@/src/widgets/tracks-section";

export const NewReleaseSongsSection = ({}: NewReleaseSongsSectionProps) => {
    return (
        <TracksSection title={'New Release'} queryTrackParams={{sortBy:'publishedAt', sortDirection: 'desc'}} />
    );
};