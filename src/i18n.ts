import { getSettings } from "./storage";
import { LANGUAGE_DICTIONARY } from "./enum/Languages";

export function t(label: string): string {
    const { lang } = getSettings();

    const dictionary = LANGUAGE_DICTIONARY[lang] || LANGUAGE_DICTIONARY["en"];

    return dictionary[label] || label;
}