import {ReactNode} from "react";

export default function WithRailLayout({ children }: { children: ReactNode }) {

    return (
        <>
                {children}
        </>
    );
}