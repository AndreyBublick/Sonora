'use client'
import {useMutation} from "@tanstack/react-query";
import {useSearchParams} from "next/navigation";
import {useEffect, useRef} from "react";
import {login} from "@/src/features/authorization/api";
import {tokenStorage} from "@/src/shared/lib";
import {globalRouter} from "@/src/shared/lib/router";

export const Oauth2CallbackPage = ({}) => {

    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const calledRef = useRef(false);

    const { mutate } = useMutation({
        mutationFn: async (code: string) => {
            const data = await login({
                code,
                redirectUri: `${window.location.origin}/oauth2/callback`,
                accessTokenTTL: "3m",
                rememberMe: true,
            });
            return data;
        },
        onSuccess: (data) => {
            tokenStorage.set(data.accessToken, data.refreshToken);
            globalRouter.replace("/");
        },
        onError: (err) => {
            console.error("OAuth login failed:", err);
            globalRouter.replace("/authorization");
        },
    });

    useEffect(() => {
        if (!code || calledRef.current) return;
        calledRef.current = true;
        mutate(code);
    }, [code, mutate]);

    return <div className="d-flex gap-3 flex-column justify-content-center align-items-center" style={{ minHeight: "100dvh" }}>
        <Spinner />
    <div>Logging in...</div>
    </div>


};

export const Spinner = () => {
    return <span className="spinner-border" role="status" aria-label="Loading" />
};