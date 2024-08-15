import stopAnimations from "../../tools/stopAnimations";
import readableFont from "../../tools/readableFont";
import { getSettings } from "../../storage";
import bigCursor from "../../tools/bigCursor";
import highlightTitle from "../../tools/highlightTitle";
import readingGuide from "../../tools/readingGuide";
import highlightLinks from "../../tools/highlightLinks";
import adjustLetterSpacing from "../../tools/adjustLetterSpacing";
import adjustLineHeight from "../../tools/adjustLineHeight";
import adjustFontWeight from "../../tools/adjustFontWeight";
import addBionicReading from "../../tools/bionicReading";
import screenReader from "../../tools/screenReader";
import muteAudio from "../../tools/muteAudio";
import disableImages from "../../tools/disableImages";

export default function renderTools() {
    let { states } = getSettings();

    highlightTitle(states['highlight-title']);
    highlightLinks(states['highlight-links']);

    adjustLetterSpacing(states['letter-spacing']);
    adjustLineHeight(states['line-height']);
    adjustFontWeight(states['font-weight']);

    addBionicReading(states['bionic-reading']);

    readableFont(states['readable-font']);

    disableImages(states['disable-images']);

    readingGuide(states['readable-guide']);
    stopAnimations(states['stop-animations']);
    muteAudio(states['mute-audio']);
    bigCursor(states['big-cursor']);

    screenReader(states['screen-reader']);
}
