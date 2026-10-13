import {request} from "@/src/shared/api";
import {LoginRequest, LoginResponse} from "./types";

export const login = async (data: LoginRequest) => {
    return request<LoginResponse>({method:'POST', url:"/auth/simple/login", data});
};
export const logout = async (data:Pick<LoginResponse, 'refreshToken'>) => {
    return request<LoginResponse>({method:'POST', url:"/auth/simple/logout", data});
};
export const refresh = async (data: Pick<LoginResponse, 'refreshToken'>) => {
    return request<LoginResponse>({method:'POST', url:"/auth/simple/refresh", data});
};