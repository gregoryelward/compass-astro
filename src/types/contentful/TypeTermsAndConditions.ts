import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTermsAndConditionsFields {
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    introduction?: EntryFieldTypes.Text;
    agreeQuestion?: EntryFieldTypes.Symbol;
}

export type TypeTermsAndConditionsSkeleton = EntrySkeletonType<TypeTermsAndConditionsFields, "termsAndConditions">;
export type TypeTermsAndConditions<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTermsAndConditionsSkeleton, Modifiers, Locales>;

export function isTypeTermsAndConditions<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTermsAndConditions<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'termsAndConditions'
}
