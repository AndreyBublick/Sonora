'use client'
import type {SidebarElementProps} from "./sidebar-element.props";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import style from "./sidebar-element.module.css";
import Link from "next/link";


export const SidebarElement = ({styles={} ,icon, body, onClick, ...rest}: SidebarElementProps) => {

    const pathname = usePathname();
    const isActive = rest.href === pathname;
    const isButton = rest.as === "button"

    const content = (
        <>
            <span className={`d-flex align-items-center`}>{icon}</span>
            {body}
        </>
    );

    const commonStyles = {
        padding: isActive ? '6px 8px' : '6px 4px',
    }

    return (
        <li className={clsx(
            `fs-6 d-flex justify-content-center flex-column`,
            style['element'])}>
            {isButton ? (
                <button onClick={onClick} style={{...commonStyles, ...styles}} className={clsx(
                    `bg-transparent border-0 d-flex gap-2`,
                    style['button'])}>{content}</button>
            ) : (
                <Link onClick={onClick} href={rest.href} style={{
                    ...commonStyles,
                    ...styles
                }} className={clsx(
                    "d-flex gap-2 rounded-2",
                    style['link'],
                    isButton ? {} : { [style.active]: isActive }
                )}>
                    {content}
                </Link>
            )}
        </li>
    );

};