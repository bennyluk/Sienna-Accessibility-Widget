export default function toggle(el: HTMLElement, state?: boolean) {
    el.style.display = 
        (typeof state === "undefined") 
            ?
                el.style.display === "none" ? "block" : "none" 
            :
                state == true ? "block" : "none"
}