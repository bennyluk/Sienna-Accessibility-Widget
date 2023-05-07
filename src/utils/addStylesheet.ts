export interface IAddStylesheetArgs {
    id: string,
    css: string
}

export default function addStylesheet({
    id,
    css
}: IAddStylesheetArgs) {
    if(css) {
        let style = document.getElementById(id || '') || document.createElement('style');
        style.innerHTML = css;
        if(!style.id) {
            style.id = id;
            document.head.appendChild(style);
        }
    }
}