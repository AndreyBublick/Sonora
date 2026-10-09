'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type {DropdownProps} from './dropdown.props';
import {UiButton} from "@/src/shared/ui";
import {clsx} from "clsx";

export const Dropdown = ({
                             trigger,
                             items,
                             align = 'end',
                             side = 'bottom',
                             sideOffset = 8,
                             minWidth = 180,
                             className,
                             onOpenChange,
                         }: DropdownProps) => {

    return (
        <DropdownMenu.Root onOpenChange={onOpenChange}>
            <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align={align}
                    side={side}
                    sideOffset={sideOffset}
                    data-bs-theme="dark"
                    className={clsx(`dropdown-menu show shadow border-0 rounded-3 p-1`,{
                        className
                    }) }
                    style={{
                        minWidth,
                        backgroundColor: 'var(--gray-800)',
                        zIndex: 1000,
                    }}
                >
                    {items.map((item, i) => {
                        if (item.type === 'separator') {
                            return (
                                <DropdownMenu.Separator
                                    key={i}
                                    className="dropdown-divider my-1"
                                    style={{ margin:`4px -4px`, borderTop: '1px solid var(--gray-300)', opacity: 0.4 }}
                                />
                            );
                        }

                        const { label, icon, href, onClick, disabled, variant } = item;

                        const inner = (
                            <>
                                {icon && (
                                    <span className="d-inline-flex align-items-center justify-content-center">
                    {icon}
                  </span>
                                )}
                                <span className="flex-grow-1 text-start">{label}</span>
                            </>
                        );

                        const itemClass = [
                            'dropdown-item',
                            'rounded-2',
                            'd-flex',
                            'align-items-center',
                            'gap-2',

                        ]
                            .filter(Boolean)
                            .join(' ');

                        const commonProps = {

                            variant: 'text' as const,
                            className: `py-1 px-2 ${itemClass}`,
                            style: { color:variant==='danger' ? 'var(--danger)' : '', fontSize: 14, outline: 'none' },
                            onClick,
                        };

                        return (
                            <DropdownMenu.Item
                                key={i}
                                asChild
                                disabled={disabled}
                                onSelect={() => onClick?.()}
                            >
                                {href ? (
                                    <UiButton {...commonProps} as="link" href={href}>{inner}</UiButton>
                                ) : (
                                    <UiButton {...commonProps}>{inner}</UiButton>
                                )}
                            </DropdownMenu.Item>
                        );
                    })}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};