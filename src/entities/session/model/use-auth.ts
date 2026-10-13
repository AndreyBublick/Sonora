"use client";
import { useMe } from "./use-me";

export const useAuth = () => {
    const { data: user, isLoading, isError } = useMe();

    return {
        user: user ?? null,
        isLoading,
        isAuth: !!user,
        isError,
    };
};