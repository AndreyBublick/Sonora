import type {SectionTitleProps} from "./section-title.props";
import {clsx} from "clsx";


export const SectionTitle = ({as='h2', children, className='', style={}}: SectionTitleProps) => {

    const Wrapper = as
    return (
        <Wrapper style={{color:'',...style,}} className={clsx(`fw-bold fs-2`,className) }>
            {children}
        </Wrapper>
    );

};