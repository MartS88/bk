export interface SelectOption {
    name: string;
    value: string;
}

export const SELECT_OPTIONS:SelectOption[] = [
    { name: 'All', value: '' },
    { name: 'Art', value: 'Art' },
    { name: 'Biography', value: 'Biography' },
    { name: 'Computers', value: 'Computers' },
    { name: 'History', value: 'History' },
    { name: 'Medical', value: 'Medical' },
    { name: 'Poetry', value: 'Poetry' },
    { name: 'Religion', value: 'Religion'}
];

export const SORT_SELECT_OPTIONS:SelectOption[] = [
    { name: 'Newest', value: 'newest' },
    { name: 'Relevance', value: 'relevance' },
];