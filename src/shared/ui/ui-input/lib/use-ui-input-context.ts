"use client";
import { createContext, useContext } from "react";

type UiInputContextValue = {
    inputId: string;
    errorId?: string;
    hintId?: string;
};

export const UiInputContext = createContext<UiInputContextValue | null>(null);

export const useUiInputContext = () => {
    const ctx = useContext(UiInputContext);
    if (!ctx) throw new Error("UiInput parts must be used inside <UiInput>");
    return ctx;
};