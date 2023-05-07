import { injectToolCSS } from "../utils/cssGenerator";
import IToolConfig from "../types/IToolConfig";

export const stopAnimationsConfig: IToolConfig = {
    id: "stop-animations",
    selector: `html`,
    childrenSelector: ['*'],
    styles: {
        'transition': 'none',
        'animation-fill-mode': 'forwards',
        'animation-iteration-count': '1',
        'animation-duration': '.01s'
    }
}

export default function stopAnimations(enable=false) {
    injectToolCSS({
        ...stopAnimationsConfig,
        enable
    })
}