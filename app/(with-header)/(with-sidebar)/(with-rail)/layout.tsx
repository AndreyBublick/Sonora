'use client'
import { ReactNode } from "react";
import { RightRail } from "@/src/shared/ui";
import { RightRailProvider } from "@/src/app/providers/right-rail";
import { useMediaQuery } from "@/src/shared/lib";
import {SidebarLayout} from "@/src/app/layouts";

export default function WithRailLayout({ children }: { children: ReactNode }) {
    const isTablet = useMediaQuery({maxWidth: 1199});

    return (
        <RightRailProvider>
            <SidebarLayout rightRail={isTablet ? null : <RightRail /> }>
                {children}
            </SidebarLayout>
        </RightRailProvider>
    );
}