import type {FooterNavColumnProps} from "./footer-nav-column.props";
import {UiButton} from "@/src/shared/ui";

export const FooterNavColumn = ({title, links}: FooterNavColumnProps) => {
    return (
        <div style={{minWidth: 144}}>
            <h2
                className="fw-bold fs-4 mb-2 text-center"
                style={{
                    borderBottom: "3px solid var(--gray-200)",
                    padding: '10px 10px 14px',
                }}
            >
                {title}
            </h2>
            <ul style={{listStyle: 'none'}} className="d-flex flex-column gap-3 text-center">
                {links.map((link, index) => (
                    <li key={index} style={{padding: 10, letterSpacing: '-0.5%'}}>
                        <UiButton variant={'text'} as={'link'}
                            href={link.href}
                            className="text-decoration-none"
                            style={{color: "var(--gray-200)"}}
                        >
                            {link.label}
                        </UiButton>
                    </li>
                ))}
            </ul>
        </div>
    );
};
