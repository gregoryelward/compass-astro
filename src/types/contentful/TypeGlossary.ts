import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGlossaryFields {
    term: EntryFieldTypes.Symbol;
    definition?: EntryFieldTypes.Text;
}

export type TypeGlossarySkeleton = EntrySkeletonType<TypeGlossaryFields, "glossary">;
export type TypeGlossary<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGlossarySkeleton, Modifiers, Locales>;

export function isTypeGlossary<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeGlossary<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'glossary'
}
