'use client'
import {Sidebar, useSidebarNavigation} from "@/src/widgets";
import {Logo} from "@/src/shared/ui";

export const SidebarProvider = ({}) => {

    const navigationItems = useSidebarNavigation()

    return (
        <Sidebar navigationItems={navigationItems} logo={<Logo className={'fw-bold'} title={'Sonora'} />} />
    );

};