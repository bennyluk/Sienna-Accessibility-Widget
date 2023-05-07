import { getCookie, setCookie } from "./utils/cookies";
import { ISettings } from "./types/ISettings";

const DEFAULT_SETTINGS: ISettings = {
    lang: 'en',
    states: {
        fontSize: 1
    },
    updatedAt: new Date()
};

let settings: ISettings = DEFAULT_SETTINGS;

export const COOKIE_KEY = "asw";

export function saveState(payload): ISettings {
    const newSettings = {
        ...settings,
        states: {
            ...settings.states,
            ...payload
        },
        updatedAt: new Date()
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
    return settings.states[key];
}

export function getSettings(cache: boolean = true): ISettings {
    if (cache) {
        return settings;
    } else {
        const savedSettings = getSavedSettings();
        if (savedSettings) {
            settings = JSON.parse(savedSettings);
        } else {
            settings = DEFAULT_SETTINGS;
        }
        return settings;
    }
}

export function getSavedSettings(): string | null {
    return getCookie(COOKIE_KEY);
}