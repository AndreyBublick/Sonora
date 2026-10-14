'use client';

import {AuthForm} from "../auth-form";
import {useState} from "react";
import {ReCaptcha} from "../recaptcha";
import {login} from "../../api/simple";
import {tokenStorage} from "@/src/shared/lib";
import {globalRouter} from "@/src/shared/lib/router";
import {useMutation} from "@tanstack/react-query";

export const Authorization = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const { mutate, isPending, isError } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            tokenStorage.set(data.accessToken, data.refreshToken);
            globalRouter.replace("/");
        },
    });

    const isDisabled = captchaToken === null
    const slot = <div className={`d-flex flex-column gap-2`}>
        <ReCaptcha theme={'dark'} onChange={setCaptchaToken} />
    </div>

    const onSubmitHandler = async (formBody:Record<string, unknown>) => {

        if (isDisabled) return;
        mutate({
            login:String(formBody['login']),
            password:String(formBody['password']),
            rememberMe:Boolean(formBody['rememberMe']),
        });
        setCaptchaToken(null)
    }

    return (
        <AuthForm
            key={isError ? 'error' : 'idle'}
            title="Sign Up & Login"
            submitLabel="Register"
            isDisabled={isDisabled}
            isError={isError}
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
                    autoComplete: 'username',
                    rules: {
                        required: 'Enter login',
                    },
                },
                {
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Enter Your Password',
                    required: true,
                    autoComplete: 'current-password',
                    rules: {
                        required: 'Enter password',
                    },
                },

            ]}
            slot={slot}
            /*footer={{
                text: 'Already have an account?',
                linkText: 'Log in',
                href: '/sign-in',
            }}*/
        />
    );
};