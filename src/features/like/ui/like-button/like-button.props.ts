export type LikeButtonProps = {
    trackId: string;
    liked?: boolean;
    likesCount?: number;
    size?: "sm" | "md";
    onToggle?: (liked: boolean) => void;
}