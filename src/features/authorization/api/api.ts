import {request} from "@/src/shared/api";
import {LoginRequest, LoginResponse} from "./types";

export const login = async (data: LoginRequest) => {
    return request<LoginResponse>({method:'POST', url:"/auth/simple/login", data});
};