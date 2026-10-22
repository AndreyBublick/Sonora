'use client';

import {CSSProperties, useState} from 'react';
import {SubmitHandler, useForm, UseFormRegister} from 'react-hook-form';
import {UiInput} from '@/src/shared/ui';
import type {AuthFormProps} from './auth-form.props';
import {RememberMe} from './remember-me';
import {AuthField} from "../../model";
import {AuthFormFooter} from "../auth-form-footer";
import {clsx} from "clsx";

export const AuthForm = ({
                             title,
                             fields,
                             submitLabel,
                             slot,
                             loading,
                             onSubmit,
                             isShowRemember = false,
                             isDisabled = false,
                             slotClassName='',
                             isError=false,
                             inputStyle={},
                             style={},
                             className='',
                             errorMessage='',
                             inputWrapperStyle={},
                             footerProps={},
                         }: AuthFormProps) => {
    const [isRememberMe, setIsRememberMe] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Record<string, string>>({
        defaultValues: Object.fromEntries(fields.map((f) => [f.name, ''])),
    });

    const onSubmitHandler: SubmitHandler<Record<string, string>> = (data) => {
        onSubmit({ ...data, rememberMe: isRememberMe });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className={clsx("", className)}
            style={{ ...style }}
        >
            {title && <h1 className="text-center fs-2 fw-semibold mb-3">{title}</h1>}

            <div className="d-flex flex-column gap-3">
                {fields.map((field) => (
                    <AuthFieldRenderer
                        key={field.name}
                        field={field}
                        register={register}
                        error={errors[field.name]?.message}
                        inputWrapperStyle={inputWrapperStyle}
                        inputStyle={inputStyle}
                    />
                ))}
            </div>

            {isShowRemember && (
                <RememberMe isRemember={isRememberMe} setIsRemember={setIsRememberMe} />
            )}

            {isError && !!errorMessage && (
                <div className="text-danger small mt-3 text-center">
                    {errorMessage}
                </div>
            )}

            {slot && (
                <div key={isError ? 'error' : 'idle'} className={slotClassName || "mt-4"}>
                    {slot}
                </div>
            )}

            <AuthFormFooter {...footerProps} isDisabled={isDisabled} isLoading={loading} />
        </form>
    );
};

const AuthFieldRenderer = ({
                               field,
                               register,
                               error,
                               inputWrapperStyle={},
                               inputStyle={},
                           }: {
    field: AuthField;
    register: UseFormRegister<Record<string, string>>;
    error?: string;
    inputWrapperStyle?:CSSProperties
    inputStyle?:CSSProperties
}) => {
    return (
        <div className="d-flex flex-column gap-1">
            <UiInput
                id={field.name}
                label={<UiInput.Label className="mb-1">{field.label}</UiInput.Label>}
                className=""
                styleWrapper={inputWrapperStyle}
                style={inputStyle}
                iconStart={field.icon && <UiInput.Icon className={`ms-2`} style={{position:'relative',top:'-1px',}}>
                    {field.icon}
                </UiInput.Icon>}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                minLength={field.minLength}
                required={field.required}
                {...register(field.name, field.rules)}
            />
            {error && (
                <span className="text-danger small">{error}</span>
            )}
        </div>
    );
};