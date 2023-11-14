import { getCookie, setCookie } from "./utils/cookies";
import { ISettings } from "./types/ISettings";

let settings: ISettings = {};

export const COOKIE_KEY = "asw";

export function saveState(payload): ISettings {
    const newSettings = {
        ...settings,
        states: {
            ...settings.states,
            ...payload
        }
    };
    saveSettings(newSettings);
    return newSettings;
}

export function saveSettings(newSettings: any): void {
    settings = {
        ...settings,
        ...newSettings
    };
    setCookie(COOKIE_KEY, JSON.stringify(settings));
}

export function getState(key: string): any {
    return settings?.states?.[key];
}

export function getSettings(cache: boolean = true): ISettings {
    if (cache) {
        return settings;
    } else {
        const savedSettings = getSavedSettings();
        if (savedSettings) {
            settings = JSON.parse(savedSettings);
        }
        
        return settings;
    }
}

export function getSavedSettings(): string | null {
    return getCookie(COOKIE_KEY);
}