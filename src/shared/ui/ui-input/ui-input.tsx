'use client'
import {UiInputErrorProps, UiInputHintProps, UiInputIconProps, UiInputLabelProps, UiInputProps} from "./ui-input.props";
import {cloneElement, CSSProperties, forwardRef, isValidElement, useId, useRef, useState} from "react";
import {clsx} from "clsx";
import styles from "./ui-input.module.scss";
import {UiInputContext, useUiInputContext} from "./lib";
import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import composeRefs from '@seznam/compose-react-refs';


// --- Icon ---
export const UiInputIcon = ({children, className = "", style = {} }: UiInputIconProps) => {

    const currentStyles:CSSProperties = {width:24, height: 24, pointerEvents:'none',...style}

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
        <span id={errorId} className={clsx(``,styles.error,className)} style={{color:'var(--danger)', ...style}}>
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
            className='',
            classNameWrapper='',
            id,
            type,
            style={},
            ...rest
        },
        forwardedRef,
    ) => {
        const innerRef = useRef<HTMLInputElement>(null);
        const mergedRef = composeRefs(innerRef, forwardedRef);
        const [isPasswordHidden, setIsPasswordHidden] = useState(true)
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

        const onEyeClickHandler = (e:React.MouseEvent)=>{
            e.preventDefault();
            e.stopPropagation();
            setIsPasswordHidden(prev=> !prev)
        }

        return (
            <UiInputContext.Provider value={context}>
            <div className={clsx(styles.field, classNameWrapper)} onMouseDown={(e) => {
                if (e.target === innerRef.current) return;
                if ((e.target as HTMLElement).closest("button, a, [data-no-focus]")) return;
                e.preventDefault();
                innerRef.current?.focus();
            }}>
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
                        ref={mergedRef}
                        id={inputId}
                        className={clsx(className, styles.input,styles[type||'text']) }
                        aria-invalid={isInvalid}
                        aria-describedby={describedBy}
                        type={ isPasswordHidden ? type : 'text' }
                        style={ {
                            ...(iconStart && { paddingLeft: 0 }),
                            ...(iconEnd && { paddingRight: 0 }),
                            ...style
                        }}
                        {...rest}
                    />

                    {iconEnd && <span className={styles.iconEnd}>{iconEnd}</span>}
                    {!iconEnd && type==='password' && <span onMouseDown={onEyeClickHandler} className={styles.iconEnd}> {isPasswordHidden ? <EyeClosedIcon /> : <EyeOpenIcon />} </span>}
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