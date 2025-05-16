import sienna from "./sienna";

function getDataAttribute(attr) {
    const key = `data-asw-${attr}`;

    const script = document.currentScript;
    if (script?.hasAttribute(key)) {
        return script.getAttribute(key);
    }
    
    return document.querySelector(`[${key}]`)?.getAttribute(key);
}

function getDefaultLanguage() {
    const language = 
        getDataAttribute("lang") ||
        document.documentElement?.lang ||
        navigator?.language ||
        document.querySelector('meta[http-equiv="Content-Language"]')?.content

    return language?.split(/[-_]/)?.[0]?.trim() || "en";
}

function initialize() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        document.removeEventListener('readystatechange', initialize);

        const options = {
            lang: getDefaultLanguage(),
            position: getDataAttribute("position"),
            offset: getDataAttribute("offset")?.split(",").map(Number),
            size: getDataAttribute("size")
        };

        sienna({
            options
        });
    }
}

// Use readystatechange for async support
document.addEventListener("readystatechange", initialize);

