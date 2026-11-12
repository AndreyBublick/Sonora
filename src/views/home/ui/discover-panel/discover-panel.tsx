import type {DiscoverPanelProps} from "./discover-panel.props";
import {SectionTitle} from "@/src/shared/ui";
import {CSSProperties, ReactNode} from "react";
import {News} from "./news";
import {PopularAuthors} from "./popular-authors";


export const DiscoverPanel = ({}: DiscoverPanelProps) => {

    return (
        <>
            <Title>
                News
            </Title>
            <News />
            <Title style={{marginTop:32}}>
                Popular authors
            </Title>
            <PopularAuthors />
        </>
    );
};

const Title = ({children, style={}}:{children:ReactNode, style?:CSSProperties})=>{
return  <SectionTitle className={'fw-semibold mb-4 fs-4'} as={'h2'} style={{
    padding: '0 12px',
    ...style,
}}>{children}</SectionTitle>
}