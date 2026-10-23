import type {LogoProps} from "./logo.props";
import Link from "next/link";
import {LinearText} from "@/src/shared/ui";
import {clsx} from "clsx";


export const Logo = ({onClick, href='/', title='', className=""}: LogoProps) => {
    return (
        <Link href={href} className={clsx(`fs-2 d-inline-block`, className)} onClick={onClick}>
            <LinearText>{title}</LinearText>
        </Link>
    );

};