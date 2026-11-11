export type JsonApiResource<
    TType extends string = string,
    TAttributes = Record<string, unknown>,
    TRelationships = Record<string, unknown>,
> = {
    id: string;
    type: TType;
    attributes: TAttributes;
    relationships?: TRelationships;
};