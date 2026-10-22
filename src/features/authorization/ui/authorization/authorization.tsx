'use client';

import {AuthForm} from "../auth-form";
import {ReCaptcha} from "../recaptcha";
import {AUTH_FIELDS, useLogin} from "../../model";
import {clsx} from "clsx";
import {useMemo} from "react";

export const Authorization = () => {

const {
    isError,
    isPending,
    isDisabled,
    loginUser,
    setCaptchaToken,
} = useLogin()

    const slot = <div className={`d-flex flex-column gap-2`}>
        <ReCaptcha theme={'dark'} onChange={setCaptchaToken} />
    </div>

    const fields = useMemo(() => {
        return AUTH_FIELDS.map(({ icon, ...rest }) => rest);
    }, []);

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
inputStyle={{
    backgroundColor: 'var(--surface-900)',
    border: '0.5px solid var(--surface-700)',
}}
            onSubmit={loginUser}
            fields={fields}
            slot={slot}
            className={clsx("p-5 w-100 rounded-4 mx-3")}
            style={{ maxWidth: 500, background: 'var(--surface-1000)' }}
            footerProps={{
                className:'pt-5',
            }}
            /*footer={{
                text: 'Already have an account?',
                linkText: 'Log in',
                href: '/sign-in',
            }}*/
        />
    );
};