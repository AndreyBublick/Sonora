import {type AxiosError} from "axios";

export type ApiErrorBody = {
    message?: string;
    error?: string;
    errors?: Record<string, string[]>;
};

export const getErrorMessage = (error: AxiosError<ApiErrorBody>): string => {
    if (error.response?.data?.message) return error.response.data.message;
    if (error.response?.data?.error) return error.response.data.error;

    if (error.response?.data?.errors) {
        const first = Object.values(error.response.data.errors)[0];
        if (first?.[0]) return first[0];
    }

    switch (error.response?.status) {
        case 400: return "Bad request";
        case 401: return "Unauthorized";
        case 403: return "Forbidden";
        case 404: return "Not found";
        case 422: return "Validation error";
        case 500: return "Server error";
    }

    if (error.code === "ECONNABORTED") return "Request timeout";
    if (error.code === "ERR_CANCELED") return "Request canceled";
    if (!error.response) return "No connection";

    return "Something went wrong";
};
