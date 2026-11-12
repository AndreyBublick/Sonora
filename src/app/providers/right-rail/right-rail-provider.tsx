'use client';

import {useState, ReactNode, useMemo} from 'react';
import {RightRailContext} from "@/src/shared/contexts";

export const RightRailProvider = ({ children }: { children: ReactNode }) => {
    const [node, setNode] = useState<HTMLDivElement | null>(null);

    const value = useMemo(() => ({ node, setNode }), [node]);

    return (
        <RightRailContext.Provider value={value}>
            {children}
        </RightRailContext.Provider>
    );
};