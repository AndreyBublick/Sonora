import type { ReactNode } from 'react';

export type DropdownItem =
    | {
    type?: 'item';
    label: string;
    icon?: ReactNode;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'default'|'danger';
}
    | { type: 'separator' };

export type DropdownProps = {
    trigger: ReactNode;
    items: DropdownItem[];
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    minWidth?: number | string;
    className?: string;
    onOpenChange?: (open: boolean) => void;
};