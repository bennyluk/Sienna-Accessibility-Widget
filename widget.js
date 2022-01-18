/*
https://userway.org/widget
https://fecca.com/#uaw

Receive an official statement of compliance that:

your-website.com

...is compliant with the ADA and Section 508 requirements for website accessibility based on WCAG 2.1 AA.

https://www.survivalkit.com/

text readers
voice commands
color - backgroundm headubgm cibtebt
text magic - overblown text

https://cdn.jsdelivr.net/gh/bennyluk/Sienna-Accessibility-Widget@1/file

// https://stephenwalther.com/archive/2015/01/05/using-html5-speech-recognition-and-text-to-speech


    https://avtecmedia.com/compliance/ada-accessibility-widget.html



https://www.bosch-home.ca/en/

https://accessibe.com/blog/knowledgebase/using-an-accessibility-plugin-like-userway-you-are-at-risk-of-litigation

*/


/*
SPECS

font adjustments is by percentage

readable font -- Arial,Helvetica,sans-serif !important
use class.. so i dont overwrite stuff
*/


// TODO security 
// grab the domain


var init = function() {
    const filterPresets = [
        {
            label: 'Monochrome',
            key: 'monochrome',
            icon: 'filter_b_and_w',
        },
        {
            label: 'Low Saturation',
            key: 'low-saturation',
            icon: 'gradient',
        },
        {
            label: 'High Saturation',
            key: 'high-saturation',
            icon: 'filter_vintage',
        },
        {
            label: 'High Contrast',
            key: 'high-contrast',
            icon: 'tonality',
        },
        {
            label: 'Light Contrast',
            key: 'light-contrast',
            icon: 'brightness_5',
        },
        {
            label: 'Dark Contrast',
            key: 'dark-contrast',
            icon: 'nightlight',
        },
    ];

    const contentPresets = [
        {
            label: 'Readable Font',
            key: 'readable-font',
            icon: 'local_parking',
        },
        {
            label: 'Highlight Links',
            key: 'highlight-links',
            icon: 'link',
        },
        {
            label: 'Highlight Title',
            key: 'highlight-title',
            icon: 'title',
        },
    ];

    const tools = [
        {
            label: 'Big Cursor',
            key: 'big-cursor',
            icon: 'mouse',
        },
        {
            label: 'Stop Animations',
            key: 'stop-animations',
            icon: 'motion_photos_off',
        },
        {
            label: 'Reading Guide',
            key: 'readable-guide',
            icon: 'local_library',
        },
    ];

    

    // ---- SETTINGS -----
    let settings = {
        states: {}
    };

    const saveSettings = function() {
        setCookie('asw', JSON.stringify(settings))
        //document.cookie = "asw=" + JSON.stringify(settings);
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }

    let cookieSettings = getCookie('asw');
    
    try {
        cookieSettings = JSON.parse(cookieSettings);
    } catch(e) {
        
    }

    settings = {
        states: {},
        ...cookieSettings
    };

    let icons = ['format_size', 'add', 'remove', 'restart_alt', 'close'];
    const createButtons = function(filterPresets, btnClass) {
        let _html = '';

        for(var i = filterPresets.length; i--;) {
            let x = filterPresets[i];
            let selected = settings.states[x.key];
            if(btnClass == 'asw-filter' && settings.states.contrast  == x.key) {
                selected = true;
            }

            _html += `
                <div class="asw-btn ${ btnClass || '' } ${ selected ? 'asw-selected' : '' }" role="button" aria-pressed="false" data-key="${ x.key }" arai-label="${ x.label }" title="${ x.label }">
                    <span class="material-icons">${ x.icon }</span>
                    ${ x.label }
                </div>
            
            `;
            icons.push(x.icon);
        }
        return _html;
    }

    let contentHTML = createButtons(contentPresets);
    let contrastHTML = createButtons(filterPresets, 'asw-filter');
    let toolsHTML = createButtons(tools, 'asw-tools');

    var accessibilityEl = document.createElement("div");

    accessibilityEl.innerHTML = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons&text=${ icons.toString() }" rel="stylesheet">
        <style>
            .asw-widget {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                font-family: Lato,sans-serif;
                font-weight: 400;
                -webkit-font-smoothing: antialiased;
            }

            .asw-widget * {
                box-sizing: border-box;
            }

            .asw-menu-btn {
                position: fixed;
                z-index: 500000;
                left: 20px;
                bottom: 20px;
                background: #0048ff;
                box-shadow: 0 5px 15px 0 rgb(37 44 97 / 15%), 0 2px 4px 0 rgb(93 100 148 / 20%);
                transition: .3s;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                transform: translateY(0);
                width: 64px;
                height: 64px;
                display: flex;
                fill: white;
                cursor: pointer;
            }

            .asw-menu-btn !important { 
                background: transparent !important;
            }

            .asw-menu-btn:hover {
                transform: scale(1.05);
            }

            .asw-menu {
                display: none;
                position: fixed;
                left: 20px;
                top: 20px;
                border-radius: 8px;
                box-shadow: -1px 0 20px -14px #000;
                opacity: 1;
                transition: .3s;
                z-index: 500000;
                overflow: hidden;
                background: #fff;
                width: 500px;
                line-height: 1;
                font-size: 14px;
                height: calc(100% - 40px - 75px);
                letter-spacing: 0.015em;
            }

            .asw-menu-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #0334b1;
                color: white;
                padding-left: 12px;
                font-weight: 600;
            }

            .asw-menu-header > div {
                display: flex;
            }

            .asw-menu-header div[role="button"] {
                padding: 12px;
            }

            .asw-menu-header div[role="button"]:hover {
                opacity: 0.8;
            }

            .asw-items {
                display: flex;
                margin: -8px;
                padding: 0;
                list-style: none;
                flex-wrap: wrap;
            }

            .asw-btn {
                width: 140px;
                height: 120px;
                border-radius: 8px;
                margin: 8px;
                padding: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                color: #333;
                font-size: 14px !important;
                background: #ecf3ff;
                border: 3px solid #ecf3ff;
                transition: background-color 0.3s ease;
            }

            .asw-btn .material-icons {
                margin-bottom: 16px;
            }

            .asw-btn:hover {
                border-color: #0048ff;
            }
            
            .asw-btn.asw-selected {
                background: #0048ff;
                color: white;
                border-color: #0048ff;
            }

            .asw-footer {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: #0334b1;
                padding: 16px;
                text-align: center;
                color: #FFF;
            }

            .asw-footer a {
                font-size: 14px !important;
                text-decoration: underline;
                color: #FFF;
            }

            .asw-plus:hover,
            .asw-minus:hover {
                opacity: 0.8;
            }

            .asw-menu-content {
                overflow: scroll;
                max-height: calc(100% - 80px);
            }

            
            .asw-card {
                margin: 0 15px 30px;
            }

            .asw-card-title {
                font-size: 18px;
                padding: 15px 0;
            }

            .asw-adjust-font {
                background: #ecf3ff;
                padding: 20px 25px;
                margin-bottom: 16px;
            }

            .asw-adjust-font label {
                display: flex;
                align-items: center;
            }

            .asw-adjust-font > div {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                align-items: center;
                font-size: 16px;
                font-weight: 700;
            }

            .asw-adjust-font div[role="button"] {
                background: #0648ff;
                border-radius: 50%;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }

            .asw-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: none;
            }
        </style>

        <div class="asw-widget">
            <div class="asw-menu-btn" title="Open Accessibility Menu" role="button" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34px" height="34px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
            </div>
            <div class="asw-menu">
                <div class="asw-menu-header">
                    Accessibility Menu
                    <div>
                        <div role="button" class="asw-menu-reset"  title="Reset Settings">
                            <span class="material-icons">
                                restart_alt
                            </span>
                        </div>
                        <div role="button" class="asw-menu-close" title="Close Accessibility Menu">
                            <span class="material-icons">
                                close
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div class="asw-menu-content">
                    <div class="asw-card" style="margin-top: 15px;">
                        <div class="asw-card-title">
                            Content Adjustments
                        </div>

                        <div class="asw-adjust-font">
                            <label>
                                <span class="material-icons" style="margin-right:8px;">
                                    format_size
                                </span>
                                Adjust Font Size
                            </label>
                            <div>
                                <div class="asw-minus" data-key="font-size" role="button" aria-pressed="false">
                                    <span class="material-icons">
                                        remove
                                    </span>
                                </div>
                                <div class="asw-amount">
                                    ${ settings.states.fontSize && settings.states.fontSize != 1 ? `${parseInt(settings.states.fontSize * 100)}%` : 'Default' }
                                </div>
                                <div class="asw-plus" data-key="font-size" role="button" aria-pressed="false">
                                    <span class="material-icons">
                                        add
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="asw-items">
                            ${ contentHTML }
                        </div>
                    </div>

                    <div class="asw-card" style="margin-top: 15px;">
                        <div class="asw-card-title">
                            Color Adjustments
                        </div>
                        <div class="asw-items">
                            ${  contrastHTML }
                        </div>
                    </div>

                    <div class="asw-card" style="margin-top: 15px;">
                        <div class="asw-card-title">
                            Tools
                        </div>
                        <div class="asw-items">
                            ${  toolsHTML }
                        </div>
                    </div>
                </div>
                
                <div class="asw-footer">
                    Accessibility  Widget by <a href="https://bennyluk.github.io/Sienna-Accessibility-Widget/">Sienna</a>
                </div>
            </div>

            <div class="asw-overlay">
            </div>
        </div>
    `;


    const addStyleSheet = function(css, id) {
        let style = document.getElementById(id || '') || document.createElement('style');
        style.innerHTML = css;
        if(!style.id) {
            style.id = id;
            document.head.appendChild(style);
        }
    }

    

    const getFilterCSS = function(filter, cssProp) {
        let filterCSS = '';
        
        let prefix = ['-o-', '-ms-', '-moz-', '-webkit', ''];
        for(var i = prefix.length; i--;) {
            filterCSS += prefix[i] + (cssProp || 'filter') + ':' + filter + ';';
        }

        return filterCSS;
    }

    const changeFilter = function(key) {
        let css = '';
        if(key) {
            let _css = '';
            if(key == 'dark-contrast') {
                _css = 'color: #fff !important;fill: #FFF !important;background-color: #000 !important;';
            } else if(key == 'light-contrast') {
                _css = ' color: #000 !important;fill: #000 !important;background-color: #FFF !important;';
            } else if(key == 'high-contrast') {
                _css += getFilterCSS('contrast(125%)');
            } else if(key == 'high-saturation') {
                _css += getFilterCSS('saturate(200%)');
            } else if(key == 'low-saturation') {
                _css += getFilterCSS('saturate(50%)');
            } else if(key == 'monochrome') {
                _css += getFilterCSS('grayscale(100%)');
            }

            let childrenSelector = [''];
            if(key == 'dark-contrast' || key == 'light-contrast') {
                childrenSelector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'p', 'i', 'svg', 'a', 'button', 'label', 'li', 'ol'];  
            }

            for(var i = childrenSelector.length; i--;) {
                css += '[data-asw-filter="' + key + '"] ' + childrenSelector[i] + '{' + _css + '}';
            }
        }

        addStyleSheet(css, 'asw-filter-style');

        if(key) {
            document.documentElement.setAttribute("data-asw-filter", key);
        } else {
            document.documentElement.removeAttribute("data-asw-filter", key);
        }
    };

    const changeControls = function() {
        let styles = [
            {
                id: 'highlight-title',
                childrenSelector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                css: 'outline: 2px solid #0048ff !important;outline-offset: 2px !important;'
            },
            {
                id: 'highlight-links',
                childrenSelector: ['a[href]'],
                css: 'outline: 2px solid #0048ff !important;outline-offset: 2px !important;'
            },
            {
                id: 'readable-font',
                childrenSelector: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'p', 'i', 'svg', 'a', 'button', 'label', 'li', 'ol'],
                css: 'font-family: Arial,Helvetica,sans-serif !important;'
            }
        ];

        let css = '';
        for(var i = styles.length; i--;) {
            let style = styles[i];
            document.documentElement.classList.toggle(style.id, settings.states[style.id] ? true : false);
            if(settings.states[style.id]) {
                for(var j = style.childrenSelector.length; j--;) {
                    css += '.' + style.id + ' ' + style.childrenSelector[j] + '{' + style.css + '}';
                }
            }
        }


        var rgs = document.querySelector('.asw-rg-container');
        if(settings.states['readable-guide']) {
            if(!rgs) {
                var rgEl = document.createElement("div");
                rgEl.setAttribute('class', 'asw-rg-container')
                rgEl.innerHTML = `
                    <style>
                        .asw-rg {
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            width: 100%;
                            height: 0;
                            pointer-events: none;
                            background-color: rgba(0,0,0,.5);
                            z-index: 1000000;
                        }
                    </style>
                    <div class="asw-rg asw-rg-top"></div>
                    <div class="asw-rg asw-rg-bottom" style="top: auto;bottom: 0;"></div>
                `;

                let rgTop = rgEl.querySelector('.asw-rg-top');
                let rgBottom = rgEl.querySelector('.asw-rg-bottom');
                let margin = 20;

                window.onScrollReadableGuide = function(event) {
                    rgTop.style.height = (event.clientY - margin) + 'px'
                    rgBottom.style.height = (window.innerHeight - event.clientY - margin  - margin) + 'px'
                }

                document.addEventListener('mousemove', window.onScrollReadableGuide, false);
                
                document.body.appendChild(rgEl);
            }
        } else if(rgs) {
            rgs.remove();
            document.removeEventListener('mousemove', window.onScrollReadableGuide);
        }

        if(settings.states['stop-animations']) {
            css += `
                body * {
                    ${ getFilterCSS('none !important', 'transition') }
                    ${ getFilterCSS('forwards !important', 'animation-fill-mode') }
                    ${ getFilterCSS('1 !important', ' animation-iteration-count') }
                    ${ getFilterCSS('.01s !important', 'animation-duration') }
                }
            `
        }


        if(settings.states['big-cursor']) {
            css += `
                body * {
                    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath  d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E") ,default !important;
                }
            `
        }

        addStyleSheet(css, 'asw-content-style');
    };

    const resetSettings = function() {
        settings.states = {};
        changeFilter();
        changeControls();
        changeFont(undefined, 1);

        document.querySelectorAll('.asw-btn').forEach(function(item) {
            item.classList.remove('asw-selected');
            item.setAttribute('aria-pressed', "false");
        });

        document.querySelectorAll('.asw-amount').forEach(function(item) {
            item.innerHTML = 'Default';
        });

        saveSettings();
    }

    var clickItem = function(event) {
        // if(!ha()) { return; }

        event.preventDefault();

        let target = event.currentTarget;
        let key = target.dataset.key;

        if(target.classList.contains('asw-filter')) {
            // asw-btn-selected
            document.querySelectorAll('.asw-filter').forEach(function(item) {
                item.classList.remove('asw-selected');
                item.setAttribute('aria-pressed', "false");
            });

            settings.states.contrast = settings.states.contrast === key ? false : key;

            if(settings.states.contrast) {
                target.classList.add('asw-selected');
                target.setAttribute('aria-pressed', "true");
            }

            changeFilter(settings.states.contrast);
        } else {
            settings.states[key] = !settings.states[key];

            target.classList.toggle('asw-selected', settings.states[key]);
            target.setAttribute('aria-pressed',  settings.states[key] ? "true" : "false");

            changeControls();
        }

        saveSettings();
    }
    
    const changeFont = function (event, newValue) {
        let target = false;

        if(!newValue) {
            target = event.currentTarget;

            newValue = (parseFloat(settings.states['fontSize']) || 1);
            if(target.classList.contains('asw-minus')) {
                newValue -= 0.1;
            } else {
                newValue += 0.1;
            }

            newValue = Math.max(newValue, 0.1);
            newValue = Math.min(newValue, 2);

            newValue = parseFloat(newValue.toFixed(2));
        }

        let text = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span");
        text.forEach(function(textItem) {
            if(!textItem.classList.contains('material-icons')) {
                let orgFontSize =  textItem.getAttribute('data-asw-orgFontSize');

                if(!orgFontSize) {
                    orgFontSize = parseInt(window.getComputedStyle(textItem, null).getPropertyValue('font-size'));
                    textItem.setAttribute('data-asw-orgFontSize', orgFontSize);
                }

                let newFontSize = orgFontSize * newValue;

                textItem.style['font-size'] = newFontSize + 'px';
            }
        });

        let label = 'Default';

        if(newValue !== 1) {
            if(newValue > 1) {
                label = '+';
            } else if(newValue < 1) {
                label = '-';
            }
            label += parseInt(newValue * 100) + '%';
        }

        if(target) {
            target.parentElement.querySelector('.asw-amount').innerHTML = label;
        }

        settings.states['fontSize'] = newValue;
    }

    let menu = accessibilityEl.querySelector('.asw-menu');
    let overlay = accessibilityEl.querySelector('.asw-overlay');

    accessibilityEl.querySelector('.asw-menu-btn').addEventListener('click', function() {
        menu.style.display = menu.style.display == 'block' ? 'none' : 'block';
        overlay.style.display = menu.style.display;
    }, false);

    menu.querySelector('.asw-menu-close').addEventListener('click', function () {
        menu.style.display = 'none';
        overlay.style.display = menu.style.display;
    }, false);

    overlay.addEventListener('click', function() {
        menu.style.display = 'none';
        overlay.style.display = menu.style.display;
    }, false)

    menu.querySelector('.asw-menu-reset').addEventListener('click', resetSettings, false);

    menu.querySelectorAll(".asw-btn").forEach(function(el) {
        el.addEventListener("click", clickItem, false);
    });

    menu.querySelectorAll(".asw-adjust-font div[role='button']").forEach(function(el)  {
        el.addEventListener("click", changeFont, false);
    });

    document.body.appendChild(accessibilityEl);

    
    if(cookieSettings) {
        changeControls();
        changeFont(null, settings.states.fontSize);
        
        if(settings.states.contrast) {
            changeFilter(settings.states.contrast);
        }
    }
};


document.addEventListener("DOMContentLoaded", init);