import { injectToolCSS } from "../utils/cssGenerator";
import { ALL_SELECTOR } from "../enum/Selectors";
import IToolConfig from "../types/IToolConfig";

export const adjustLineHeightConfig: IToolConfig = {
    id: "line-height",
    selector: `html`,
    childrenSelector: ALL_SELECTOR,
    styles: {
        'line-height': '3'
    }
}

export default function adjustLineHeight(enable=false) {
    injectToolCSS({
        ...adjustLineHeightConfig,
        enable
    })
}