import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePageFields {
    title: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Text;
    block1?: EntryFieldTypes.Text;
    block2?: EntryFieldTypes.Text;
    block3?: EntryFieldTypes.Text;
    block4?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Symbol;
    internalNotes?: EntryFieldTypes.Text;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
