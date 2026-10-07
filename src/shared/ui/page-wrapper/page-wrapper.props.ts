import {CSSProperties, ReactNode} from "react";

export type PageWrapperProps = {
    children:ReactNode
    style?:CSSProperties
    className?:string
}