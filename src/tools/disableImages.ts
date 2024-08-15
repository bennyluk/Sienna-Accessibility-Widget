import { injectToolCSS } from "../utils/cssGenerator";
import { MEDIA_SELECTORS } from "../enum/Selectors";
import IToolConfig from "../types/IToolConfig";

export const disableImagesConfig: IToolConfig = {
    id: "disable-images",
    selector: `*:not('.asw-container')`,
    childrenSelector: MEDIA_SELECTORS,
    styles: {
        'visibility': 'hidden',
        'pointer-events': 'none',
        'opacity': '0'
    }
}

export default function disableImages(enable=false) {
    injectToolCSS({
        ...disableImagesConfig,
        enable
    });
    document.querySelectorAll('*, *:after, *:before').forEach((el: HTMLElement) => {
        if (enable) {
            if (el.style.backgroundImage) {
                el.setAttribute('data-asw-background-image', el.style.backgroundImage);
                el.style.backgroundImage = 'none';
            }
            return;
        }
        if (el.getAttribute('data-asw-background-image')) {
            el.style.backgroundImage = el.getAttribute('data-asw-background-image');
        }
    });
}
