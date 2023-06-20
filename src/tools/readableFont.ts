import { injectToolCSS } from "../utils/cssGenerator";
import IToolConfig from "../types/IToolConfig";
import { TEXT_SELECTORS } from "../enum/Selectors";

export const readableFontConfig: IToolConfig = {
    id: "readable-font",
    selector: `html`,
    childrenSelector: ['', '*:not(.material-icons,.fa)', ...TEXT_SELECTORS],
    styles: {
        'font-family': 'OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif'
    },
    css: `
        @font-face {
            font-family: OpenDyslexic3;
            src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");
        }
    `
}

export default function readableFont(enable=false) {
    injectToolCSS({
        ...readableFontConfig,
        enable
    })
}