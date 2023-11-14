const elementNodeNames: string[] = ["B", "STRONG", "I", "U", "EM", "MARK", "SUB", "SUP", "INS", "PRE", "ABBR"];

function getTextFromNode(node) {

}

function getFullSentence(node: Node): string {
  return;
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

  return sentence.trim();
}


function speakText(text) {
  return;
  if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    if (text) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  } else {
    console.log('Text-to-speech not supported in this browser.');
  }
}



export default function screenReader(enable = false) {
  return;
  if (enable) {
    (window as any).__asw__onClickScreenReader = (event) => {
      var clickedElement = event.target;

      if (!["BODY", "HEAD", "HTML"].includes(clickedElement.nodeName)) {
        var selectedText = getFullSentence(clickedElement);

        speakText(selectedText);
      }
    }

    document.addEventListener('click', (window as any).__asw__onClickScreenReader);
  } else {
    if ((window as any).__asw__onClickScreenReader) {
      document.removeEventListener('click', (window as any).__asw__onClickScreenReader);
      delete (window as any).__asw__onClickScreenReader;
    }
  }
}