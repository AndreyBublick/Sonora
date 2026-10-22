import {ComponentProps, CSSProperties, ReactElement, ReactNode} from "react";

export type UiInputBaseProps = {
    children:ReactNode
    className?:string
    style?:CSSProperties
    id?:string
};


export type UiInputVariant = "default" | "search";

export type UiInputProps = {
    label?: ReactNode;
    error?: string;
    hint?: string;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    variant?: UiInputVariant;
    classNameWrapper?:string
    styleWrapper?:CSSProperties
} & ComponentProps<"input">;

export type UiInputIconProps = UiInputBaseProps & {
    children:ReactElement
}

export type UiInputLabelProps = UiInputBaseProps & {
}

export type UiInputErrorProps = UiInputBaseProps & {
}

export type UiInputHintProps = UiInputBaseProps & {
}