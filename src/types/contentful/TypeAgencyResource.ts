import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAgencySkeleton } from "./TypeAgency";

export interface TypeAgencyResourceFields {
    internalTitle?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    agency?: EntryFieldTypes.EntryLink<TypeAgencySkeleton>;
}

export type TypeAgencyResourceSkeleton = EntrySkeletonType<TypeAgencyResourceFields, "agencyResource">;
export type TypeAgencyResource<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAgencyResourceSkeleton, Modifiers, Locales>;

export function isTypeAgencyResource<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAgencyResource<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'agencyResource'
}
