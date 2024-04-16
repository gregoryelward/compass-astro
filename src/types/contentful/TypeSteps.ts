import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeStepsFields {
    titleInternal?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    introduction?: EntryFieldTypes.Text;
    customStep?: EntryFieldTypes.Text;
    order?: EntryFieldTypes.Integer;
    content?: EntryFieldTypes.Text;
    qAndA?: EntryFieldTypes.Text;
    aside?: EntryFieldTypes.Text;
    noAnswer?: EntryFieldTypes.Text;
    notSure?: EntryFieldTypes.Text;
}

export type TypeStepsSkeleton = EntrySkeletonType<TypeStepsFields, "steps">;
export type TypeSteps<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStepsSkeleton, Modifiers, Locales>;

export function isTypeSteps<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSteps<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'steps'
}
