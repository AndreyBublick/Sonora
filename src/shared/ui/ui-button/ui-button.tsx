import type {ButtonAsButton, ButtonAsLink, UiButtonProps} from "./ui-button.props";
import {clsx} from "clsx";
import styles from './ui-button.module.css'
import Link from "next/link";
import {Slot} from "@radix-ui/react-slot";


export const UiButton = ({as='button', asChild=false, variant='primary', className='', children, ...rest}: UiButtonProps) => {

    const commonStyles = clsx(`rounded-1 overflow-hidden`,styles['common'], styles[variant], className);

    if (asChild) {
        return (
            <Slot className={commonStyles} {...rest}>
                {children}
            </Slot>
        );
    }

    if (as === 'link') {
        const { href, ...linkProps } = rest as ButtonAsLink;
        return <Link href={href} className={commonStyles} {...linkProps}>{children}</Link>;
    }


     const { type = 'button', ...buttonProps } = rest as ButtonAsButton;
    return <button type={type} className={commonStyles} {...buttonProps}>{children}</button>;

};