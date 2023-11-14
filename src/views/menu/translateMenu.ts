import { t } from "../../i18n";

function getTranslatedLabel(el, defaultValue) {
    let label = el.getAttribute("data-translate");

    if(!label && defaultValue) {
        label = defaultValue;
        el.setAttribute("data-translate", label);
    }

    return t(label);
}

export default function translateMenu(menu) {
    menu.querySelectorAll(".asw-card-title, .asw-translate").forEach((el: HTMLDivElement) => {
        el.innerText = getTranslatedLabel(el, String(el.innerText || "").trim());
    })

    menu.querySelectorAll("[title]").forEach(el => {
        el.setAttribute("title", getTranslatedLabel(el, el.getAttribute("title")))
    });
}