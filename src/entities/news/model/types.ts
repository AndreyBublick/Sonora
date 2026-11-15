import {FlatImage, JsonApiResource, PublishableAttributes} from "@/src/shared/types";

export type NewsAttributes = PublishableAttributes & {
   id: string;
   title: string;
   subTitle: string;
   textBody: string;
   image: FlatImage;
   addedAt:string
   /* attachments?: NewsAttachment[];*/
};

export type News = JsonApiResource<"news", NewsAttributes>;
