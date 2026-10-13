'use client';
import Image from 'next/image';
import {CSSProperties} from 'react';
import { Dropdown, UiButton } from '@/src/shared/ui';
import type { AvatarChipProps } from './avatar-chip.props';
import {useLogout} from "@/src/features/authorization/model";
import {useAuth} from "@/src/entities/session";
import {PersonIcon} from "@radix-ui/react-icons";

export const AvatarChip = ({}: AvatarChipProps) => {
    const isImage = false;
    const avatarSrc = '';
    const {logout} = useLogout()
    const styleCover: CSSProperties = {
        position: 'absolute',
        inset: 0,
        background: 'var(--gray-500)',
    };
    const {user} = useAuth()

    const handleLogout = async () => {
        logout()
    };

    return (
            <Dropdown
                align="end"
                minWidth={150}
                trigger={<div className={`d-flex align-items-center gap-3`}>
                        <div
                            className="position-relative rounded-circle overflow-hidden ratio-1x1"
                            style={{ cursor:'pointer', width: 40, height: 40 }}
                        >
                            {isImage ? (
                                <Image
                                    fill
                                    src={avatarSrc}
                                    alt="user-avatar"
                                    sizes="40px"
                                    style={{ objectFit: 'cover', ...styleCover }}
                                />
                            ) : (
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ lineHeight: 1, ...styleCover }}
                                >
                                    <PersonIcon width={20} height={20} />
                                </div>
                            )}
                        </div>

                    <UiButton
                        variant="text"
                        type="button"
                        className="d-flex align-items-center p-0"
                        style={{ gap: 12, cursor: 'pointer' }}
                    >
                        <div className="d-flex gap-2 align-items-center">
                            <span style={{ lineHeight: 1 }}>{user?.login}</span>
                            <svg width="24" height="24" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </UiButton>
                </div>

                }
                items={[
                    { label: 'Profile', href: '/profile' },
                    // { label: 'Настройки', href: '/settings' },
                    // { label: 'Мои плейлисты', href: '/playlists' },
                    { type: 'separator' },
                    {
                        label: 'Logout',
                        variant: 'danger',
                        icon: (
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ),
                        onClick: handleLogout,
                    },
                ]}
            />


    );
};