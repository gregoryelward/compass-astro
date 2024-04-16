import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeIndigenousCalloutFields {
    title?: EntryFieldTypes.Symbol;
    subTitle?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Symbol;
    cta?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
}

export type TypeIndigenousCalloutSkeleton = EntrySkeletonType<TypeIndigenousCalloutFields, "indigenousCallout">;
export type TypeIndigenousCallout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeIndigenousCalloutSkeleton, Modifiers, Locales>;

export function isTypeIndigenousCallout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeIndigenousCallout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'indigenousCallout'
}
