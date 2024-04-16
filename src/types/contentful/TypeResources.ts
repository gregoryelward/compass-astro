import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeResourcesFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    featured?: EntryFieldTypes.Boolean;
    lead?: EntryFieldTypes.Symbol;
    content1?: EntryFieldTypes.Text;
    showLocalyOnly?: EntryFieldTypes.Boolean;
    authority?: EntryFieldTypes.Symbol<"Alberta" | "British Columbia" | "Manitoba" | "New Brunswick" | "Newfoundland and Labrador" | "Northwest Territories" | "Nova Scotia" | "Nunavut" | "Ontario" | "Prince Edward Island" | "Quebec" | "Saskatchewan" | "Yukon">;
    sample?: EntryFieldTypes.Text;
    cardImage?: EntryFieldTypes.AssetLink;
    ctaUrl?: EntryFieldTypes.Symbol;
    ctaImage?: EntryFieldTypes.AssetLink;
    ctaHeader?: EntryFieldTypes.Symbol;
    ctaLinkText?: EntryFieldTypes.Symbol;
}

export type TypeResourcesSkeleton = EntrySkeletonType<TypeResourcesFields, "resources">;
export type TypeResources<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeResourcesSkeleton, Modifiers, Locales>;

export function isTypeResources<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeResources<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'resources'
}
