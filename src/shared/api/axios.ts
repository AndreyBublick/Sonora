import axios, {type AxiosError, type InternalAxiosRequestConfig} from "axios";
import {baseAxiosConfig} from "./config";
import {refreshAccessToken} from "./refresh";
import {type ApiErrorBody, getErrorMessage} from "./lib/get-error-message";
import {tokenStorage} from "@/src/shared/lib";
import {globalRouter} from "@/src/shared/lib/router";

type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean };

export const api = axios.create(baseAxiosConfig);

api.interceptors.request.use((config) => {
    const token = tokenStorage.getAccess();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    (r) => r,
    async (error: AxiosError<ApiErrorBody>) => {
        if (error.code === "ERR_CANCELED") return Promise.reject(error);

        const original = error.config as RetryConfig | undefined;
        const isAuth =
            original?.url?.includes("/auth/simple/login") ||
            original?.url?.includes("/auth/simple/logout") ||
            original?.url?.includes("/auth/simple/refresh");

        if (error.response?.status === 401 && original && !original._retry && !isAuth) {
            original._retry = true;
            try {
                const token = await refreshAccessToken();
                original.headers.Authorization = `Bearer ${token}`;
                return api(original);
            } catch (refreshError) {
                tokenStorage.clear();
                if (typeof window !== "undefined") globalRouter.replace("/authorization");
                return Promise.reject(refreshError);
            }
        }

        error.message = getErrorMessage(error);
        return Promise.reject(error);
    },
);