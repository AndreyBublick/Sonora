'use client'
import {Header} from "@/src/widgets";
import {SidebarProvider} from "@/src/app/providers";
import {ReactNode} from "react";
import {PageWrapper} from "@/src/shared/ui";
import {SearchInput, type SearchScopeConfig,} from "@/src/features/search";
import {MobileSidebar} from "@/src/widgets/sidebar";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {

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
            <PageWrapper className="w-100">
                <Header className={`px-xl-4`} leftSlot={leftSlot} />
                <main>{children}</main>
            </PageWrapper>
        </div>
    );
}