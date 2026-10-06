import {CSSProperties, ReactElement, ReactNode} from "react";


export type SidebarElementProps = {
    icon?:ReactElement | ReactNode
    body?:string
    href?:string
    // nested?:ReactNode
    as?:'button' | 'link'
    onClick?: ()=>void
    styles?:CSSProperties
}