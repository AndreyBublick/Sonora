import {SectionTitleLabelProps, SectionTitleProps} from "./section-title.props";
import {clsx} from "clsx";
import React from "react";


export const SectionTitle = ({as='h2', children, className='fw-bold fs-2', style={}}: SectionTitleProps) => {

    const Wrapper = as
    return (
        <Wrapper style={{color:'', padding:6, ...style,}} className={clsx(``,className) }>
            {children}
        </Wrapper>
    );

};

const SectionTitleLabel = ({children, className='', style={}}: SectionTitleLabelProps) => {
    return <span style={{ color: "var(--accent-400)" }}>{` `+ children}</span>
}

SectionTitle.Label = SectionTitleLabel