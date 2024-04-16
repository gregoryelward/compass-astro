import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHowToStep2Fields {
    title?: EntryFieldTypes.Symbol;
    number?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    expectTitle?: EntryFieldTypes.Symbol;
    expectContent?: EntryFieldTypes.Text;
}

export type TypeHowToStep2Skeleton = EntrySkeletonType<TypeHowToStep2Fields, "howToStep2">;
export type TypeHowToStep2<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHowToStep2Skeleton, Modifiers, Locales>;

export function isTypeHowToStep2<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHowToStep2<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'howToStep2'
}
