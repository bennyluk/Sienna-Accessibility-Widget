import { saveUserSettings, userSettings } from "@/globals/userSettings";
import runAccessibility from "./runAccessibility";

export default function reset() {
    document?.querySelectorAll(".asw-selected")?.forEach(el => el?.classList?.remove("asw-selected"))

    userSettings.states = {};
    runAccessibility();

    saveUserSettings();
}