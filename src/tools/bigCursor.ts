import { injectToolCSS } from "../utils/cssGenerator";
import IToolConfig from "../types/IToolConfig";

export const bigCursorConfig: IToolConfig = {
    id: "big-cursor",
    selector: `body`,
    childrenSelector: ['*'],
    styles: {
        'cursor': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath  d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E"),default`
    }
}

export default function bigCursor(enable=false) {
    injectToolCSS({
        ...bigCursorConfig,
        enable
    })
}