import {ComponentProps, CSSProperties, ReactElement, ReactNode} from "react";

export type UiInputBaseProps = {
    children:ReactElement
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
} & ComponentProps<"input">;

export type UiInputIconProps = UiInputBaseProps & {
}

export type UiInputLabelProps = UiInputBaseProps & {
}

export type UiInputErrorProps = UiInputBaseProps & {
}

export type UiInputHintProps = UiInputBaseProps & {
}