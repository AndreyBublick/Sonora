import {FlatImage, JsonApiResource} from "@/src/shared/types";

export type AuthorAttributes = {
    id: string;
    name: string;
    years: string;
    image: FlatImage;
};

export type AuthorPreview = {
    id: string;
    name: string;
    years: string;
    image: {url: string};
};

export type Author = JsonApiResource<"author", AuthorAttributes>;
