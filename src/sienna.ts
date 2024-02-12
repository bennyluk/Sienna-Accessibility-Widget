import { getSettings, saveSettings } from "./storage";
import runAccessibility from "./views/menu/runAccessibility";
import { renderWidget } from "./views/widget/widget"

export interface ISeinnaSettings {
    lang?: any,
    position?: any | 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center-left' | 'center-right',
    footer?: any,
    offset?: any
}

export const DEFAULT_OPTIONS: ISeinnaSettings = {
    lang: 'en',
    position: 'bottom-left'
}

export default function sienna(args?: ISeinnaSettings) {
    let options = {
        ...DEFAULT_OPTIONS
    };

    try {
        let settings = getSettings(false);

        options = {
            ...options,
            ...settings,
        }
        
        runAccessibility();
    } catch(e) {
        // silent error
    }

    options = {
        ...options,
        ...args
    }
    
    saveSettings(options);

    renderWidget(options);
}