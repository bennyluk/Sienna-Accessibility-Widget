import {textVide} from "text-vide";

export default function addBionicReading(enable=false) {
    document
        .querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text")
        .forEach((el: HTMLElement) => {
            if (enable) {
                el.dataset.initial = el.dataset.initial || el.innerHTML;
                el.innerHTML = textVide(el.innerHTML.replace(/<(\/)?(b|strong)[^>]*>/g, ''));
                return;
            }
            el.innerHTML = el.dataset.initial || el.innerHTML;
        });
}
