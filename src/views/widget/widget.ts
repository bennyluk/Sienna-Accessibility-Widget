// @ts-ignore
import template from "./widget.html";
import toggle from "../../utils/toggle";
import { renderMenu } from "../menu/menu";
import { getSavedSettings, saveSettings } from "../../storage";
import runAccessibility from "../menu/runAccessibility";

export interface IRenderWidgetArgs {
    container: HTMLElement
}

export function renderWidget({
    container
}: IRenderWidgetArgs) {
    const widget: HTMLElement = document.createElement("div");
    widget.innerHTML = template;

    let menu;
    widget.querySelector(".asw-menu-btn")?.addEventListener("click", (event) => {
        event.preventDefault();

        if(menu) {
            toggle(menu);
        } else {
            menu = renderMenu({
                container: widget
            });
        }
    });

    // read the cookies
    try {
        let settings = getSavedSettings() 

        if(settings) {
            saveSettings(JSON.parse(settings));
            runAccessibility();
        }
    } catch(e) {
        // silent error
    }
    
    container.appendChild(widget);

    return widget;
}