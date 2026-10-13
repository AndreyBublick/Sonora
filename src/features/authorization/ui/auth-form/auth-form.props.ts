import type { ReactNode } from 'react';

export type AuthField = {
    type: 'text' | 'email' | 'password';
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    minLength?: number;
};

export type AuthFormProps = {
    isShowRemember?:boolean;
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