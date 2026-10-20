import type {MobileSidebarProps} from "./mobile-sidebar.props";
import {useState} from "react";
import {Logo, UiButton} from "@/src/shared/ui";
import {Cross2Icon, TextAlignJustifyIcon} from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./mobile-sidebar.module.scss";
import {SidebarContent, useSidebarData} from "@/src/widgets/sidebar";

export const MobileSidebar = ({}: MobileSidebarProps) => {

    const [open, setOpen] = useState(false);
    const sidebarData = useSidebarData()

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <UiButton variant={'outline-primary'} asChild
                          type="button"
                          className={`btn btn-link flex-shrink-0 d-lg-none mx-3 my-2 z-3`}
                          aria-label="Открыть меню"
                >
                    <TextAlignJustifyIcon width={42} height={38}/>
                </UiButton>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>

                <Dialog.Content className={`d-lg-none ${styles.content}`}>
                    <div
                        className={`d-flex align-items-center justify-content-between px-3 py-2 border border-bottom-secondary border-bottom-1`}>
                        <Dialog.Title asChild onClick={() => setOpen(false)}>
                            <Logo title={'Sonora'} />
                        </Dialog.Title>

                        <Dialog.Close asChild>
                            <button
                                type="button"
                                style={{lineHeight:0}}
                                className={`border-0 d-flex align-items-start bg-transparent fs-2 p-1`}
                                aria-label="Закрыть меню"
                            >
                                <Cross2Icon width={26} height={26} />
                            </button>
                        </Dialog.Close>
                    </div>

                    <div className={`flex-1 overflow-y-auto px-3 py-2`}>
                        <SidebarContent
                            logo={""}
                            sidebarData={sidebarData}
                            onNavigate={() => setOpen(false)}
                        />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );

};