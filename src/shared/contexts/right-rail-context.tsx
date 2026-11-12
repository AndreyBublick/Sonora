'use client';

import {createContext, useContext} from 'react';

type RightRailContextValue = {
    node: HTMLDivElement | null;
    setNode: (node: HTMLDivElement | null) => void;
};

export const RightRailContext = createContext<RightRailContextValue | null>(null);

export const useRightRailTarget = () => {
    const ctx = useContext(RightRailContext);
    if (!ctx) {
        throw new Error('RightRail must be used inside RightRailProvider');
    }
    return ctx;
};

export const useRightRailTargetOptional = () => {
    return useContext(RightRailContext);
};