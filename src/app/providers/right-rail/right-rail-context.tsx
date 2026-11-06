'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type RightRailContextValue = {
    node: HTMLElement | null;
    setNode: (node: HTMLElement | null) => void;
};

const RightRailContext = createContext<RightRailContextValue | null>(null);

export const RightRailProvider = ({ children }: { children: ReactNode }) => {
    const [node, setNode] = useState<HTMLElement | null>(null);

    return (
        <RightRailContext.Provider value={{ node, setNode }}>
            {children}
        </RightRailContext.Provider>
    );
};

export const useRightRailTarget = () => {
    const ctx = useContext(RightRailContext);
    if (!ctx) {
        throw new Error('RightRail must be using inside RightRailProvider');
    }
    return ctx;
};