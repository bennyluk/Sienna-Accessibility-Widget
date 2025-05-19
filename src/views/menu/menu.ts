// @ts-ignore
import template from "./menu.html";

import FilterButtons from "./FilterButtons";
import ContentButtons from "./ContentButtons";
import ToolButtons from "../../enum/TOOL_PRESETS";

import renderButtons from "./renderButtons";
import toggle from "../../utils/toggle";
import adjustFontSize from "../../tools/adjustFontSize";
import renderTools from "./renderTools";
import { getSettings, getState, saveSettings, saveState } from "../../storage";
import reset from "./reset";
import renderFilter from "./renderFilter";
import translateMenu from "./translateMenu";
import { FONT_PRESETS, applyFont, populateFontDropdown, updateFontDropdownTranslations } from "../../tools/fontSelector";

import { ILanguage, LANGUAGES } from "../../enum/Languages";

import css from "./menu.css";

export interface IRenderMenuArgs {
    container: HTMLElement,
    position?: string,
    lang?: string
}

export function renderMenu({
    container,
    position,
    ...options
}: IRenderMenuArgs) {
    const $container: HTMLElement = document.createElement("div");
    $container.innerHTML = `<style>${css}</style>` + template;
    
    const $menu: HTMLElement = $container.querySelector(".asw-menu");

    if(position?.includes("right")) {
        $menu.style.right = '0px';
        $menu.style.left = 'auto';
    }

    $menu.querySelector(".content").innerHTML = renderButtons(ContentButtons);
    $menu.querySelector(".tools").innerHTML = renderButtons(ToolButtons, 'asw-tools');
    $menu.querySelector(".contrast").innerHTML = renderButtons(FilterButtons, 'asw-filter');

    $container.querySelectorAll('.asw-menu-close, .asw-overlay').forEach((el) =>
        el.addEventListener('click', () => toggle($container, false))
    );

    $menu.querySelectorAll(".asw-adjust-font div[role='button']").forEach((el: HTMLElement) => {
        el.addEventListener("click", () => {
            const margin = 0.1;

            let fontSize = getState("fontSize") ?? 1;
            if(el.classList.contains('asw-minus')) {
                fontSize -= margin;
            } else {
                fontSize += margin;
            }

            fontSize = Math.max(fontSize, 0.1);
            fontSize = Math.min(fontSize, 2);
            fontSize = Number(fontSize.toFixed(2));
            
            adjustFontSize(fontSize || 1);

            saveState({ fontSize });
        });
    });

    $menu.querySelectorAll(".asw-btn").forEach((el: HTMLElement) => {
        el.addEventListener("click", () => {
            let key = el.dataset.key;

            let isSelected = !el.classList.contains("asw-selected");

            if(el.classList.contains('asw-filter')) {
                $menu.querySelectorAll('.asw-filter').forEach((el: HTMLElement) => {
                    el.classList.remove('asw-selected');
                });

                saveState({
                    contrast: isSelected ? key : false
                });

                if(isSelected) {
                    el.classList.add('asw-selected');
                }

                renderFilter();
            } else {
                el.classList.toggle('asw-selected', isSelected);

                saveState({
                    [key]: isSelected
                });

                renderTools();
            }
        });
    });

    $container.querySelectorAll('.asw-menu-reset').forEach((el) =>
        el.addEventListener('click', reset)
    );

    
    let settings = getSettings();

    let fontSize = Number(settings?.states?.fontSize) || 1;

    if(fontSize != 1) {
        $menu.querySelector(".asw-amount").innerHTML = `${ fontSize * 100 }%`;
    }

    let $lang: HTMLSelectElement = $menu.querySelector("#asw-language");
    $lang.innerHTML = LANGUAGES.map((lang: ILanguage) => `<option value="${lang.code}">${lang.label}</option>`).join('');

    if(settings.lang !== options.lang) {
        saveSettings({
            lang: options.lang
        });
    }
    
    $lang.value = options?.lang || "en";

    $lang?.addEventListener("change", () => {
        saveSettings({
            lang: $lang.value
        });

        updateFontDropdownTranslations($fontSelect);

        translateMenu(container);
    });

    // Handle font selection
    const $fontSelect = $menu.querySelector("#font-selection") as HTMLSelectElement;
    populateFontDropdown($fontSelect);

    // Set initial value from stored settings
    const currentFont = settings.states?.fontFamily || 'default';
    $fontSelect.value = currentFont;

    // Apply initial font
    applyFont(currentFont);

    // Add event listener for font changes
    $fontSelect.addEventListener('change', () => {
        const fontId = $fontSelect.value;

        // Save setting
        saveState({
            fontFamily: fontId
        });

        // Apply font
        applyFont(fontId);
    });

    translateMenu($menu);
    
    if(settings.states) {
        for(let key in settings.states) {
            if(settings.states[key] && key !== "fontSize") {
                let selector = key === "contrast" ? settings.states[key] : key;
                $menu.querySelector(`.asw-btn[data-key="${ selector }"]`)?.classList?.add("asw-selected")
            }
        }
    }

    container.appendChild($container);

    return $container;
}