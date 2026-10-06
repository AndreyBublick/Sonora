import type {LinearTextProps} from "./linear-text.props";
import {clsx} from "clsx";
import styles from "./linear-text.module.css";


export const LinearText = ({children, grLeft='var(--accent-400)', grRight=`var(--accent-second-400)`}: LinearTextProps) => {
    return (
        <div className={clsx(`${styles['wrapper']}`)} style={{
            backgroundImage: `linear-gradient(to right, ${grLeft} -25%, ${grRight} 200%)`
        }}>
            {children}
        </div>
    );

};