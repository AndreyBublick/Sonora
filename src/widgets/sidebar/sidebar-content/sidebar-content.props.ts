import {ReactNode} from "react";
import {SidebarSection} from "../sidebar.props";

export type SidebarContentProps = {
    logo?: ReactNode;
    sidebarData: SidebarSection[];
    onNavigate?: () => void;
};