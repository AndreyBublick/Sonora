import {RegisterOptions} from "react-hook-form";
import {ReactElement} from "react";

export type AuthField = {
    type: 'text' | 'email' | 'password';
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    minLength?: number;
    icon?:ReactElement
    rules?: RegisterOptions<Record<string, string>, string>;
};