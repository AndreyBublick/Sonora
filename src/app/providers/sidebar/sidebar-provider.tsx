'use client'
import {Sidebar} from "@/src/widgets";
import {Logo} from "@/src/shared/ui";
import {
    AvatarIcon,
    ClockIcon,
    CounterClockwiseClockIcon,
    DiscIcon,
    ExitIcon,
    GearIcon,
    GlobeIcon,
    HeartIcon,
    HomeIcon,
    PlusIcon,
    ReaderIcon,
} from "@radix-ui/react-icons";
import {useLogout} from "@/src/features/authorization/model";
import {useAuth} from "@/src/entities/session";

export const SidebarProvider = ({}) => {

    const {logout} = useLogout()
    const {isAuth} = useAuth()

    const iconStyle = {
        width:18,
        height:18,
    }

    const sidebarData = [
        {
            title: "Menu",
            items: [
                { icon: <HomeIcon {...iconStyle}  />, body: "Home", href: "/" },
                { icon: <GlobeIcon {...iconStyle} />, body: "Discover", href: "/discover" },
                { icon: <DiscIcon {...iconStyle} />, body: "Albums", href: "/albums" },
                { icon: <AvatarIcon {...iconStyle} />, body: "Artists", href: "/artists" },
            ],
        },
        {
            title: "Library",
            items: [
                { icon: <CounterClockwiseClockIcon {...iconStyle} />, body: "Recently Added", href: "/recently_added" },
                { icon: <ClockIcon {...iconStyle} />, body: "Most played", href: "/most_played" },
            ],
        },
        {
            title: "Playlist and favorite",
            items: [
                { icon: <HeartIcon {...iconStyle} />, body: "Your favorites", href: "/favorites" },
                { icon: <ReaderIcon {...iconStyle} />, body: "Your playlist", href: "/playlist" },
                {
                    icon: <PlusIcon {...iconStyle} />,
                    as: "button" as const,
                    body: "Add playlist",
                    styles: { color: "var(--accent-second-600)" },
                },
            ],
        },
        {
            title: "General",
            items: [
                { icon: <GearIcon {...iconStyle} />, body: "Setting", href: "/setting" },
                ...(isAuth
                    ? [{ icon: <ExitIcon {...iconStyle} />, as: "button" as const, body: "Logout", onClick: () => logout(), styles: { color: "var(--accent-600)" } }]
                    : []),
            ],
        },
    ];
    return (
        <Sidebar sidebarData={sidebarData} logo={<Logo title={'Sonora'} />} />
    );

};