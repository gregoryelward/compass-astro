import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHowToStep3Fields {
    title?: EntryFieldTypes.Symbol;
    number?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    cta?: EntryFieldTypes.Symbol;
    ctaUrl?: EntryFieldTypes.Symbol;
}

export type TypeHowToStep3Skeleton = EntrySkeletonType<TypeHowToStep3Fields, "howToStep3">;
export type TypeHowToStep3<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHowToStep3Skeleton, Modifiers, Locales>;

export function isTypeHowToStep3<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHowToStep3<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'howToStep3'
}
