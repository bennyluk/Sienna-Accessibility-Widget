import sienna from "./sienna";

function initializeSienna() {
    let lang = document?.querySelector("[data-asw-lang]")?.getAttribute("data-asw-lang");
    let position = document?.querySelector("[data-asw-position]")?.getAttribute("data-asw-position");

    if(!lang) {
        lang = document?.querySelector('html')?.getAttribute('lang')?.replace(/[_-].*/, '');
    }
    if(!lang && typeof navigator !== "undefined" && navigator?.language) {
        lang = navigator?.language;
    }

    sienna({
        lang,
        position
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

