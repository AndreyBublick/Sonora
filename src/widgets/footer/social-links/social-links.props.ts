import type {ReactNode} from "react";

type GradientStop = {
    offset: string;
    color: string;
};

export type HoverGradient = {
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
    stops: GradientStop[];

};

type Social = {
    icon: ReactNode;
    href: string;
    label?: string;
    hoverColor?: string;
    hoverGradient?: HoverGradient;
};

export type SocialLinksProps = {
    socials: Social[];
};
