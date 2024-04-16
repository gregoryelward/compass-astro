import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Text;
    block1?: EntryFieldTypes.Text;
    block2?: EntryFieldTypes.Text;
    block3?: EntryFieldTypes.Text;
    partnerLead?: EntryFieldTypes.Text;
    partners?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    reviewerLead?: EntryFieldTypes.Text;
    reviewersLogos?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    block4?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Symbol;
}

export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, "about">;
export type TypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutSkeleton, Modifiers, Locales>;

export function isTypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAbout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'about'
}
