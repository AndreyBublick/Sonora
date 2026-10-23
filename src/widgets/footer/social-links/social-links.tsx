import type {SocialLinksProps} from "./social-links.props";
import {UiButton} from "@/src/shared/ui";
import {CSSProperties, useId} from "react";
import {clsx} from "clsx";
import styles from './social-links.module.scss';

export const SocialLinks = ({socials}: SocialLinksProps) => {

    const uid = useId();
    const gradId = (href: string) => `${uid}-social-grad-${href}`;

    return (
        <>
            <svg width="0" height="0" aria-hidden="true" focusable="false"
                 style={{ position: 'absolute', overflow: 'hidden' }}>
                <defs>
                    {socials.map(({ label, hoverGradient, href }) =>
                        hoverGradient ? (
                            <linearGradient
                                key={label}
                                id={gradId(href)}
                                x1={hoverGradient.x1 ?? '0%'}
                                y1={hoverGradient.y1 ?? '100%'}
                                x2={hoverGradient.x2 ?? '100%'}
                                y2={hoverGradient.y2 ?? '0%'}
                            >
                                {hoverGradient.stops.map((s, i) => (
                                    <stop key={i} offset={s.offset} stopColor={s.color} />
                                ))}
                            </linearGradient>
                        ) : null,
                    )}
                </defs>
            </svg>

        <div className="d-flex justify-content-center" style={{gap: 36}}>

            {socials.map(({href, icon, label, hoverColor, hoverGradient}) => (
                <UiButton target={'_blank'} variant={'default'} as={'link'}
                    key={href}
                    href={href}
                    aria-label={label || 'social link'}
                          className={clsx(`text-decoration-none`, hoverGradient && styles['social-link-gradient'],) }

                          style={{
                         '--color': "var(--gray-100)",
                        ...(hoverGradient ? { '--hover-gradient-fill': `url(#${gradId(href)})` } : {}),
                        ...(hoverColor ? {'--hover-color':hoverColor,} : {})
                    } as CSSProperties}
                >
                    {hoverGradient ? (
                        <span className={styles['social-link-stack']}>
                                <span className={styles['social-link-layer']}>{icon}</span>
                                <span
                                    className={clsx(styles['social-link-layer'], styles['social-link-layer-hover'])}
                                    aria-hidden="true"
                                >
                                    {icon}
                                </span>
                            </span>
                    ) : (
                        icon
                    )}
                </UiButton>
            ))}
        </div>
        </>
    );
};
