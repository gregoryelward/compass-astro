import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHowToFields {
    title: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Text;
    block1?: EntryFieldTypes.Text;
    block2?: EntryFieldTypes.Text;
    block3?: EntryFieldTypes.Text;
    block4?: EntryFieldTypes.Text;
    block5?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Symbol;
    internalNotes?: EntryFieldTypes.Text;
}

export type TypeHowToSkeleton = EntrySkeletonType<TypeHowToFields, "howTo">;
export type TypeHowTo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHowToSkeleton, Modifiers, Locales>;

export function isTypeHowTo<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHowTo<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'howTo'
}
