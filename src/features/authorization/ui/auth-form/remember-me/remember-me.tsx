import type {RememberMeProps} from "./remember-me.props";
import {Checkbox, Indicator} from "@radix-ui/react-checkbox";
import styles from "./remember-me.module.scss";


export const RememberMe = ({isRemember, setIsRemember}: RememberMeProps) => {

    return (
        <div className={`mt-4 d-flex justify-content-end`}>
        <label className={styles.remember}>
            <Checkbox
                className={styles.checkbox}
                checked={isRemember}
                onCheckedChange={(v) => setIsRemember(!!v)}
            >
                <Indicator className={styles.indicator}>✓</Indicator>
            </Checkbox>
            <span className={styles.label}>Запомнить меня</span>
        </label>
        </div>
    );

};