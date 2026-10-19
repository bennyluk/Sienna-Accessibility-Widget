import {
    ICON_SELECTOR
} from '@/enum/Selectors';

const FONT_SIZE_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text';
const ICON_SELECTOR_SET = new Set(ICON_SELECTOR);

export default function adjustFontSize(multiply:number = 1) {
    // At 100% the page keeps its own font sizes: undo the sizes set before and touch nothing else.
    // Writing the computed sizes as inline styles would stop responsive font sizes (media queries,
    // vw units, clamp()) from following the viewport, e.g. when a tablet is rotated.
    if (multiply === 1) {
        document
            .querySelectorAll<HTMLElement>('[data-asw-org-font-size]')
            .forEach((el) => {
                el.style.fontSize = el.dataset.aswOrgInlineFontSize || '';
                delete el.dataset.aswOrgFontSize;
                delete el.dataset.aswOrgInlineFontSize;
            });

        return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(FONT_SIZE_SELECTOR))
        // Skip elements that contain any class in ICON_SELECTOR_SET
        .filter((el) => !Array.from(el.classList).some(cls => ICON_SELECTOR_SET.has(cls)));

    // Store the original font sizes of all elements before changing any of them: nested elements
    // inherit the size of their parent and would otherwise be scaled twice
    elements.forEach((el) => {
        if (!el.dataset.aswOrgFontSize) {
            el.dataset.aswOrgFontSize = String(parseFloat(window.getComputedStyle(el).fontSize));

            // A font size of the element's own style attribute comes back at 100%
            if (el.style.fontSize) {
                el.dataset.aswOrgInlineFontSize = el.style.fontSize;
            }
        }
    });

    // Calculate and apply new font size
    elements.forEach((el) => {
        const newFontSize = Number(el.dataset.aswOrgFontSize) * multiply;
        el.style.fontSize = `${newFontSize}px`;
    });
}