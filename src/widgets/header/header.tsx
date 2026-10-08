'use client'
import type { HeaderProps } from "./header.props";
import { clsx } from "clsx";
import { UiButton } from "@/src/shared/ui";
import Link from "next/link";
import {useMediaQuery} from "@/src/shared/lib";

export const Header = ({ className = "", variant = "default", leftSlot }: HeaderProps) => {
    const links = [
        { title: "About Us", href: "/about_us" },
        { title: "Upload", href: "/upload" },
        { title: "Premium", href: "/premium" },
    ];

    const isDesktop = useMediaQuery({minWidth:1500});

    const contentHeader =
        variant === "default" ? (
            <>
                <div className={``} style={{flex:1, minWidth: 0,  }}>
                {leftSlot}
                </div>

                <div className={`d-flex align-items-center justify-content-between gap-3`} style={isDesktop ? {width:'100%', maxWidth:'28.5vw'} : {}}>
                    <ul
                        className="d-none d-lg-flex align-items-center justify-content-around flex-grow-1 gap-3 mb-0"
                        style={{ listStyle: "none", minWidth: 0 }}
                    >
                        {links.map(({ title, href }) => (
                            <li key={href} className="flex-shrink-0">
                                <UiButton asChild variant="text" className="px-1 text-nowrap">
                                    <Link href={href}>{title}</Link>
                                </UiButton>
                            </li>
                        ))}
                    </ul>
                    <UiButton className="py-2 px-4 flex-shrink-0 text-nowrap">
                        Sign Up & Login
                    </UiButton>
                </div>

            </>
        ) : (
            <>321</>
        );

    return (
        <header className={clsx("d-flex align-items-center justify-content-between gap-3", className)}>
            {contentHeader}
        </header>
    );
};