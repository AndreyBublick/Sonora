'use client'
import type {PageWrapperProps} from "./page-wrapper.props";
import {useMediaQuery} from "@/src/shared/lib";

export const PageWrapper = ({children, style={}, className=''}: PageWrapperProps) => {

    const isMobile = useMediaQuery({maxWidth:1199})

    return (
        <div className={`${className}`} style={{
        padding: isMobile ? '40px 40px 0px 32px' : '64px 64px 0px 46px',
            ...style,
        }}>
            {children}
        </div>
    );
};