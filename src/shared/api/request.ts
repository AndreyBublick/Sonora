import { api } from "./axios";
import type { AxiosRequestConfig } from "axios";

export const request = async <T>(
    config: AxiosRequestConfig,
    signal?: AbortSignal,
): Promise<T> => {
    const { data } = await api.request<T>({ ...config, signal });
    return data;
};