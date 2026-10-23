'use client'
import {Sidebar, useSidebarData} from "@/src/widgets";
import {Logo} from "@/src/shared/ui";

export const SidebarProvider = ({}) => {

    const sidebarData = useSidebarData()

    return (
        <Sidebar sidebarData={sidebarData} logo={<Logo  className={'fw-bold'} title={'Sonora'} />} />
    );

};