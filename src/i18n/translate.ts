import { LANGUAGE_DICTIONARY } from "./Languages";
import { userSettings } from "../globals/userSettings";

export function t(label: string): string {
    const dictionary = LANGUAGE_DICTIONARY[userSettings.lang] ?? LANGUAGE_DICTIONARY["en"];
    return dictionary[label] ?? label;
}