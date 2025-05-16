import { t } from "../../i18n";

function getTranslatedLabel(el: Element, defaultValue: string): string {
    const key = el.getAttribute("data-translate") || defaultValue;

    if (!el.hasAttribute("data-translate") && defaultValue) {
        el.setAttribute("data-translate", key);
    }

    return t(key);
}

export default function translateMenu(element: HTMLElement): void {
    element.querySelectorAll(".asw-card-title, .asw-translate").forEach((el) => {
        const text = el.textContent?.trim() || "";
        el.textContent = getTranslatedLabel(el, text);
    });

    element.querySelectorAll<HTMLElement>("[title]").forEach((el) => {
        const title = el.getAttribute("title") || "";
        el.setAttribute("title", getTranslatedLabel(el, title));
    });
}