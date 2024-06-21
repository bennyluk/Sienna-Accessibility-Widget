import { getSettings, saveState } from "../../storage";
import adjustFontSize from "../../tools/adjustFontSize";
import renderFilter from "./renderFilter";
import renderTools from "./renderTools";

export interface ISettingsStates {
    fontSize?: number;
    contrast?: string;
    [key: string]: any;
}

export default function runAccessibility(opts?: ISettingsStates) {
    let { states } = getSettings();

    if (opts) {
        Object.assign(states, opts);
        saveState(states);
    }

    adjustFontSize(states?.["fontSize"] || 1);
    renderTools();
    renderFilter();
}
