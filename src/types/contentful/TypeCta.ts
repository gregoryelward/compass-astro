import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCtaFields {
    internalName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
}

export type TypeCtaSkeleton = EntrySkeletonType<TypeCtaFields, "cta">;
export type TypeCta<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCtaSkeleton, Modifiers, Locales>;

export function isTypeCta<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCta<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'cta'
}
