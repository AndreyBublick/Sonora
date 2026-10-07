import type { Metadata } from "next";
import "./bootstrap-utils.scss";
import "./globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Sonora",
    description: "Sonora Player",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-bs-theme="dark">
        <body>{children}</body>
        </html>
    );
}