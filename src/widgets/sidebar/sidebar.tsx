"use client";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { SidebarContent } from "./sidebar-content";
import type { SidebarProps } from "./sidebar.props";

export const Sidebar = ({ logo, sidebarData }: SidebarProps) => {
    const [open, setOpen] = useState(false);


    return (
        <>
            {/* Кнопка-бургер — только на мобилке */}
            <button
                type="button"
                className="btn btn-link d-lg-none position-fixed top-0 start-0 m-3 z-3"
                onClick={() => setOpen(true)}
                aria-label="Открыть меню"
            >
                {/* иконка бургера */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>

            {/* Десктопный сайдбар */}
            <aside
                className="d-none d-lg-block pe-3 pt-5 pb-3"
                style={{
                    width: 400,
                    paddingLeft: 64,
                    borderRight: "2px solid var(--gray-600)",
                    minHeight: "100%",
                }}
            >
                <SidebarContent logo={logo} sidebarData={sidebarData} />
            </aside>

            {/* Мобильный offcanvas */}
            <Offcanvas
                show={open}
                onHide={() => setOpen(false)}
                placement="start"
                className="d-lg-none"
                style={{ width: 300 }}
            >
                <Offcanvas.Header closeButton className={`px-3 py-2`}>
                    <Offcanvas.Title>{logo}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent
                        logo={''}
                        sidebarData={sidebarData}
                        onNavigate={() => setOpen(false)}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};