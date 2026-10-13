'use client';

import {AuthForm} from "../auth-form";
import {useState} from "react";
import {ReCaptcha} from "../recaptcha";
import {login} from "../../api/api";
import {tokenStorage} from "@/src/shared/lib";
import {globalRouter} from "@/src/shared/lib/router";
import {useMutation} from "@tanstack/react-query";

export const Authorization = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            tokenStorage.set(data.accessToken, data.refreshToken);
            globalRouter.replace("/");
        },
    });

    const isDisabled = captchaToken === null

    const onSubmitHandler = async (formBody:Record<string, unknown>) => {

        if (isDisabled) return;
        mutate({
            login:String(formBody['login']),
            password:String(formBody['password']),
            rememberMe:Boolean(formBody['rememberMe']),
        });
    }

    return (
        <AuthForm
            title="Sign Up & Login"
            submitLabel="Register"
            isDisabled={isDisabled}
            isShowRemember
            loading={isPending}
            // error={error?.message}
            onSubmit={onSubmitHandler}
            fields={[
                {
                    type: 'text',
                    name: 'login',
                    label: 'Login',
                    placeholder: 'Enter Your Login',
                    required: true,
                    autoComplete: 'name',
                },
                {
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Enter Password (minimum 8 characters)',
                    required: true,
                    minLength: 8,
                    autoComplete: 'new-password',
                },

            ]}
            slot={<ReCaptcha theme={'dark'} onChange={setCaptchaToken} />}
            /*footer={{
                text: 'Already have an account?',
                linkText: 'Log in',
                href: '/sign-in',
            }}*/
        />
    );
};