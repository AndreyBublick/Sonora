'use client'
import {HeroSection} from "./ui/hero-section";
import {WeeklyTopSongsSection} from "./ui/weekly-top-songs-section";
import {NewReleaseSongsSection} from "./ui/new-release-songs-section";

export const HomePage = ({}) => {
    return (
        <>
            <HeroSection />
            <WeeklyTopSongsSection />
            <NewReleaseSongsSection />
        </>
    );

};