import { injectToolCSS } from "../utils/cssGenerator";
import { ALL_SELECTOR } from "../enum/Selectors";
import IToolConfig from "../types/IToolConfig";

export const adjustLetterSpacingConfig: IToolConfig = {
    id: "letter-spacing",
    selector: `html`,
    childrenSelector: ALL_SELECTOR,
    styles: {
        'letter-spacing': '2px'
    }
}

export default function adjustLetterSpacing(enable=false) {
    injectToolCSS({
        ...adjustLetterSpacingConfig,
        enable
    })
}