import {LoginResponse} from "./types";
import {request} from "@/src/shared/api";

export type OAuthLoginRequest = {
    code: string;
    redirectUri: string;
    accessTokenTTL?: string;
    rememberMe?: boolean;
};

export const login = async (
    data: OAuthLoginRequest,
): Promise<LoginResponse> => {
    return request<LoginResponse>({
        method: "POST",
        url: "/auth/login",
        data,
    });
};

export const logout = async (data: Pick<LoginResponse, 'refreshToken'>) => {
    return request<LoginResponse>({method:'POST', url:"/auth/logout", data});
};
export const refresh = async (data: Pick<LoginResponse, 'refreshToken'>) => {
    return request<LoginResponse>({method:'POST', url:"/auth/refresh", data});
};