import {useState} from "react";
import {SearchScopeConfig} from "./types";
import {useDebounce} from "@/src/shared/lib";
import {useQuery} from "@tanstack/react-query";

export const useSearch = (config: SearchScopeConfig, delay = 300) => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce({value: query, delay});

    const {data: results = [], isFetching} = useQuery({
        queryKey: ["search", config.scope, debouncedQuery], //cache
        queryFn: ({signal}) => config.fetch(debouncedQuery, signal),//queryFn
        enabled: debouncedQuery.trim().length > 0,//isNeedQuery
        placeholderData: (previous) => previous,//prevData [A, B, C] → [A, B, C] → [A, B, C, D]
    });

    return {query, setQuery, results, loading: isFetching}
}