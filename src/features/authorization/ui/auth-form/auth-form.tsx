'use client';

import type {SubmitEvent} from "react";
import {useState} from 'react';
import {UiButton, UiInput} from '@/src/shared/ui';
import type {AuthField, AuthFormProps} from './auth-form.props';
import {RememberMe} from "./remember-me";

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

            {footer && (
                <p className="text-center small mt-3 mb-0" style={{
                    color:'var(--gray-100)',
                }}>
                    {footer.text}{' '}
                    <UiButton variant={'outline-secondary'} as={'link'}
                        href={footer.href}
                        className="text-decoration-none"
                        style={{ border: 'none' }}
                    >
                        {footer.linkText}
                    </UiButton>
                </p>
            )}
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
                    padding:'8px 12px',
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