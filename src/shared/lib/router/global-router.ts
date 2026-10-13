type GlobalRouter = {
    push: (href: string) => void;
    replace: (href: string) => void;
    back: () => void;
};

const ERROR = "Global router not initialized. Call useGlobalRouter() in root layout.";

export const globalRouter: GlobalRouter = {
    push: () => { throw new Error(ERROR); },
    replace: () => { throw new Error(ERROR); },
    back: () => { throw new Error(ERROR); },
};