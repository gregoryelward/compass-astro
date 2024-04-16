import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBenefitApplyWarningSkeleton } from "./TypeBenefitApplyWarning";

export interface TypeHomePageFields {
    title?: EntryFieldTypes.Symbol;
    introduction?: EntryFieldTypes.Text;
    actionOptions?: EntryFieldTypes.Text;
    instruction?: EntryFieldTypes.Text;
    metaDescription?: EntryFieldTypes.Symbol;
    applyWarning?: EntryFieldTypes.EntryLink<TypeBenefitApplyWarningSkeleton>;
    resources?: EntryFieldTypes.Text;
}

export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, "homePage">;
export type TypeHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;

export function isTypeHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHomePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'homePage'
}
