import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFooterProsperAboutFields {
    content?: EntryFieldTypes.Text;
    footnote?: EntryFieldTypes.Text;
}

export type TypeFooterProsperAboutSkeleton = EntrySkeletonType<TypeFooterProsperAboutFields, "footerProsperAbout">;
export type TypeFooterProsperAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterProsperAboutSkeleton, Modifiers, Locales>;

export function isTypeFooterProsperAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFooterProsperAbout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'footerProsperAbout'
}
