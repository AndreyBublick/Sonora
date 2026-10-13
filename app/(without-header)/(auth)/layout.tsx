import {ReactNode} from "react";
import BG from "@assets/images/auth/bg.avif";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className={'d-flex'} style={{minHeight: "inherit", background: `
    linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 150%),
    url(${BG.src}) center / cover no-repeat
  `, }}>
            {children}
        </div>
    );
}