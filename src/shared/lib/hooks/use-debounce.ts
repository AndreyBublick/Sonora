import { useEffect, useState } from "react";

export type UseDebounceData<T> = {
    value: T;
    delay?: number;
};

export const useDebounce = <T>({ value, delay = 300 }: UseDebounceData<T>): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};