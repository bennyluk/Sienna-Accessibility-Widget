import { injectToolCSS } from "../utils/cssGenerator";
import { ALL_SELECTOR } from "../enum/Selectors";
import IToolConfig from "../types/IToolConfig";

export const adjustFontWeightConfig: IToolConfig = {
    id: "font-weight",
    selector: `html`,
    childrenSelector: ALL_SELECTOR,
    styles: {
        'font-weight': '700'
    }
}

export default function adjustFontWeight(enable=false) {
    injectToolCSS({
        ...adjustFontWeightConfig,
        enable
    })
}