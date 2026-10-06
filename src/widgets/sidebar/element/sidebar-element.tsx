'use client'
import type {SidebarElementProps} from "./sidebar-element.props";
import {Button, NavLink} from "react-bootstrap";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import style from "./sidebar-element.module.css";
import Link from "next/link";


export const SidebarElement = ({styles={} ,icon, body, href, as='link', onClick}: SidebarElementProps) => {

    const pathname = usePathname();
    const isActive = href === pathname;
    const isButton = as === "button"

    const content = (
        <>
            <span className={`d-flex align-items-center`}>{icon}</span>
            {body}
        </>
    );

    const commonStyles = {
        padding:'6px 8px',
    }

    return (
        <li className={clsx(
            `fs-6 d-flex justify-content-center flex-column`,
            style['element'])}>
            {isButton ? (
                <Button onClick={onClick} style={{...commonStyles, ...styles}} className={clsx(
                    `bg-transparent border-0 d-flex gap-2`,
                    style['button'])}>{content}</Button>
            ) : (
                <NavLink onClick={onClick} as={Link} href={href} style={{
                    ...commonStyles,
                    ...styles
                }} className={clsx(
                    "d-flex gap-2 rounded-2",
                    style['link'],
                    isButton ? {} : { [style.active]: isActive }
                )}>
                    {content}
                </NavLink>
            )}
        </li>
    );

};