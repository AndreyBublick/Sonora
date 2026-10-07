import { SidebarProvider } from "@/src/app/providers";
import {ReactNode} from "react";

export default function WithSidebarLayout({ children }: { children: ReactNode }) {
    return (
        <div className="d-flex" style={{ minHeight: "100dvh" }}>
            <SidebarProvider />
            <div className="w-100">{children}</div>
        </div>
    );
}