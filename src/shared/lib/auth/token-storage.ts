const ACCESS_KEY = "accessToken";
const REFRESH_KEY = "refreshToken";

export const tokenStorage = {
    getAccess: () =>
        typeof window === "undefined" ? null : sessionStorage.getItem(ACCESS_KEY),

    getRefresh: () =>
        typeof window === "undefined" ? null : localStorage.getItem(REFRESH_KEY),

    set: (accessToken: string, refreshToken: string) => {
        sessionStorage.setItem(ACCESS_KEY, accessToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
    },

    clear: () => {
        sessionStorage.removeItem(ACCESS_KEY);
        localStorage.removeItem(REFRESH_KEY);
    },
};