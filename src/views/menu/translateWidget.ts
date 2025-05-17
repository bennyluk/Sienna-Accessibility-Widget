import { t } from "../../i18n/translate";
import { $widget } from "@/views/widget/widget";

function getTranslatedLabel(el: Element, defaultValue: string): string {
    const key = el.getAttribute("data-translate") || defaultValue;

    if (!el.hasAttribute("data-translate") && defaultValue) {
        el.setAttribute("data-translate", key);
    }

    return t(key);
}

export default function translateWidget(): void {
    $widget.querySelectorAll(".asw-card-title, .asw-translate").forEach((el) => {
        const text = el.textContent?.trim() || "";
        el.textContent = getTranslatedLabel(el, text);
    });

    $widget.querySelectorAll<HTMLElement>("[title]").forEach((el) => {
        const title = el.getAttribute("title") || "";
        el.setAttribute("title", getTranslatedLabel(el, title));
    });
}