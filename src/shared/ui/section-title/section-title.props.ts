import {CSSProperties, ReactNode} from "react";

export type SectionTitleProps = {
    as?:'h1' | 'h2' | 'h3'| 'h4'| 'h5'| 'h6'
    children:ReactNode
    className?:string
    style?:CSSProperties
}