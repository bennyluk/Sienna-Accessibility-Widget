import { getScriptDataAttribute } from "../utils/getScriptDataAttribute";

export function getDefaultLanguage() {
    const language = 
        getScriptDataAttribute("lang") ||
        document.documentElement?.lang ||
        navigator?.language ||
        document.querySelector('meta[http-equiv="Content-Language"]')?.content

    return language?.split(/[-_]/)?.[0]?.trim() || "en";
}