import sienna from "./sienna";
import { getDefaultLanguage } from "./i18n/getDefaultLanguage";
import { getScriptDataAttribute } from "./utils/getScriptDataAttribute";
import observeHTMLLang from "./utils/observeHTMLLang";
import {loadLanguages} from "@/i18n/Languages";

async function initialize() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        document.removeEventListener('readystatechange', initialize);

        const options = {
            lang: getDefaultLanguage(),
            position: getScriptDataAttribute("position"),
            offset: getScriptDataAttribute("offset")?.split(",").map(Number),
            size: getScriptDataAttribute("size")
        };
        
        await loadLanguages();
        window.SiennaPlugin = sienna({
            options
        });

        if (!getScriptDataAttribute("disableObserveLang")) {
            observeHTMLLang();
        }
    }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Initialize if the script is appended to the DOM when document.readyState is completed
    initialize();
}else{
    // Use readystatechange for async support
    document.addEventListener("readystatechange", initialize);
}

