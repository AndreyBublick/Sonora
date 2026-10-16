import type {SkeletonProps} from "./skeleton.props";
import styles from "./skeleton.module.scss";


export const Skeleton = ({className='', style={}}: SkeletonProps) => {

    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{...style}}
        />
    );

};