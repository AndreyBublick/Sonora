'use client'
import {Header} from "@/src/widgets";
import {SidebarProvider} from "@/src/app/providers";
import {ReactNode} from "react";
import {PageWrapper} from "@/src/shared/ui";
import {SearchInput, type SearchScopeConfig,} from "@/src/features/search";
import {MobileSidebar} from "@/src/widgets/sidebar";
import {useMediaQuery} from "@/src/shared/lib";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {
    const isTablet = useMediaQuery({maxWidth:1199})
    const isMobile = useMediaQuery({maxWidth:992})

    const paddingTop = isMobile ? 10 : 64;
    const paddingLeft = isMobile ? 8 : isTablet ? 40 : 26;
    const paddingRight = isMobile ? 8 : isTablet ? 40 : 64;

    const config: SearchScopeConfig = {
        scope: "songs",
        label: "Всё",
        placeholder: "Search...",
        fetch: (q, s) => Promise.resolve([]) /*getSearchArtists(q, s)*/,
    };

    const leftSlot = <div style={{maxWidth: 430}} className={`d-flex align-items-center`}>
    <MobileSidebar />
        <SearchInput config={config} />
    </div>

    return (
        <div className={'d-flex'} style={{
            minHeight:'inherit'
        }}>
            <SidebarProvider />
            <div className={`w-100`} style={{paddingTop}}>

                <Header style={{paddingLeft:paddingLeft+(isMobile ? 12 : 25 ), paddingRight:paddingRight+(isMobile ? 12 : 25 )}} leftSlot={leftSlot} />
            <PageWrapper className="" style={{paddingLeft, paddingRight}}>
                {children}
            </PageWrapper>
            </div>
        </div>
    );
}