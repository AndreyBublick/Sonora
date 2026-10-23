"use client";

import {SidebarContent} from "./sidebar-content";
import type {SidebarProps} from "./sidebar.props";

export const Sidebar = ({logo, sidebarData}: SidebarProps) => {

    return (
        <>
            <aside
                className={`d-none d-lg-block pe-3 pt-5 pb-3`}
                style={{
                    minWidth: 270,
                    paddingLeft: 64,
                    borderRight: "2px solid var(--gray-600)",
                    minHeight: "100%",
                }}
            >
                <SidebarContent wrapperClassName={'pt-4'} logo={logo} sidebarData={sidebarData}/>
            </aside>
        </>
    );
};