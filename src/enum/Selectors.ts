export const ICON_SELECTOR = [
  'material-icons',       // Google Material Icons
  'fa',                   // Font Awesome (general)
  'fa-solid',             // Font Awesome solid icons
  'fa-regular',           // Font Awesome regular icons
  'fa-brands',            // Font Awesome brand icons
  'glyphicon',            // Bootstrap Glyphicons
  'icon',                 // Common class for older icon sets
  'mdi',                  // Material Design Icons
  'ion',                  // Ionicons
  'svg-icon',             // Custom SVG icons
  'iconfont',             // Icon fonts from other libraries
  'emoji-icon',           // Emoji icon class
  'bi',                   // Bootstrap Icons
  'octicon',              // GitHub Octicons
  'feather',              // Feather Icons
  'heroicon',             // Heroicons
  'bx',                   // Boxicons
  'ri',                   // Remix Icon
]

export const NOT_ICON_SELECTORS = `*:not(${ICON_SELECTOR.map(s => `.${s}`).join(',')})`;

export const ALL_ELEMENT_SELECTORS = ['', NOT_ICON_SELECTORS];

export const LINKS_SELECTORS = ["a[href]"];

export const HEADER_SELECTORS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const TEXT_SELECTORS = [...HEADER_SELECTORS , 'img', 'p', 'i', 'svg', 'a', 'button:not(.asw-btn)', 'label', 'li', 'ol'];