import { saveSettings } from "../../storage";
import runAccessibility from "./runAccessibility";

export default function reset() {
    saveSettings({ states: {} });

    runAccessibility();

    document?.querySelectorAll(".asw-selected")?.forEach(el => el?.classList?.remove("asw-selected"))
}