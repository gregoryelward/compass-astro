import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHelpfulFields {
    title?: EntryFieldTypes.Symbol;
    yes?: EntryFieldTypes.Symbol;
    no?: EntryFieldTypes.Symbol;
    yesResponse?: EntryFieldTypes.Text;
    noResponse?: EntryFieldTypes.Text;
}

export type TypeHelpfulSkeleton = EntrySkeletonType<TypeHelpfulFields, "helpful">;
export type TypeHelpful<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHelpfulSkeleton, Modifiers, Locales>;

export function isTypeHelpful<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHelpful<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'helpful'
}
