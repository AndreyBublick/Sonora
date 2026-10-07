import { Header } from "@/src/widgets";
import { SidebarProvider } from "@/src/app/providers";
import { ReactNode } from "react";
import {PageWrapper} from "@/src/shared/ui";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {
    return (
        <div className="d-flex" style={{ minHeight: "100dvh" }}>
            <SidebarProvider />
            <PageWrapper className="w-100">
                <Header className={`px-xl-4`} />
                <main>{children}</main>
            </PageWrapper>
        </div>
    );
}