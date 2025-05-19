import { saveSettings } from "../../storage";
import runAccessibility from "./runAccessibility";
import {resetFont} from "../../tools/fontSelector";

export default function reset() {
    saveSettings({ states: {} });

    resetFont();

    runAccessibility();

    document?.querySelectorAll(".asw-selected")?.forEach(el => el?.classList?.remove("asw-selected"))
}