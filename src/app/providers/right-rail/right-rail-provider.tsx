'use client';

import { useState, ReactNode } from 'react';
import {RightRailContext} from "@/src/shared/contexts";

export const RightRailProvider = ({ children }: { children: ReactNode }) => {
    const [node, setNode] = useState<HTMLDivElement | null>(null);

    return (
        <RightRailContext.Provider value={{ node, setNode }}>
            {children}
        </RightRailContext.Provider>
    );
};