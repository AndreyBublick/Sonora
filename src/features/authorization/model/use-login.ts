'use client'
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {globalRouter} from "@/src/shared/lib/router";
import {tokenStorage} from "@/src/shared/lib";
import {login} from "../api/simple"

export const useLogin = () => {

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const { mutate, isPending, isError } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            tokenStorage.set(data.accessToken, data.refreshToken);
            globalRouter.replace("/");
        },
    });

    const loginUser = (credentials: Record<string, unknown>) => {
        if (!captchaToken) return;

        mutate({
            login: String(credentials['login']),
            password: String(credentials['password']),
            rememberMe: Boolean(credentials['rememberMe']),
        });
        setCaptchaToken(null);
    };

    return {
        captchaToken,
        setCaptchaToken,
        loginUser,
        isPending,
        isError,
        isDisabled: captchaToken === null
    };
};