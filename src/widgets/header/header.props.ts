import {ReactNode} from "react";

export type HeaderProps = {
    variant?:'default' | 'minimal'
    children?:ReactNode
    className?:string
}