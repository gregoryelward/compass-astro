import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHelpAgencyListHeadingFields {
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
}

export type TypeHelpAgencyListHeadingSkeleton = EntrySkeletonType<TypeHelpAgencyListHeadingFields, "helpAgencyListHeading">;
export type TypeHelpAgencyListHeading<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHelpAgencyListHeadingSkeleton, Modifiers, Locales>;

export function isTypeHelpAgencyListHeading<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHelpAgencyListHeading<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'helpAgencyListHeading'
}
