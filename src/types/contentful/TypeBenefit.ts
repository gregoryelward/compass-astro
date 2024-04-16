import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAgencySkeleton } from "./TypeAgency";
import type { TypeAgencyResourceSkeleton } from "./TypeAgencyResource";
import type { TypeBenefitApplyWarningSkeleton } from "./TypeBenefitApplyWarning";
import type { TypeBenefitPageSkeleton } from "./TypeBenefitPage";
import type { TypeResourcesSkeleton } from "./TypeResources";
import type { TypeStepsSkeleton } from "./TypeSteps";

export interface TypeBenefitFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    metaDescription?: EntryFieldTypes.Symbol;
    acronym?: EntryFieldTypes.Symbol;
    authority: EntryFieldTypes.Symbol<"Alberta" | "British Columbia" | "Federal" | "Manitoba" | "New Brunswick" | "Newfoundland and Labrador" | "Northwest Territories" | "Nova Scotia" | "Nunavut" | "Ontario" | "Prince Edward Island" | "Quebec" | "Saskatchewan" | "Yukon">;
    keyBenefit?: EntryFieldTypes.Boolean;
    publishedDate?: EntryFieldTypes.Date;
    order?: EntryFieldTypes.Integer;
    dollarAmount?: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Text;
    subLead?: EntryFieldTypes.Text;
    benefitPages?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBenefitPageSkeleton>>;
    steps?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeStepsSkeleton>>;
    resources?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeResourcesSkeleton>>;
    helpAgency?: EntryFieldTypes.Text;
    agency?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAgencySkeleton>>;
    agencyResource?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAgencyResourceSkeleton>>;
    applyWarning?: EntryFieldTypes.EntryLink<TypeBenefitApplyWarningSkeleton>;
    hideForProvinces?: EntryFieldTypes.Symbol;
}

export type TypeBenefitSkeleton = EntrySkeletonType<TypeBenefitFields, "benefit">;
export type TypeBenefit<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBenefitSkeleton, Modifiers, Locales>;

export function isTypeBenefit<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBenefit<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'benefit'
}
