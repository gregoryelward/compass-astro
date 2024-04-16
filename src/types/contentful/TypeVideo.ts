import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeVideoFields {
    title?: EntryFieldTypes.Symbol;
    number?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    videoUrl?: EntryFieldTypes.Symbol;
    videoCta?: EntryFieldTypes.Symbol;
    transcriptUrl?: EntryFieldTypes.Symbol;
    transcriptCta?: EntryFieldTypes.Symbol;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVideoSkeleton, Modifiers, Locales>;

export function isTypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeVideo<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'video'
}
