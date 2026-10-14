import type { ReactNode } from 'react';
import {RegisterOptions} from "react-hook-form";

export type AuthField = {
    type: 'text' | 'email' | 'password';
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    minLength?: number;
    rules?: RegisterOptions<Record<string, string>, string>;
};

export type AuthFormProps = {
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


};