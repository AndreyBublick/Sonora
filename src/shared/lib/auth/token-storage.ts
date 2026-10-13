const ACCESS_KEY = "accessToken";
const REFRESH_KEY = "refreshToken";
const AUTH_FLOW = "authFlow";

export type AuthFlow = "simple" | "oauth";

export const tokenStorage = {
    getAccess: (): string | null =>
        typeof window === "undefined" ? null : sessionStorage.getItem(ACCESS_KEY),

    getRefresh: (): string | null =>
        typeof window === "undefined" ? null : localStorage.getItem(REFRESH_KEY),

    getFlow: (): AuthFlow => {
        if (typeof window === "undefined") return "oauth";
        const stored = localStorage.getItem(AUTH_FLOW);
        return stored === "simple" ? "simple" : "oauth";
    },

    set: (
        accessToken: string,
        refreshToken: string,
        flow: AuthFlow = "oauth",
    ): void => {
        sessionStorage.setItem(ACCESS_KEY, accessToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(AUTH_FLOW, flow);
    },

    clear: (): void => {
        sessionStorage.removeItem(ACCESS_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(AUTH_FLOW);
    },
};