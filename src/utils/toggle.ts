export default function toggle(el: HTMLElement, state?: boolean) {
    const shouldShow = typeof state === "undefined"
        ? el.style.display === "none"
        : state;

    el.style.display = shouldShow ? "block" : "none";
}