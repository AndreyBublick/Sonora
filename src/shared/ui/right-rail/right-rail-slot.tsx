'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRightRailTarget } from '@/src/app/providers/right-rail';

export const RightRailSlot = ({ children }: { children: ReactNode }) => {
    const { node } = useRightRailTarget();

    if (!node) return null;

    return createPortal(children, node);
};