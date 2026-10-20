import type {WeeklyTopSongsSectionProps} from "./weekly-top-songs-section.props";
import {TracksSection} from "@/src/widgets/tracks-section";


export const WeeklyTopSongsSection = ({}: WeeklyTopSongsSectionProps) => {
    return (
        <TracksSection title={'Weekly Top'} queryTrackParams={{sortBy:'likesCount'}} />
    );
};