import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeStartHelpFields {
    title?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Symbol;
    cta1Action?: EntryFieldTypes.Symbol;
    cta1Url?: EntryFieldTypes.Symbol;
    cta1UrlText?: EntryFieldTypes.Symbol;
    cta2Action?: EntryFieldTypes.Symbol;
    cta2Url?: EntryFieldTypes.Symbol;
    cta2UrlText?: EntryFieldTypes.Symbol;
    cta3Action?: EntryFieldTypes.Symbol;
    cta3Url?: EntryFieldTypes.Symbol;
    cta3UrlText?: EntryFieldTypes.Symbol;
}

export type TypeStartHelpSkeleton = EntrySkeletonType<TypeStartHelpFields, "startHelp">;
export type TypeStartHelp<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStartHelpSkeleton, Modifiers, Locales>;

export function isTypeStartHelp<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeStartHelp<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'startHelp'
}
