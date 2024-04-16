import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExploreMoreBenefitsCalloutFields {
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    url?: EntryFieldTypes.Symbol;
    cta?: EntryFieldTypes.Symbol;
}

export type TypeExploreMoreBenefitsCalloutSkeleton = EntrySkeletonType<TypeExploreMoreBenefitsCalloutFields, "exploreMoreBenefitsCallout">;
export type TypeExploreMoreBenefitsCallout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExploreMoreBenefitsCalloutSkeleton, Modifiers, Locales>;

export function isTypeExploreMoreBenefitsCallout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeExploreMoreBenefitsCallout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'exploreMoreBenefitsCallout'
}
