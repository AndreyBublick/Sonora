import type {PageWrapperProps} from "./page-wrapper.props";

export const PageWrapper = ({children, style={}, className=''}: PageWrapperProps) => {

    return (
        <div className={`${className}`} style={{
        padding:'64px 64px 0px 46px',
            ...style,
        }}>
            {children}
        </div>
    );
};