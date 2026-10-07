import {CSSProperties, ReactNode} from "react";

type BaseProps = {
    icon: ReactNode;
    body: ReactNode;
    onClick?: () => void;
    styles?: CSSProperties;
};

type LinkProps = BaseProps & {
    as?: 'link';
    href: string;
};

type ButtonProps = BaseProps & {
    as: 'button';
    href?: never;
};

export type SidebarElementProps = LinkProps | ButtonProps;