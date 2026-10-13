'use client';
import Image from 'next/image';
import {CSSProperties} from 'react';
import { Dropdown, UiButton } from '@/src/shared/ui';
import type { AvatarChipProps } from './avatar-chip.props';
import {useLogout} from "@/src/features/authorization/model";
import {useAuth} from "@/src/entities/session";
import {ChevronDownIcon, ExitIcon, PersonIcon} from "@radix-ui/react-icons";

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
                            <ChevronDownIcon width={22} height={22} />
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
                            <ExitIcon width={14} height={14} />
                        ),
                        onClick: handleLogout,
                    },
                ]}
            />


    );
};