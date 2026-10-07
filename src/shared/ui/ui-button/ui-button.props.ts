import {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode} from "react";

type BaseProps = {
    variant?: 'text' | 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
    children: ReactNode;
    className?: string;
};

export type ButtonAsButton = BaseProps & {
    as?: 'button';
    asChild?:boolean
    href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export type ButtonAsLink = BaseProps & {
    as: 'link';
    asChild?:never
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;

export type UiButtonProps = ButtonAsButton | ButtonAsLink;