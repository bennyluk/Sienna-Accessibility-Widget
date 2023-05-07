// @ts-ignore
import template from "./readingGuide.html";

export default function readingGuide(enable=false) {
    let guide = document.querySelector('.asw-rg-container');

    if(enable) {
        if(!guide) {
            guide = document.createElement("div");
            guide.setAttribute('class', 'asw-rg-container')
            guide.innerHTML = template;

            let rgTop: HTMLElement = guide.querySelector('.asw-rg-top');
            let rgBottom: HTMLElement = guide.querySelector('.asw-rg-bottom');
            const margin = 20;

            (window as any).__asw__onScrollReadableGuide = (event) => {
                rgTop.style.height = (event.clientY - margin) + 'px'
                rgBottom.style.height = (window.innerHeight - event.clientY - (margin * 2)) + 'px'
            }

            document.addEventListener('mousemove', (window as any).__asw__onScrollReadableGuide, { passive: false });
            
            document.body.appendChild(guide);
        }
    } else {
        if(guide) {
            guide.remove();
        }

        if((window as any).__asw__onScrollReadableGuide) {
            document.removeEventListener('mousemove', (window as any).__asw__onScrollReadableGuide);
            delete (window as any).__asw__onScrollReadableGuide;
        }
    }
}