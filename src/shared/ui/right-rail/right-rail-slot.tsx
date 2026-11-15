'use client';

import { ReactNode } from 'react';
import * as Portal from '@radix-ui/react-portal';
import { useRightRailTargetOptional } from "@/src/shared/contexts";

export const RightRailSlot = ({ children }: { children: ReactNode }) => {
    const ctx = useRightRailTargetOptional();

    if (!ctx || !ctx.node) {
        return null;
    }

    return (
        <Portal.Root container={ctx.node}>
            {children}
        </Portal.Root>
    );
};