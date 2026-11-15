'use client'
import {ReactNode} from "react";
import {SidebarLayout} from "@/src/app/layouts";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {
    return <SidebarLayout>
        {children}
    </SidebarLayout>
}