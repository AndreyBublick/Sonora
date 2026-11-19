'use client'
import { ReactNode } from "react";
import { RightRail } from "@/src/shared/ui";
import { useMediaQuery } from "@/src/shared/lib";
import {SidebarLayout} from "@/src/app/layouts";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {
    const isTablet = useMediaQuery({maxWidth: 1199});

    return (
            <SidebarLayout rightRail={isTablet ? null : <RightRail />  }>
                {children}
            </SidebarLayout>
    );
}