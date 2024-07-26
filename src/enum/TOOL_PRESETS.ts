import bigCursorIcon from "../icons/bigCursorIcon.svg"
import stopAnimationsIcon from "../icons/stopAnimationsIcon.svg"
import readingGuideIcon from "../icons/readingGuideIcon.svg"
import screenReaderIcon from "../icons/screenReaderIcon.svg"


export default [
    {
        label: 'Screen Reader',
        key: 'screen-reader',
        icon: screenReaderIcon,
        // check if speechSynthesis is supported in the browser
        // and if the browser is not Google Chrome. Google Chrome has a bug with speechSynthesis as it only reads the first 15 seconds of the text
        // @ts-ignore
        enabled: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window && !(window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && !!window.chrome)
    },
    {
        label: 'Big Cursor',
        key: 'big-cursor',
        icon: bigCursorIcon,
    },
    {
        label: 'Stop Animations',
        key: 'stop-animations',
        icon: stopAnimationsIcon,
    },
    {
        label: 'Reading Guide',
        key: 'readable-guide',
        icon: readingGuideIcon,
    }
]
