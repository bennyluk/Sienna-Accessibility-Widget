import bigCursorIcon from "../icons/bigCursorIcon.svg"
import stopAnimationsIcon from "../icons/stopAnimationsIcon.svg"
import readingGuideIcon from "../icons/readingGuideIcon.svg"
import screenReaderIcon from "../icons/screenReaderIcon.svg"
import muteAudioIcon from "../icons/muteAudioIcon.svg"

/**
 * Check if the device is a touch device
 * @returns {boolean}
 */
function isTouchDevice() {
    // @ts-ignore
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

/**
 * Check if speech synthesis is supported in the browser
 * and if the browser is not Google Chrome. Google Chrome has a bug with speechSynthesis as it only reads the first 15 seconds of the text
 * @returns {boolean}
 */
function allowSpeechSynthesis() {
    // @ts-ignore
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window && !(window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && !!window.chrome);
}

export default [
    {
        label: 'Screen Reader',
        key: 'screen-reader',
        icon: screenReaderIcon,
        enabled: allowSpeechSynthesis()
    },
    {
        label: 'Big Cursor',
        key: 'big-cursor',
        icon: bigCursorIcon,
        enabled: !isTouchDevice()
    },
    {
        label: 'Mute Audio',
        key: 'mute-audio',
        icon: muteAudioIcon
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
        enabled: !isTouchDevice()
    }
]
