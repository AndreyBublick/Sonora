import {useEffect, useState} from "react";

export const useHeader = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastInnerHeight = window.innerHeight;

        const onScroll = () => {
            if (Math.abs(window.innerHeight - lastInnerHeight) > 30) {
                lastInnerHeight = window.innerHeight;
                return;
            }
            setIsScrolled(prev => {
                const y = window.scrollY;
                if (!prev && y > 40) return true;
                if (prev && y < 10) return false;
                return prev;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
   return  {isScrolled}
};