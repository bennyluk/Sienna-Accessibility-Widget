import sienna from "./sienna";
import { getDefaultLanguage } from "./i18n/getDefaultLanguage";
import { getScriptDataAttribute } from "./utils/getScriptDataAttribute";
import observeHTMLLang from "./utils/observeHTMLLang";

function initialize() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        document.removeEventListener('readystatechange', initialize);

        const options = {
            lang: getDefaultLanguage(),
            position: getScriptDataAttribute("position"),
            offset: getScriptDataAttribute("offset")?.split(",").map(Number),
            size: getScriptDataAttribute("size")
        };

        window.SiennaPlugin = sienna({
            options
        });

        if (!getScriptDataAttribute("disableObserveLang")) {
            observeHTMLLang();
        }
    }
}

// Use readystatechange for async support
document.addEventListener("readystatechange", initialize);

