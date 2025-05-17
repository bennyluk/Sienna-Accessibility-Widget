import { changeLanguage } from "@/i18n/changeLanguage";
import { getDefaultLanguage } from "@/i18n/getDefaultLanguage";

export default function observeHTMLLang() {
    const htmlEl = document.documentElement;

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "lang") {
                changeLanguage(getDefaultLanguage());
            }
        }
    });

    observer.observe(htmlEl, { attributes: true });
}