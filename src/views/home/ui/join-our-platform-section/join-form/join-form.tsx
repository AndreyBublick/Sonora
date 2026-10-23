"use client";

import {AuthForm ,ReCaptcha, useLogin, AUTH_FIELDS } from "@/src/features/authorization";
import {CSSProperties} from "react";

export const JoinForm = () => {
    const { setCaptchaToken, loginUser, isPending, isError, isDisabled } = useLogin();

    return (
        <AuthForm
            title={''}
            onSubmit={loginUser}
            fields={AUTH_FIELDS}
            submitLabel="Sign Up & Login"
            loading={isPending}
            isDisabled={isDisabled}
            isError={isError}
            defaultRememberMe={true}
            isShowRemember={false}
            inputWrapperStyle={{
                '--custom-outline-color': 'var(--gray-100)',
                '--custom-outline-width': '2px',
            } as CSSProperties}
            inputStyle={{}}
            errorMessage="Register failed. Please check your credentials."
            slotClassName="mt-3"
            footerProps={{
                separatorClassName: 'my-0',
                style:{paddingTop:12}
            }}

            slot={<ReCaptcha theme="dark" onChange={setCaptchaToken} />}
        />
    );
};