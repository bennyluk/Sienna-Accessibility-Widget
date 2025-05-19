import { injectToolCSS } from "../utils/cssGenerator";
import IToolConfig from "../types/IToolConfig";
import { getSettings } from "../storage";
import { LANGUAGE_DICTIONARY } from "../enum/Languages";

const fontConfigs = {
    dyslexic: {
        id: "font-dyslexic",
        css: `@font-face {
      font-family: OpenDyslexic;
      src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"),
           url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");
    }`
    },
    lexend: {
        id: "font-lexend",
        css: `@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400&display=swap');`
    },
    "vision-loss": {
        id: "font-vision-loss",
        css: `@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400&display=swap');`
    },
    "comic-sans": {
        id: "font-comic-sans",
        css: `@import url('https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap');`
    },
    monospace: {
        id: "font-monospace",
        css: `@import url('https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap');`
    },
    serif: {
        id: "font-serif",
        css: `@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');`
    }
};

export const FONT_PRESETS = [
    { id: 'default', label: 'Default', fontFamily: '' },
    { id: 'dyslexic', label: 'Dyslexia Friendly', fontFamily: 'OpenDyslexic, "Comic Sans MS", sans-serif' },
    { id: 'vision-loss', label: 'Vision Loss Friendly', fontFamily: '"Atkinson Hyperlegible Next", sans-serif' },

    { id: 'comic-sans', label: 'Comic Sans', fontFamily: '"Comic Sans MS", "Comic Relief", "Comic Neue", sans-serif' },
    { id: 'lexend', label: 'Lexend', fontFamily: 'Lexend, sans-serif' },

    { id: 'serif', label: 'Serif', fontFamily: '"Libre Baskerville", Newsreader, "IBM Plex Serif", "Noto Serif", "Times New Roman", Times, serif' },
    { id: 'monospace', label: 'Monospace', fontFamily: '"Cascadia Code", "IBM Plex Mono", Consolas, "Lucida Console", "Courier New", Monaco, monospace' },
    { id: 'system', label: 'System UI', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, system-ui, sans-serif' }
];

function translate(key: string): string {
    const settings = getSettings();
    const lang = settings.lang || "en";

    // Access the language dictionary correctly
    const dictionary = LANGUAGE_DICTIONARY[lang];

    // Return the translation if it exists, otherwise return the original key
    return dictionary?.[key] || key;
}

// Track the current loaded font
let currentLoadedFontId: string | null = null;

export function applyFont(fontId: string) {
    const fontPreset = FONT_PRESETS.find(font => font.id === fontId);

    // Remove previous font CSS if any
    if (currentLoadedFontId && currentLoadedFontId !== fontId) {
        const prevConfig = fontConfigs[currentLoadedFontId];
        if (prevConfig) {
            injectToolCSS({
                ...prevConfig,
                enable: false
            });
        }
    }

    // Load the new font CSS if needed
    if (fontId !== 'default' && fontConfigs[fontId]) {
        injectToolCSS({
            ...fontConfigs[fontId],
            enable: true
        });
        currentLoadedFontId = fontId;
    } else if (fontId === 'default') {
        currentLoadedFontId = null;
    }

    // Apply the font style
    if (fontId === 'default' || !fontPreset) {
        document.documentElement.style.removeProperty('font-family');
    } else {
        document.documentElement.style.fontFamily = fontPreset.fontFamily;
    }
}

export function populateFontDropdown(dropdown: HTMLSelectElement) {
    dropdown.innerHTML = FONT_PRESETS.map(font =>
        `<option value="${font.id}">${translate(font.label)}</option>`
    ).join('');
}

export function updateFontDropdownTranslations(dropdown: HTMLSelectElement) {
    if (!dropdown) return;

    // Keep the currently selected value
    const currentValue = dropdown.value;

    // Re-populate with new translations
    populateFontDropdown(dropdown);

    // Restore selection
    dropdown.value = currentValue;
}

export function resetFont() {
    // Set to default font
    applyFont('default');

    // Reset the font selection dropdown
    const $fontSelect = document.querySelector("#font-selection") as HTMLSelectElement;
    if ($fontSelect) {
        $fontSelect.value = 'default';
    }
}