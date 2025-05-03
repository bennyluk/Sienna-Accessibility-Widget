import template from "./readingGuide.html";
import css from "./readingGuide.css";

export default function readingGuide(enable=false) {
    let guide = document.querySelector('.asw-rg-container');

    if(enable) {
        if(!guide) {
            guide = document.createElement("div");
            guide.classList.add('asw-rg-container');
            guide.innerHTML = `<style>${css}</style>${template}`;

            const rgTop: HTMLElement = guide.querySelector('.asw-rg-top');
            const rgBottom: HTMLElement = guide.querySelector('.asw-rg-bottom');
            const margin = 20;

            (window as any).__asw__onScrollReadableGuide = (event) => {
                rgTop.style.height = `${event.clientY - margin}px`;
                rgBottom.style.height = `${window.innerHeight - event.clientY - (margin * 2)}px`;
            }

            document.addEventListener('mousemove', (window as any).__asw__onScrollReadableGuide, { passive: false });
            
            document.body.appendChild(guide);
        }
    } else {
        guide?.remove();

        if((window as any).__asw__onScrollReadableGuide) {
            document.removeEventListener('mousemove', (window as any).__asw__onScrollReadableGuide);
            delete (window as any).__asw__onScrollReadableGuide;
        }
    }
}