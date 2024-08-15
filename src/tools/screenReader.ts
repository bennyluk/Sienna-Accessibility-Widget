const elementNodeNames: string[] = ["B", "STRONG", "I", "U", "EM", "MARK", "SUB", "SUP", "INS", "PRE", "ABBR"];

function makeCunksOfText (text) {
    let textChunks = [];
    // split text into sentences
    let sentences = text.split(/[.!?]/);
    let chunk = '';
    for (let i = 0; i < sentences.length; i++) {
        chunk += sentences[i] + (i < sentences.length - 1 ? '.' : '');
        if (chunk.length > 200) {
            textChunks.push(chunk);
            chunk = '';
        }
    }
    if (chunk) {
        textChunks.push(chunk + '.');
    }
    return textChunks;
}

function getFullSentence(node: Node): string {
    if (!node) {
        return '';
    }

    let sentence = '';
    let prevNode: Node | null = node.previousSibling;
    let nextNode: Node | null = node.nextSibling;

    while (prevNode) {
        if (
            prevNode.nodeType === Node.TEXT_NODE ||
            elementNodeNames.includes(prevNode.nodeName)
        ) {
            const textContent = prevNode.textContent?.trim().replace(/[ \n]+/g, ' ');
            if (textContent) {
                sentence = textContent + ' ' + sentence;
            }
        }

        prevNode = prevNode.previousSibling;
    }

    sentence += node.textContent?.trim().replace(/[ \n]+/g, ' ') || '';

    while (nextNode) {
        if (
            nextNode.nodeType === Node.TEXT_NODE ||
            elementNodeNames.includes(nextNode.nodeName)
        ) {
            const textContent = nextNode.textContent?.trim().replace(/[ \n]+/g, ' ');
            if (textContent) {
                sentence += ' ' + textContent;
            }
        }

        nextNode = nextNode.nextSibling;
    }

    return sentence.trim().replace((/ {2,}/g), ' ');
}


async function speakText(text, language: string = 'en') {
    if (!text) {
        return;
    }
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
        stopSpeakText();

        const textChunks = makeCunksOfText(text);
        let isPlaying = false;

        for (let i = 0; i < textChunks.length; i++) {
            await new Promise<void>((resolve, reject) => {
                console.log(1, textChunks[i]);

                const utterance = new SpeechSynthesisUtterance(textChunks[i]);
                let synthesisInterval = setInterval(() => {
                    if (!isPlaying) {
                        clearInterval(synthesisInterval);
                    } else {
                        window.speechSynthesis.resume();
                    }
                }, 14000);

                utterance.onend = () => {
                    clearInterval(synthesisInterval);
                    window.speechSynthesis.cancel();
                    resolve();
                };
                utterance.onerror = (error) => {
                    clearInterval(synthesisInterval);
                    window.speechSynthesis.cancel();
                    resolve();
                };

                utterance.lang = language;
                window.speechSynthesis.speak(utterance);
                isPlaying = true;
            });
        }
        isPlaying = false;
    } else {
        console.log('Text-to-speech not supported in this browser.');
    }
}

function stopSpeakText() {
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
    }
}


export default function screenReader(enable = false) {
    if (enable) {
        (window as any).__asw__onClickScreenReader = (event) => {
            const clickedElement = event.target;

            if (!["BODY", "HEAD", "HTML"].includes(clickedElement.nodeName)) {
                const selectedText = getFullSentence(clickedElement);
                const language = document.querySelector('#asw-language option::selection')?.textContent || document.querySelector('html')?.getAttribute('lang') || 'en';

                speakText(selectedText, language).catch(() => {
                    // skip
                });
            }
        }
        document.addEventListener('click', (window as any).__asw__onClickScreenReader);
        return;
    }

    stopSpeakText();
    if ((window as any).__asw__onClickScreenReader) {
        document.removeEventListener('click', (window as any).__asw__onClickScreenReader);
        delete (window as any).__asw__onClickScreenReader;
    }
}
