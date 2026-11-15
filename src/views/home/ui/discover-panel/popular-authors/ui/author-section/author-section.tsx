import type {AuthorSectionProps} from "./author-section.props";
import {AuthorCard} from "@/src/entities/author";
import {UiButton, SectionTitle} from "@/src/shared/ui";

export const AuthorSection = ({title, authors}: AuthorSectionProps) => {

    const emptyVertical = 20

    return (
        <div className="rounded-3 px-3" style={{
            paddingTop: emptyVertical,
            paddingBottom: emptyVertical,
            backgroundColor:'var(--gray-700)',
        }}>
            <div className="d-flex align-items-center justify-content-between" style={{
                marginBottom:emptyVertical,
            }}>
                <SectionTitle className={'fw-semibold fs-5'} as={'h3'} style={{padding: 0, margin: 0}}>
                    {title}
                </SectionTitle>
                <UiButton as="link" href="#" variant="outline-primary" className="d-flex align-items-center justify-content-center fw-light px-3 py-2" style={{
                    maxHeight:36,
                    fontSize: 14,
                }}>
                    View all
                </UiButton>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '24px', rowGap: emptyVertical }}>
                {authors.map((author) => (
                    <div
                        key={author.id}
                        style={{ flex: '0 0 calc(50% - 12px)' }}
                    >
                        <AuthorCard {...author} />
                    </div>
                ))}
            </div>
        </div>
    );
};
