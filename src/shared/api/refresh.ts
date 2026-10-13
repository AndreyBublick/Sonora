import axios from "axios";
import {Mutex} from "async-mutex";
import {baseAxiosConfig} from "./config";
import {tokenStorage} from "@/src/shared/lib";

const refreshClient = axios.create(baseAxiosConfig);
const refreshMutex = new Mutex();

let lastToken: string | null = null;
let lastRefreshTime = 0;

export const refreshAccessToken = (): Promise<string> =>
    refreshMutex.runExclusive(async () => {
        if (lastToken && Date.now() - lastRefreshTime < 1000) {
            return lastToken;
        }

        const refreshToken = tokenStorage.getRefresh();
        if (!refreshToken) throw new Error("No refresh token");
        const authFlow = tokenStorage.getFlow();

        const refreshClientPostUrl = authFlow==='simple' ? '/auth/simple/refresh' : '/auth/refresh'

        const { data } = await refreshClient.post<{
                accessToken: string;
                refreshToken: string;
        }>(refreshClientPostUrl, { refreshToken });

        tokenStorage.set(data.accessToken, data.refreshToken);
        lastToken = data.accessToken;
        lastRefreshTime = Date.now();

        return data.accessToken;
    });