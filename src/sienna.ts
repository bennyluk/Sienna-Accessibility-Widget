import { renderWidget } from "./views/widget/widget"

export interface ISiennaOptions {
    container: HTMLElement
}

export interface ISiennaArgs {
    options?: ISiennaOptions
}

export const DEFAULT_OPTIONS: ISiennaOptions = {
    container: document.body
}

// import enLocale from './locales/en.json';

export default function sienna(args?: ISiennaArgs) {
    let options: ISiennaOptions = {
        ...DEFAULT_OPTIONS,
        ...args
    }

    renderWidget({
        container: options.container
    });

    return {}
}