import type {LogoProps} from "./logo.props";
import Link from "next/link";
import {LinearText} from "@/src/shared/ui";


export const Logo = ({onClick, href='/', title=''}: LogoProps) => {
    return (
        <Link href={href} className="fs-2 fw-bold d-inline-block" onClick={onClick}>
            <LinearText>{title}</LinearText>
        </Link>
    );

};