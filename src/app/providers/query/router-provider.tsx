"use client";
import {ReactNode} from "react";
import {useGlobalRouter} from "@/src/shared/lib/router";

export const RouterProvider = ({ children }: { children: ReactNode }) => {
    useGlobalRouter();

    return children
};