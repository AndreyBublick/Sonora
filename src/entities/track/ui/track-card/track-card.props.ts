import {ReactNode} from "react";

export type TrackCardProps =  {
    cover?: string,
    title?:ReactNode
    meta?:Record<string,unknown>
    type:string
    src:string
    ratio?:string
    trackId: string
    liked?: boolean
    likesCount?: number
}