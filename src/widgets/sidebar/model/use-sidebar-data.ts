import {useLogout} from "@/src/features/authorization";
import {useAuth} from "@/src/entities/session";
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
    ReaderIcon
} from "@radix-ui/react-icons";

export const useSidebarNavigation = () => {

    const {logout} = useLogout()
    const {isAuth} = useAuth()

    return  [
            {
                title: "Menu",
                items: [
                    { icon: HomeIcon, body: "Home", href: "/" },
                    { icon: GlobeIcon, body: "Discover", href: "/discover" },
                    { icon: DiscIcon, body: "Albums", href: "/albums" },
                    { icon: AvatarIcon, body: "Artists", href: "/artists" },
                ],
            },
            {
                title: "Library",
                items: [
                    { icon: CounterClockwiseClockIcon, body: "Recently Added", href: "/recently_added" },
                    { icon: ClockIcon, body: "Most played", href: "/most_played" },
                ],
            },
            {
                title: "Playlist and favorite",
                items: [
                    { icon: HeartIcon, body: "Your favorites", href: "/favorites" },
                    { icon: ReaderIcon, body: "Your playlist", href: "/playlist" },
                    {
                        icon: PlusIcon,
                        as: "button" as const,
                        body: "Add playlist",
                        styles: { color: "var(--accent-second-600)" },
                    },
                ],
            },
            {
                title: "General",
                items: [
                    { icon: GearIcon, body: "Setting", href: "/setting" },
                    ...(isAuth
                        ? [{ icon: ExitIcon, as: "button" as const, body: "Logout", onClick: () => logout(), styles: { color: "var(--accent-600)" } }]
                        : []),
                ],
            },
        ]
};