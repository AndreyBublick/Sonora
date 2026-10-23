import { useCallback } from 'react';

export const useScrollToElement = () => {
    return useCallback(
        (elementId?: string, behavior: 'smooth' | 'auto' = 'smooth', position: 'start' | 'end' = 'start') => {
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior, block: position });
                }
            } else {
                window.scrollTo({
                    top: position === 'start' ? 0 : document.body.scrollHeight,
                    behavior,
                });
            }
        },
        [],
    );
};