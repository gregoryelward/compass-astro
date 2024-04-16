import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBenefitApplyWarningFields {
    title: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    cta?: EntryFieldTypes.Symbol;
    ctaurl?: EntryFieldTypes.Symbol;
}

export type TypeBenefitApplyWarningSkeleton = EntrySkeletonType<TypeBenefitApplyWarningFields, "benefitApplyWarning">;
export type TypeBenefitApplyWarning<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBenefitApplyWarningSkeleton, Modifiers, Locales>;

export function isTypeBenefitApplyWarning<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBenefitApplyWarning<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'benefitApplyWarning'
}
