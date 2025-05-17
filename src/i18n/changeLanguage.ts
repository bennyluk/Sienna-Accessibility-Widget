import {
    saveUserSettings,
    userSettings
} from "@/globals/userSettings";
import { LANGUAGES } from "./Languages";
import translateWidget from "@/views/menu/translateWidget";
import { $menu } from "@/views/menu/menu";

export function changeLanguage(newLang) {
    newLang = String(newLang || "").toLowerCase();

    if (!LANGUAGES.some(lang => lang.code === newLang)) {
        newLang = "en";
    }

    if (userSettings.lang !== newLang) {
        userSettings.lang = newLang;

        const $lang = $menu.querySelector("#asw-language");
        if ($lang) {
            $lang.value = newLang;
        }

        translateWidget();
        saveUserSettings();
    }
}