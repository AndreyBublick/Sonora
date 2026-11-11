import {Image} from "../api/types";

export type FlatImage = Omit<Image, 'type'>
export type Creator =  { id: string; name: string }