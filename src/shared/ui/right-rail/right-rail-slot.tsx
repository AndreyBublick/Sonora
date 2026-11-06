'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import {useRightRailTarget} from "@/src/shared/contexts";

export const RightRailSlot = ({ children }: { children: ReactNode }) => {
    const { node } = useRightRailTarget();

    if (!node) return null;

    return createPortal(children, node);
};