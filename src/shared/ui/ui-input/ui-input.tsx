'use client'
import {UiInputErrorProps, UiInputHintProps, UiInputIconProps, UiInputLabelProps, UiInputProps} from "./ui-input.props";
import {cloneElement, CSSProperties, forwardRef, isValidElement, useId} from "react";
import {clsx} from "clsx";
import styles from "./ui-input.module.scss";
import {UiInputContext, useUiInputContext} from "./lib";

// --- Icon ---
export const UiInputIcon = ({children, className = "", style = {} }: UiInputIconProps) => {

    const currentStyles:CSSProperties = {width:24, height: 24,...style}

    return (
        <span>
            {isValidElement<{ className?: string; style?: CSSProperties }>(children) &&
                cloneElement(children, {
                    className: `${children.props.className ?? ""} ${className}`.trim(),
                    style: { ...children.props.style, ...currentStyles },
                })}
        </span>
    );
};

// --- Label ---
export const UiInputLabel = ({children, className = "", style = {} }: UiInputLabelProps) => {
    const { inputId } = useUiInputContext();

    return (
        <label htmlFor={inputId} className={clsx(`fw-medium fs-6`, styles.label ,className)} style={{color:'var(--gray-100)' ,...style}}>
            {children}
        </label>
    );
};

// --- Error ---
export const UiInputError = ({children, className = "", style = {} }: UiInputErrorProps) => {
    const { errorId } = useUiInputContext();

    return (
        <span id={errorId} className={clsx(``,styles.error,className)} style={{color:'var(--danger', ...style}}>
            {children}
          </span>
    );
};

// --- Hint ---
export const UiInputHint = ({children, className = "", style = {} }: UiInputHintProps) => {
    const { hintId } = useUiInputContext();

    return (
        <span id={hintId} className={clsx(``,styles.hint,className) } style = {{color:'var(--gray-700', ...style}}>
            {children}
          </span>
    )
}

const Input = forwardRef<HTMLInputElement, UiInputProps>(
    (
        {
            label,
            error,
            hint,
            iconStart,
            iconEnd,
            variant = "default",
            className,
            id,
            ...rest
        },
        ref,
    ) => {
        const defaultId = useId();
        const inputId = id ?? defaultId;
        const isInvalid = Boolean(error);

        const describedBy = error
            ? `${inputId}-error`
            : hint
                ? `${inputId}-hint`
                : undefined;

        const context = {
            inputId,
            errorId: `${inputId}-error`,
            hintId: `${inputId}-hint`,
        };

        return (
            <UiInputContext.Provider value={context}>
        <div className={clsx(styles.field, className)}>
                {label && (<>{label}</>)}

                <div
                    className={clsx(
                        styles.wrapper,
                        styles[variant],
                        isInvalid && styles.invalid,
                    )}
                >
                    {iconStart && <span className={styles.iconStart}>{iconStart}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className={styles.input}
                        aria-invalid={isInvalid}
                        aria-describedby={describedBy}
                        {...rest}
                    />

                    {iconEnd && <span className={styles.iconEnd}>{iconEnd}</span>}
                </div>

                {error && (<>{error}</>)}
                {hint && (<>{hint}</>)}

            </div>
            </UiInputContext.Provider>
        );
    },
)

export const UiInput = Object.assign(Input,  { Icon: UiInputIcon, Label: UiInputLabel,Hint: UiInputHint, Error: UiInputError },);
Input.displayName = "UiInput";