"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { SidebarContent } from "./sidebar-content";
import type { SidebarProps } from "./sidebar.props";
import styles from "./sidebar.module.css";
import {useState} from "react";

export const Sidebar = ({ logo, sidebarData }: SidebarProps) => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <aside
                className={`d-none d-lg-block pe-3 pt-5 pb-3`}
                style={{
                    width: 400,
                    paddingLeft: 64,
                    borderRight: "2px solid var(--gray-600)",
                    minHeight: "100%",
                }}
            >
                <SidebarContent wrapperClassName={'pt-4'} logo={logo} sidebarData={sidebarData} />
            </aside>

            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <button
                        type="button"
                        className={`btn btn-link d-lg-none position-fixed top-0 start-0 m-3 z-3`}
                        aria-label="Открыть меню"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M4 6h16M4 12h16M4 18h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className={styles.overlay} />

                    <Dialog.Content className={`d-lg-none ${styles.content}`}>
                        <div className={`d-flex align-items-center justify-content-between px-3 py-2 border border-bottom-secondary border-bottom-1`}>
                            <Dialog.Title asChild onClick={() => setOpen(false)}>
                                {logo}
                            </Dialog.Title>

                            <Dialog.Close asChild>
                                <button
                                    type="button"
                                    className={`border-0 bg-transparent fs-2 px-2 py-1`}
                                    aria-label="Закрыть меню"
                                >
                                    ×
                                </button>
                            </Dialog.Close>
                        </div>

                        <div className={`flex-1 overflow-y-auto px-3 py-2`} >
                            <SidebarContent
                                logo={""}
                                sidebarData={sidebarData}
                                onNavigate={() => setOpen(false)}
                            />
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};