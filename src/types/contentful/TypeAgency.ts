import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAgencyResourceSkeleton } from "./TypeAgencyResource";

export interface TypeAgencyFields {
    title: EntryFieldTypes.Symbol;
    acronym?: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    authority?: EntryFieldTypes.Symbol<"Alberta" | "British Columbia" | "Federal" | "Manitoba" | "New Brunswick" | "Newfoundland and Labrador" | "Northwest Territories" | "Nova Scotia" | "Nunavut" | "Ontario" | "Prince Edward Island" | "Quebec" | "Saskatchewan" | "Yukon">;
    showLocalyOnly?: EntryFieldTypes.Boolean;
    content?: EntryFieldTypes.Text;
    resource?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAgencyResourceSkeleton>>;
}

export type TypeAgencySkeleton = EntrySkeletonType<TypeAgencyFields, "agency">;
export type TypeAgency<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAgencySkeleton, Modifiers, Locales>;

export function isTypeAgency<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAgency<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'agency'
}
