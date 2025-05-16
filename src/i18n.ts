import { LANGUAGE_DICTIONARY } from "./enum/Languages";
import { userSettings } from "./globals/userSettings";

export function t(label: string): string {
    const lang = userSettings.lang ?? "en";
    const dictionary = LANGUAGE_DICTIONARY[lang] ?? LANGUAGE_DICTIONARY["en"];
    return dictionary[label] ?? label;
}