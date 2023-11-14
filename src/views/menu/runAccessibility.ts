import { getSettings } from "../../storage"
import adjustFontSize from "../../tools/adjustFontSize";
import renderFilter from "./renderFilter";
import renderTools from "./renderTools";

export default function runAccessibility() {
    let { states } = getSettings();

    adjustFontSize(states?.['fontSize'] || 1);
    renderTools();
    renderFilter();
}