import {ReactNode} from "react";
import {SidebarSection} from "../sidebar.props";

export type SidebarContentProps = {
    logo?: ReactNode;
    navigationItems: SidebarSection[];
    onNavigate?: () => void;
    wrapperClassName?:string
};