import type {AuthFormFooterProps} from "./auth-form-footer.props";
import {UiButton} from "@/src/shared/ui";
import {AvatarIcon} from "@radix-ui/react-icons";
import {CSSProperties} from "react";


export const AuthFormFooter = ({style={} ,className='', separatorClassName = 'my-2', isDisabled=false, isLoading=false, submitLabel='Register'}: AuthFormFooterProps) => {

    const hrStyles:CSSProperties = {position:'relative',top:'-2px',}

    return (<div className={className} style={{...style}}>
        <UiButton
            type="submit"
            disabled={isDisabled || isLoading}
            className="fs-5 w-100 fw-medium"
            style={{
                padding:'6px 0',
            }}
        >
            {isLoading ? 'Registration...' : submitLabel}
        </UiButton>

    <div className={`${separatorClassName} text-center align-items-center d-flex gap-2 justify-content-between`}>
        <hr className="w-100" style={hrStyles} />
        <span style={{position:'relative',top:'-3.05px', lineHeight: 1 }}>or</span>
        <hr className="w-100" style={hrStyles} />
    </div>

    <UiButton
        style={{
            padding:'5px 0',
        }}
        className="text-center fs-5 gap-2 align-items-center justify-content-center d-flex"
        variant="secondary"
        as="link"
        href={`${process.env.NEXT_PUBLIC_API_URL}/auth/oauth-redirect`}
    >
        <AvatarIcon width={26} height={26} />
        <span>Keycloak</span>
    </UiButton>
    </div>
    );

};