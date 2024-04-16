import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNeedHelpFields {
    title?: EntryFieldTypes.Symbol;
    cta?: EntryFieldTypes.Symbol;
    ctaUrl?: EntryFieldTypes.Symbol;
}

export type TypeNeedHelpSkeleton = EntrySkeletonType<TypeNeedHelpFields, "needHelp">;
export type TypeNeedHelp<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNeedHelpSkeleton, Modifiers, Locales>;

export function isTypeNeedHelp<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNeedHelp<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'needHelp'
}
