import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAgencyResourceSkeleton } from "./TypeAgencyResource";
import type { TypeCtaSkeleton } from "./TypeCta";

export interface TypeBenefitPageFields {
    internalTitle?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    lead?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Text;
    bodyTitle?: EntryFieldTypes.Symbol;
    content1title?: EntryFieldTypes.Symbol;
    content1?: EntryFieldTypes.Text;
    content2Title?: EntryFieldTypes.Symbol;
    content2?: EntryFieldTypes.Text;
    content3Title?: EntryFieldTypes.Symbol;
    content3?: EntryFieldTypes.Text;
    content4Title?: EntryFieldTypes.Symbol;
    content4?: EntryFieldTypes.Text;
    content5Title?: EntryFieldTypes.Symbol;
    content5?: EntryFieldTypes.Text;
    mainCta?: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
    resources?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAgencyResourceSkeleton>>;
    showWarning?: EntryFieldTypes.Boolean;
}

export type TypeBenefitPageSkeleton = EntrySkeletonType<TypeBenefitPageFields, "benefitPage">;
export type TypeBenefitPage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBenefitPageSkeleton, Modifiers, Locales>;

export function isTypeBenefitPage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBenefitPage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'benefitPage'
}
