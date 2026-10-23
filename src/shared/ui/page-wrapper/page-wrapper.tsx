'use client'
import type {PageWrapperProps} from "./page-wrapper.props";
import {useMediaQuery} from "@/src/shared/lib";
import {usePathname} from "next/navigation";

export const PageWrapper = ({children, style={}, className=''}: PageWrapperProps) => {

    const isTablet = useMediaQuery({maxWidth:1199})
    const isMobile = useMediaQuery({maxWidth:992})
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const paddingTop = isHomePage ? 76 : 64;

    return (
        <div className={`${className}`} style={{
        padding: isMobile ? '24px 16px 0px 16px' : isTablet ? '40px 40px 0px 32px' : `${paddingTop}px 64px 0px 26px`,
            ...style,
        }}>
            {children}
        </div>
    );
};