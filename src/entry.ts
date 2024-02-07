import sienna from "./sienna";

function getDataAttribute(attr) {
    attr = `data-asw-${ attr }`;
    return document?.querySelector(`[${ attr }]`)?.getAttribute(attr)
}

function initializeSienna() {
    let lang: string = getDataAttribute("lang");
    let position: string = getDataAttribute("position")
    let offset: string | number[] = getDataAttribute("offset");

    if(!lang) {
        lang = document?.querySelector('html')?.getAttribute('lang')?.replace(/[_-].*/, '');
    }
    if(!lang && typeof navigator !== "undefined" && navigator?.language) {
        lang = navigator?.language;
    }

    if(offset) {
        offset = offset.split(",").map(value => parseInt(value));
    }

    sienna({
        lang,
        position,
        offset
    });
}

function checkReadyState() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // Document is ready, call the initialization function
        initializeSienna();

        // Remove the event listener to ensure it's only executed once
        document.removeEventListener('readystatechange', checkReadyState);
    }
}

// Use readystatechange for async support
document.addEventListener("readystatechange", checkReadyState);

