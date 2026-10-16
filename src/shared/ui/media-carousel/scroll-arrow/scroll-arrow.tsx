import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";
import {ScrollArrowProps} from "@/src/shared/ui/media-carousel/scroll-arrow/scroll-arrow.props";

export const ScrollArrow = ({ direction, disabled, onClick }: ScrollArrowProps) => {

    const commonPropsIcons = {
        width:20,
        height:20
    }

   return <button
        type="button"
        className={`d-flex flex-shrink-0 justify-content-center align-items-center rounded-1`}
        onClick={onClick}
        disabled={disabled}
        aria-label={direction === "left" ? "Previous" : "Next"}
        style={{
            width: 40,
            height: 40,
            border: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.3 : 1,
            background:'var(--gray-700)'
        }}
    >
        {direction === "left" ? <ChevronLeftIcon {...commonPropsIcons} /> : <ChevronRightIcon {...commonPropsIcons} />}
    </button>
};