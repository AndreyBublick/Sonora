import {ReactNode} from "react";
import {SidebarElementProps} from "./element";

type SidebarElement = SidebarElementProps

export type SidebarProps = {
    id?:string
    logo?:ReactNode
    sidebarData:SidebarSection[]
    nested?:ReactNode
};

export type SidebarSection = {
    title?:string
    items:SidebarElement[]
}