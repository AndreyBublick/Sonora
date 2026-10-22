import type {ComponentProps, CSSProperties, ReactNode} from 'react';
import {AuthField} from "../../model";
import {AuthFormFooter} from "../auth-form-footer";

export type AuthFormProps = {
    defaultRememberMe?:boolean,
    errorMessage?:string,
    className?:string,
    slotClassName?:string,
    style?:CSSProperties,
    inputWrapperStyle?:CSSProperties,
    inputStyle?:CSSProperties,
    isShowRemember?:boolean;
    isError?:boolean;
    isDisabled?:boolean;
    title: string;
    fields: AuthField[];
    submitLabel: string;
    slot?: ReactNode;
    footer?: {
        text: string;
        linkText: string;
        href: string;
    };
    loading?: boolean;
    error?: string | null;
    onSubmit: (data: Record<string, string | boolean>) => void;
    footerProps?: Omit<
        ComponentProps<typeof AuthFormFooter>,
        'isDisabled' | 'isLoading'
    >;
};