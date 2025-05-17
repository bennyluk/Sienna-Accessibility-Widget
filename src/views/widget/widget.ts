// @ts-ignore
import template from "./widget.html";
import css from "./widget.css";
import { openMenu } from "../menu/menu";
import translateWidget from "../menu/translateWidget";

import {
    pluginConfig
} from "@/globals/pluginConfig";

export let $widget: HTMLElement;

export function renderWidget() {
    $widget = document.createElement("div");
    $widget.classList.add("asw-container");
    $widget.innerHTML = `<style>${css}</style>${template}`;

    const $btn: HTMLElement = $widget.querySelector(".asw-menu-btn");
    Object.assign($btn.style, getButtonStyle());
    
    $btn?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        openMenu();
    });

    translateWidget();

    document.body.appendChild($widget);

    return $widget;
}

function getButtonStyle() {
    const {
        position = "bottom-left",
        offset = [20, 20]
    } = pluginConfig;

    const [offsetX = 20, offsetY = 25] = offset;

    const centerY = `calc(50% - 27.5px - ${offsetY}px)`; // 55px / 2 = 27.5
    const centerX = `calc(50% - 27.5px - ${offsetX}px)`;

    switch (position) {
        case "bottom-right":
            return {
                bottom: `${offsetY}px`,
                right: `${offsetX}px`,
                left: "auto"
            };
        case "top-left":
            return {
                top: `${offsetY}px`,
                left: `${offsetX}px`,
                bottom: "auto"
            };
        case "top-right":
            return {
                top: `${offsetY}px`,
                right: `${offsetX}px`,
                left: "auto",
                bottom: "auto"
            };
        case "center-left":
            return {
                left: `${offsetX}px`,
                bottom: centerY
            };
        case "center-right":
            return {
                right: `${offsetX}px`,
                left: "auto",
                bottom: centerY
            };
        case "bottom-center":
            return {
                bottom: `${offsetY}px`,
                left: centerX
            };
        case "top-center":
            return {
                top: `${offsetY}px`,
                bottom: "auto",
                left: centerX
            };
        default: // "bottom-left"
            return {
                bottom: `${offsetY}px`,
                left: `${offsetX}px`
            };
    }
}


