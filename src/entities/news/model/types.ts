import {BaseMediaAttributes} from "@/src/shared/api/types";
import {FlatImage, JsonApiResource, PublishableAttributes} from "@/src/shared/types";

export type NewsAttachment = {
   id: string;
   title: string;
   subTitle: string;
   textBody: string;
   image: FlatImage;
};

export type NewsAttributes = BaseMediaAttributes & PublishableAttributes & {
    attachments?: NewsAttachment[];
};

export type News = JsonApiResource<"news", NewsAttributes>;
