'use client';

import type {SubmitEvent} from "react";
import {useState} from 'react';
import {UiButton, UiInput} from '@/src/shared/ui';
import type {AuthField, AuthFormProps} from './auth-form.props';
import {RememberMe} from "./remember-me";
import {AvatarIcon} from "@radix-ui/react-icons";

export const AuthForm = ({
                             title,
                             fields,
                             submitLabel,
                             slot,
                             footer,
                             loading,
                             onSubmit,
                             isShowRemember=false,
                             isDisabled=false,
                         }: AuthFormProps) => {

    const [isRememberMe, setIsRememberMe] = useState(false);

    const [values, setValues] = useState<Record<string, string>>(() =>
        Object.fromEntries(fields.map((f) => [f.name, '']))
    );

    const handleChange = (name: string, value: string) => {
        setValues((v) => ({ ...v, [name]: value }));
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({...values, rememberMe:isRememberMe});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-5 w-100 rounded-4 mx-3"
            style={{
                maxWidth: 500,
                background: 'var(--surface-1000)',
            }}
        >
            <h1 className="text-center fs-2 fw-semibold mb-3">{title}</h1>

            <div className="d-flex flex-column gap-3">
                {fields.map((field) => (
                    <AuthFieldRenderer
                        key={field.name}
                        field={field}
                        value={values[field.name] ?? ''}
                        onChange={(v) => handleChange(field.name, v)}
                    />
                ))}
            </div>
            {isShowRemember && (<RememberMe isRemember={isRememberMe} setIsRemember={setIsRememberMe} />)}

            {slot && <div className="mt-4">{slot}</div>}

           {/* {error && (
                <div className="alert alert-danger mt-3 mb-0 py-2 px-3 small" role="alert">
                    {error}
                </div>
            )}*/}

            <UiButton
                type="submit"
                disabled={isDisabled || loading}
                className="fs-5 w-100 py-2 mt-5 fw-medium"
            >
                {loading ? 'Registration...' : submitLabel}
            </UiButton>

            <div className={`my-2 text-center align-items-center d-flex gap-2 justify-content-between`}>
               <hr className={'w-100'}/>
            <span style={{lineHeight:1}} className={``}>or</span>
            <hr className={'w-100'} />
        </div>
            <UiButton className={`text-center py-2 fs-5 gap-2 align-items-center justify-content-center d-flex`} variant={'secondary'} as={'link'} href={`${process.env.NEXT_PUBLIC_API_URL}/auth/oauth-redirect`}>
                <AvatarIcon width={26} height={26} />
                <span className={``}>Keycloak</span>
            </UiButton>
        </form>
    );
};

const AuthFieldRenderer = ({
                               field,
                               value,
                               onChange,
                           }: {
    field: AuthField;
    value: string;
    onChange: (value: string) => void;
}) => {

    return (
        <div className="d-flex flex-column gap-1">
            <UiInput
                id={field.name}
                label={<UiInput.Label className={'mb-1'}>
                {field.label}
                </UiInput.Label>}
                className={'rounded-1'}
                style={{
                    backgroundColor:'var(--surface-900)',
                    border:'0.5px solid var(--surface-700)'
                }}
                name={field.name}
                type={field.type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                minLength={field.minLength}
                required={field.required}
            />
        </div>
    );
};