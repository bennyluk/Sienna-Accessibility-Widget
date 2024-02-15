// @ts-ignore
import template from "./widget.html";
import toggle from "../../utils/toggle";
import { renderMenu } from "../menu/menu";
import { ISeinnaSettings } from "../../sienna";
import translateMenu from "../menu/translateMenu";

export function renderWidget(options: ISeinnaSettings) {
    let {
        position = "bottom-left",
        offset=[20,20]
    } = options;

    const widget: HTMLElement = document.createElement("div");
    widget.innerHTML = template;
    widget.classList.add("asw-container");

    let $btn: HTMLElement = widget.querySelector(".asw-menu-btn");

    let offsetX = offset?.[0] ?? 20;
    let offsetY = offset?.[1] ?? 25;
    
    let buttonStyle: {
        left?: string,
        bottom?: string,
        right?: string,
        top?: string
    } = {
        left: `${offsetX}px`,
        bottom: `${ offsetY }px`,
    }

    if(position === "bottom-right") {
        buttonStyle = {
            ...buttonStyle,
            right: `${offsetX}px`,
            left: "auto"
        }
    } else if(position === "top-left") {
        buttonStyle = {
            ...buttonStyle,
            top: `${offsetY}px`,
            bottom: "auto"
        }
    } else if(position === "center-left") {
        buttonStyle = {
            ...buttonStyle,
            bottom: `calc(50% - (55px / 2) - ${ offset?.[1] ?? 0 }px)`
        }
    } else if(position === "top-right") {
        buttonStyle = {
            top: `${offsetY}px`,
            bottom: "auto",
            right: `${offsetX}px`,
            left: "auto"
        }
    } else if(position === "center-right") {
        buttonStyle = {
            right: `${offsetX}px`,
            left: "auto",
            bottom: `calc(50% - (55px / 2) - ${ offset?.[1] ?? 0 }px)`
        }
    } else if(position === "bottom-center") {
        buttonStyle = {
            ...buttonStyle,
            left: `calc(50% - (55px / 2) - ${ offset?.[0] ?? 0 }px)`
        }
    } else if(position === "top-center") {
        buttonStyle = {
            top: `${offsetY}px`,
            bottom: "auto",
            left: `calc(50% - (55px / 2) - ${ offset?.[0] ?? 0 }px)`
        }
    }

    Object.assign($btn.style, buttonStyle);

    let menu;
    $btn?.addEventListener("click", (event) => {    
        event.preventDefault();

        if(menu) {
            toggle(menu);
        } else {
            menu = renderMenu({
                ...options,
                container: widget,
            });
        }
    });

    
    translateMenu(widget);
    
    document.body.appendChild(widget);


    return widget;
}