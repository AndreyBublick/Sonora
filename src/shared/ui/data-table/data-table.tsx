import { Fragment } from "react";
import {clsx} from "clsx";
import {DataTableProps} from "./data-table.props";

function Spinner() {
    return (
        <div
            className="spinner-border spinner-border-sm text-muted"
            role="status"
            style={{ width: "1rem", height: "1rem" }}
        />
    );
}

export function DataTable<T>({
    columns,
    items,
    keyExtractor,
    onRowClick,
    isLoading,
    emptyText = "Нет данных",
                                 className='',
    style={},
    expandedRow,
    tdStyles = {},
    thStyles = {},
}: DataTableProps<T>) {
    const colSpan = columns.length;

    return (
        <table className={clsx(`w-100`, className) } style={{...style}}>
            <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th
                            key={i}
                            className={clsx(``, col.className, col.classNameTh)}
                            style={{ ...(col.style ?? {}), ...thStyles }}
                        >
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr>
                        <td style={{ ...tdStyles }} colSpan={colSpan} className="text-center py-4">
                            <Spinner />
                        </td>
                    </tr>
                ) : items.length === 0 ? (
                    <tr>
                        <td style={{ ...tdStyles }} colSpan={colSpan} className="text-center py-4">
                            {emptyText}
                        </td>
                    </tr>
                ) : (
                    items.map((item, index) => {
                        const expanded = expandedRow ? expandedRow(item) : null;

                        return (
                            <Fragment key={keyExtractor(item, index)}>
                                <tr
                                    onClick={onRowClick ? () => onRowClick(item) : undefined}
                                    style={onRowClick ? { cursor: "pointer" } : undefined}
                                >
                                    {columns.map((col, i) => (
                                        <td style={{...(col.style ?? {}), ...tdStyles }} key={i} className={col.className}>
                                            {col.render(item, index+1)}
                                        </td>
                                    ))}
                                </tr>
                                {expanded ? (
                                    <tr>
                                        <td style={{ ...tdStyles }} colSpan={colSpan}>
                                            {expanded}
                                        </td>
                                    </tr>
                                ) : null}
                            </Fragment>
                        );
                    })
                )}
            </tbody>
        </table>
    );
}
