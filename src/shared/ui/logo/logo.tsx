import type {LogoProps} from "./logo.props";
import Link from "next/link";
import {useScrollToElement} from "@/src/shared/lib";
import {LinearText} from "@/src/shared/ui";
import {clsx} from "clsx";


export const Logo = ({href='/', title='', className=""}: LogoProps) => {
    const scrollTo = useScrollToElement();

    return (
        <Link href={href} className={clsx(`fs-2 d-inline-block`, className)} onClick={()=>scrollTo()}>
            <LinearText>{title}</LinearText>
        </Link>
    );

};