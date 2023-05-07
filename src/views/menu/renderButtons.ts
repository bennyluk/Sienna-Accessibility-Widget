export default function renderButtons(buttons, btnClass?:string) {
    let _html = '';

    for(var i = buttons.length; i--;) {
        let x = buttons[i];

        _html += `
            <button class="asw-btn ${ btnClass || '' }" type="button" data-key="${ x.key }" title="${ x.label }">
                <span class="material-icons">${ x.icon }</span>
                <span class="asw-translate">${ x.label }</span>
            </button>
        `;
    }
    
    return _html;
}