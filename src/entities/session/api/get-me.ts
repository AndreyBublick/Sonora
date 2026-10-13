import {request} from "@/src/shared/api";
import {User} from "../model/types";

export const getMe = (): Promise<User> =>
    request<User>({ method: "GET", url: "/auth/me" });