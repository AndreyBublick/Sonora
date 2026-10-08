'use client'
import {Header} from "@/src/widgets";
import {SidebarProvider} from "@/src/app/providers";
import {ReactNode} from "react";
import {PageWrapper} from "@/src/shared/ui";
// import {getSearchArtists,SearchInput, type SearchScopeConfig, } from "@/src/features/search";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {

    /*const config: SearchScopeConfig = {
        scope: "songs",
        label: "Всё",
        placeholder: "Search...",
        fetch: (q, s) => getSearchArtists(q, s),
    };

    const leftSlot =  <div style={{maxWidth: 430}}>
        <SearchInput config={config} />
    </div>*/

    return (
        <div className="d-flex" style={{ minHeight: "100dvh" }}>
            <SidebarProvider />
            <PageWrapper className="w-100">
                <Header className={`px-xl-4`} leftSlot={null} />
                <main>{children}</main>
            </PageWrapper>
        </div>
    );
}