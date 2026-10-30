import {CSSProperties, ReactNode} from "react";

export type DataTableColumn<T> = {
    header: ReactNode;
    render: (item: T, index?:number) => ReactNode;
    className?: string;
    classNameTh?: string;
    style?: CSSProperties;
};

export type DataTableProps<T> = {
    columns: DataTableColumn<T>[];
    items: T[];
    keyExtractor: (item: T, index: number) => string;
    isLoading?: boolean;
    emptyText?: string;
    style?: CSSProperties;
    tdStyles?: CSSProperties;
    thStyles?: CSSProperties;
    expandedRow?: (item: T) => ReactNode;
    className?:string
    onRowClick?: (item: T) => void;
    onRowEnter?: (item: T) => void,
    onRowLeave?: (item: T) => void,
};
