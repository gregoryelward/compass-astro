import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBenefitWarningFields {
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
}

export type TypeBenefitWarningSkeleton = EntrySkeletonType<TypeBenefitWarningFields, "benefitWarning">;
export type TypeBenefitWarning<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBenefitWarningSkeleton, Modifiers, Locales>;

export function isTypeBenefitWarning<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBenefitWarning<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'benefitWarning'
}
