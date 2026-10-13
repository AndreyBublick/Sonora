export type LoginRequest = {
    login: string;
    password: string;
    rememberMe: boolean;
};

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
};