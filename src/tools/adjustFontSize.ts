export default function adjustFontSize(multiply:number = 1) {
    document
        .querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text")
        .forEach((el: HTMLElement) => {
            const skipClasses = [
                'material-icons',
                'fa',
                'fab',
                'fas',
                'far'
            ];

            for (const skipClass of skipClasses) {
                if (el.classList.contains(skipClass)) {
                    return;
                }
            }

            let orgFontSize = Number(el.getAttribute('data-asw-orgFontSize') ?? 0);

            if (!orgFontSize) {
                orgFontSize = parseInt(window.getComputedStyle(el).getPropertyValue('font-size'));
                el.setAttribute('data-asw-orgFontSize', String(orgFontSize));
            }

            const newFontSize = orgFontSize * multiply;

            el.style['font-size'] = newFontSize + 'px';
            // adapt line-height accordingly to prevent text from overlapping
            el.style['line-height'] = newFontSize * 1.2 + 'px';
        });

    let $amount: HTMLDivElement = document.querySelector(".asw-amount");

    if ($amount) {
        $amount.innerText = `${ (multiply * 100).toFixed(0) }%`
    }
}
