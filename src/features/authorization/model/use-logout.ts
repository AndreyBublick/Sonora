import {useMutation, useQueryClient} from "@tanstack/react-query";
import {tokenStorage} from "@/src/shared/lib";
import {globalRouter} from "@/src/shared/lib/router";
import {logout as logoutSimple} from "../api/simple";
import {logout as logoutOauth} from "../api/oauth";

export const logoutRequest = async (data: { refreshToken: string }): Promise<void> => {
    const flow = tokenStorage.getFlow();
    const api = flow === "simple" ? logoutSimple : logoutOauth;
    await api(data)
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    const body = useMutation({
        mutationFn: async () => {
            const refreshToken = tokenStorage.getRefresh();
            if (refreshToken) await logoutRequest({ refreshToken });
        },
        onSettled: () => {
            tokenStorage.clear();
            queryClient.setQueryData(["me"], null);
            queryClient.removeQueries({ queryKey: ["me"] });
            queryClient.clear();
            const protectedPaths = ["/profile", "/settings", "/admin"];
            const isProtected = protectedPaths.some((p) =>
                window.location.pathname.startsWith(p),
            );
            if (isProtected) {
                globalRouter.replace("/authorization");
            }
        },
        meta: { skipToast: true },
    })

    return {...body, logout:body.mutate}
};