// @ts-ignore
import template from "./menu.html";

import FilterButtons from "./FilterButtons";
import ContentButtons from "./ContentButtons";
import ToolButtons from "../../enum/TOOL_PRESETS";

import renderButtons from "./renderButtons";
import toggle from "../../utils/toggle";
import adjustFontSize from "../../tools/adjustFontSize";
import renderTools from "./renderTools";
import reset from "./reset";
import translateMenu from "./translateMenu";

import { ILanguage, LANGUAGES } from "../../enum/Languages";

import css from "./menu.css";
import enableContrast from "@/tools/enableContrast";
import { pluginConfig } from "@/globals/pluginConfig";
import { userSettings, saveUserState, setUserStateSettings, saveUserSettings } from "@/globals/userSettings";

export let $menu: HTMLElement;

export function closeMenu() {
    // close it
}

export function renderMenu() {
    const $container: HTMLElement = document.createElement("div");
    $container.innerHTML = `<style>${css}</style>` + template;

    const $menu = $container.querySelector(".asw-menu");
    if (pluginConfig?.position?.includes("right")) {
        $menu.style.right = '0px';
        $menu.style.left = 'auto';
    }

    $menu.querySelector(".content").innerHTML = renderButtons(ContentButtons);
    $menu.querySelector(".tools").innerHTML = renderButtons(ToolButtons, 'asw-tools');
    $menu.querySelector(".contrast").innerHTML = renderButtons(FilterButtons, 'asw-filter');

    // *** States UI Rendering ***
    const states = userSettings?.states;

    const fontSize = Number(states?.fontSize) || 1;
    if (fontSize != 1) {
        $menu.querySelector(".asw-amount").innerHTML = `${fontSize * 100}%`;
    }

    if (states) {
        const buttons = Array.from($menu.querySelectorAll('.asw-btn'));

        Object.entries(states).forEach(([key, value]) => {
            if (value && key !== "fontSize") {
                const selector = key === "contrast" ? states[key] : key;
                const btn = buttons.find(b => b.dataset.key === selector);
                if (btn) btn.classList.add("asw-selected");
            }
        });
    }

    // *** Translations ***
    if (!LANGUAGES.some(lang => lang.code === userSettings.lang)) {
        userSettings.lang = "en";
    }

    const $lang = $menu.querySelector("#asw-language");
    const langOptions = LANGUAGES.map((lang: ILanguage) => `<option value="${lang.code}">${lang.label}</option>`).join('');
    $lang.innerHTML = langOptions;
    $lang.value = userSettings.lang;
    $lang.addEventListener("change", (event) => {
        userSettings.lang = $lang.value;

        translateMenu($container);
        saveUserSettings();
    });
    translateMenu($container);

    // *** Utils ***
    $container.querySelectorAll('.asw-menu-close, .asw-overlay').forEach((el) =>
        el.addEventListener('click', () => toggle($container, false))
    );

    $container.querySelectorAll('.asw-menu-reset').forEach((el) =>
        el.addEventListener('click', reset)
    );

    // *** Controls ***
    $menu.querySelectorAll(".asw-plus, .asw-minus").forEach((el: HTMLElement) => {
        el.addEventListener("click", () => {
            const difference = 0.1;

            let fontSize = userSettings?.states?.fontSize || 1;
            if (el.classList.contains('asw-minus')) {
                fontSize -= difference;
            } else {
                fontSize += difference;
            }

            fontSize = Math.max(fontSize, 0.1);
            fontSize = Math.min(fontSize, 2);
            fontSize = Number(fontSize.toFixed(2));

            document.querySelector(".asw-amount").textContent = `${(fontSize * 100).toFixed(0)}%`;

            adjustFontSize(fontSize);
            userSettings.states.fontSize = fontSize;

            saveUserSettings();
        });
    });

    $menu.querySelectorAll(".asw-btn").forEach((el: HTMLElement) => {
        el.addEventListener("click", () => {
            const key = el.dataset.key;
            const isSelected = !el.classList.contains("asw-selected");
            
            // --- Contrast ---
            if (el.classList.contains("asw-filter")) {
                $menu.querySelectorAll(".asw-filter").forEach((el: HTMLElement) =>
                    el.classList.remove("asw-selected")
                );

                if (isSelected) {
                    el.classList.add("asw-selected");
                }

                userSettings.states.contrast = isSelected ? key : false;
                enableContrast(userSettings.states.contrast);

                return;
            }
            
            el.classList.toggle("asw-selected", isSelected);
            userSettings.states[key] = isSelected;
            renderTools();

            saveUserSettings();
        });
    });

    document.body.appendChild($container);

    return $container;
}