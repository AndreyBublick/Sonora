import type {LogoProps} from "./logo.props";
import Link from "next/link";
import {LinearText} from "@/src/shared/ui";


export const Logo = ({onClick}: LogoProps) => {

    return (
        <Link href="/" className="fs-2 fw-bold d-inline-block" onClick={onClick}>
            <LinearText>Sonora</LinearText>
        </Link>
    );

};