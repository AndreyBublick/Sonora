import {request} from "@/src/shared/api";
import {AuthUser} from "../model/types";

export const getMe = (): Promise<AuthUser> =>
    request<AuthUser>({ method: "GET", url: "/auth/me" });