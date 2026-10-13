import type {CreateAxiosDefaults} from "axios";

export const baseAxiosConfig: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
};