import {CSSProperties, ForwardRefExoticComponent, ReactNode, RefAttributes} from "react";
import {IconProps} from "@radix-ui/react-icons/dist/types";

type BaseProps = {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
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