"use client";
import {SidebarContentProps} from "./sidebar-content.props";
import {SidebarElement} from "../element";


export const SidebarContent = ({ logo, sidebarData, onNavigate, wrapperClassName='' }: SidebarContentProps) => {

    return (
        <nav>
            {logo}
            <div className={`${wrapperClassName}`}>
                {sidebarData.map(({ title, items }, index) => (
                    <div key={index}>
            <span
                className="d-inline-block mb-4"
                style={{ fontSize: 12, color: "var(--accent-700)" }}
            >
              {title}
            </span>
                        <ul className="list-unstyled d-flex flex-column gap-4">
                            {items.map((item, index) => (
                                <SidebarElement key={index} {...item} onClick={onNavigate} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
};