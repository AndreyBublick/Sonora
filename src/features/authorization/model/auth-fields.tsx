import {AuthField} from "./types";
import {PersonIcon} from "@radix-ui/react-icons";

export const AUTH_FIELDS: AuthField[] =[
    {
        type: 'text',
        name: 'login',
        label: 'Login',
        placeholder: 'Enter Your Login',
        required: true,
        autoComplete: 'username',
        icon: <PersonIcon />,
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

];