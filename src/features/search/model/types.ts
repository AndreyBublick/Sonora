export type SearchScope = "songs" | "artists" | "users" | "playlists";

export type SearchResult = {

};

// config
export type SearchScopeConfig = {
    scope: SearchScope;
    label: string;
    placeholder: string;
    fetch: (query: string, signal: AbortSignal) => Promise<SearchResult[]>;
};