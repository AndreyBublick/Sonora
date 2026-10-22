'use client'
import {HeroSection} from "./ui/hero-section";
import {WeeklyTopSongsSection} from "./ui/weekly-top-songs-section";
import {NewReleaseSongsSection} from "./ui/new-release-songs-section";
import {MoodPlaylistsSection} from "./ui/mood-playlists-section";
import {JoinOurPlatformSection} from "./ui/join-our-platform-section";
import {OffersSection} from "./ui/offers-section";

export const HomePage = ({}) => {
    return (
        <>
            <HeroSection />
            {/*<WeeklyTopSongsSection />*/} {/*NetWork*/}
            {/*<NewReleaseSongsSection />*/} {/*NetWork*/}
            <OffersSection />
            {/*<MoodPlaylistsSection />*/} {/*NetWork*/}
            <JoinOurPlatformSection />
        </>
    );

};