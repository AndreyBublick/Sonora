"use client";
import {MutationCache, QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import {useGlobalRouter} from "@/src/shared/lib/router";
import {toast} from "sonner";

const pushError = (error:Error)=>{
    toast.error(error instanceof Error ? error.message : "some error");
}

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    useGlobalRouter();

    const [client] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 180_000,
                        refetchOnWindowFocus: true,
                        retry: 2,
                    },
                },
                queryCache: new QueryCache({
                    onError: (error, query) => {
                        if (query.meta?.skipToast) return;
                        pushError(error)
                    },
                }),
                mutationCache: new MutationCache({
                    onError: (error, _vars, _ctx, mutation) => {
                        if (mutation.meta?.skipToast) return;
                        pushError(error)
                    },
                }),
            }),
    );

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};