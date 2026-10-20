'use client'
import {HeroSection} from "./ui/hero-section";
import {WeeklyTopSongsSection} from "./ui/weekly-top-songs-section";
import {NewReleaseSongsSection} from "./ui/new-release-songs-section";
import {MoodPlaylistsSection} from "./ui/mood-playlists-section";

export const HomePage = ({}) => {
    return (
        <>
            <HeroSection />
            <WeeklyTopSongsSection />
            <NewReleaseSongsSection />
            <MoodPlaylistsSection />
        </>
    );

};