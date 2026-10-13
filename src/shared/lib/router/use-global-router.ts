"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { globalRouter } from "./global-router";

export const useGlobalRouter = (): void => {
    const router = useRouter();

    useEffect(() => {
        globalRouter.push = router.push;
        globalRouter.replace = router.replace;
        globalRouter.back = router.back;
    }, [router]);
};