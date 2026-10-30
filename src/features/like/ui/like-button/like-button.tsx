"use client";

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useLikeTrack } from "@/src/features/like/model";
import type { LikeButtonProps } from "./like-button.props";
import styles from "./like-button.module.scss";
import { UiButton } from "@/src/shared/ui";

export const LikeButton = ({
                               trackId,
                               liked = false,
                               size = "md",
                               onToggle,
                           }: LikeButtonProps) => {

    const { mutate, isPending } = useLikeTrack({
        onSuccess: (_, variables) => {
            onToggle?.(variables.currentState !== "liked");
        },
    });

    const onClickHandler = () => {
        if (isPending) return;
        mutate({ trackId, currentState: liked ? "liked" : null });
    };

    const iconSize = size === "sm" ? 18 : 22;

    const iconClassName = clsx(
        styles["like-button-icon"],
        liked && styles["icon-liked"]
    );

    return (
        <UiButton
            variant="text"
            type="button"
            className={clsx(
                styles["like-button"],
                isPending && styles["like-button-pending"]
            )}
            onClick={onClickHandler}
            aria-label={liked ? "Unlike track" : "Like track"}
            aria-pressed={liked}
        >
            {liked ? (
                <HeartFilledIcon width={iconSize} height={iconSize} className={iconClassName} />
            ) : (
                <HeartIcon width={iconSize} height={iconSize} className={iconClassName} />
            )}
        </UiButton>
    );
};