'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import {useRightRailTargetOptional} from "@/src/shared/contexts";

export const RightRailSlot = ({ children }: { children: ReactNode }) => {
    const ctx = useRightRailTargetOptional();

    if (!ctx || !ctx.node) {
        return null;
    }

    return createPortal(children, ctx.node);
};