import { saveSettings } from "../../storage";
import runAccessibility from "./runAccessibility";

export default function reset() {
    saveSettings({ states: {} });

    runAccessibility();
}