import type { Metadata } from "next";
import "./bootstrap-utils.scss";
import "./globals.scss";
import {ReactNode} from "react";
import {QueryProvider, RightRailProvider, RouterProvider} from "@/src/app/providers";
import {Toaster} from "sonner";
import {Footer} from "@/src/widgets";

export const metadata: Metadata = {
    title: "Sonora",
    description: "Sonora Player",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-bs-theme="dark">
        <body style={{ minHeight: "100dvh", overflowX:"hidden" }}>
        <QueryProvider>
            <RouterProvider>
                <RightRailProvider>
        {children}
                </RightRailProvider>
                <Footer />
            </RouterProvider>
        </QueryProvider>
        <Toaster
            richColors
            position="top-right"
            theme="dark"
            style={{}}
            offset={{ top: '100px', right: '16px' }}
        />        </body>
        </html>
    );
}