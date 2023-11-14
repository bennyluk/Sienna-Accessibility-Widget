import sienna from "./sienna";

document?.addEventListener("DOMContentLoaded", () => {
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
});