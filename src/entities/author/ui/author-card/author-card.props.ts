import {AuthorPreview} from "../../model/types";

export type AuthorCardProps = Pick<AuthorPreview, "name" | "years" | "image">;