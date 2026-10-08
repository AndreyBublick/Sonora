import {ReactNode} from "react";

export type HeaderProps = {
    variant?:'default' | 'minimal'
    leftSlot?:ReactNode
    className?:string
}