"use client";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/get-me";
import {tokenStorage} from "@/src/shared/lib";

export const useMe = () => {
    const hasToken = !!tokenStorage.getAccess();

    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        enabled: hasToken,
        staleTime: 5 * 60_000,
        retry: false,
        meta: { skipToast: true },
    });
};