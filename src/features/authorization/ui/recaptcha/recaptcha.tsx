'use client';
import styles from './recaptcha.module.scss'

import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import {useMediaQuery} from "@/src/shared/lib";

type ReCaptchaProps = {
    onChange: (token: string | null) => void;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact';
};

export const ReCaptcha = ({
                              onChange,
                              theme = 'dark',
                              size = 'normal',
                          }: ReCaptchaProps) => {
    const ref = useRef<ReCAPTCHA>(null);

    const isMobile = useMediaQuery({maxWidth:440})

    const currentSize = isMobile ? 'compact' : size

    return (
        <ReCAPTCHA
            key={`${isMobile}`}
            className={`${styles['recaptcha']} ${styles[currentSize]}`}
            ref={ref}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => onChange(token)}
            onExpired={() => onChange(null)}
            onErrored={() => onChange(null)}
            theme={theme}
            size={currentSize}
        />
    );
};