// @ts-ignore
import template from "./widget.html";
import toggle from "../../utils/toggle";
import { renderMenu } from "../menu/menu";
import { ISeinnaSettings } from "../../sienna";
import translateMenu from "../menu/translateMenu";

export function renderWidget(options: ISeinnaSettings) {
    let {
        position
    } = options;

    const widget: HTMLElement = document.createElement("div");
    widget.innerHTML = template;
    widget.classList.add("asw-container");

    let $btn: HTMLElement = widget.querySelector(".asw-menu-btn");
    if($btn && position === "bottom-right") {
        $btn.style.right = '20px';
        $btn.style.left = 'auto';
    }

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