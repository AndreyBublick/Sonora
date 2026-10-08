export type SearchScope = "songs" | "artists" | "users" | "playlists";

export type SearchResult = {
    id: string;
    title: string;
    subtitle?: string;
    cover?: string;
    scope: SearchScope;
};

// config
export type SearchScopeConfig = {
    scope: SearchScope;
    label: string;
    placeholder: string;
    fetch: (query: string, signal: AbortSignal) => Promise<SearchResult[]>;
};