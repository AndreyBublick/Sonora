'use client'
import type {PageWrapperProps} from "./page-wrapper.props";

export const PageWrapper = ({children, style={}, className=''}: PageWrapperProps) => {

    return (
        <main className={`${className}`} style={{
            ...style,
        }}>
            {children}
        </main>
    );
};