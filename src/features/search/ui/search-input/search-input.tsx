import type {SearchInputProps} from "./search-input.props";
import {UiInput} from "@/src/shared/ui";
import {useSearch} from "@/src/features/search";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

export const SearchInput = ({config, delay}: SearchInputProps) => {
    const {results, query, setQuery, loading} = useSearch(config, delay)
    return (
        <UiInput value={query} onChange={(e)=>setQuery(e.currentTarget.value)} placeholder={'Search For Musics, Artists, ...'} variant={'search'} iconStart={<UiInput.Icon style={{color:'var(--gray-100)', opacity:0.6}}>
           <MagnifyingGlassIcon />
        </UiInput.Icon> } />
    );

};