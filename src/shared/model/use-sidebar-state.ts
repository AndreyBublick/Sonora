'use client';
import { useSyncExternalStore } from 'react';

const KEY = 'sidebar-expanded';
const DEFAULT = true;

const listeners = new Set<() => void>();

const subscribe = (cb: () => void) => {
    listeners.add(cb);
    return () => { listeners.delete(cb); };
};

const getSnapshot = () => {
    if (typeof window === 'undefined') return DEFAULT;
    const open = sessionStorage.getItem(KEY);
    return open === null ? DEFAULT : open === 'true';
};

const getServerSnapshot = () => DEFAULT;

const write = (open: boolean) => {
    sessionStorage.setItem(KEY, String(open));
    listeners.forEach((l) => l());
};

const toggle = () => write(!getSnapshot());
const close = () => write(false);

export const useSidebarState = () => ({
    isOpen: useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot),
    toggle,
    close,
});