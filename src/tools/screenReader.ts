const elementNodeNames: string[] = ["B", "STRONG", "I", "U", "EM", "MARK", "SUB", "SUP", "INS", "PRE", "ABBR"];

function getTextFromNode(node) {

}

function getFullSentence(node: Node): string {
  if (!node) {
    return '';
  }

  let sentence = '';
  sentence += node.textContent?.trim().replace(/[ \n]+/g, ' ') || '';
  return sentence.trim();

}


function speakText(text: string, nodeName: string) {
    (window as any).responsiveVoice.cancel()
    
    let preVoice = ''

    if(text) {
      
      if(nodeName === "A") {
        preVoice = "Tautan"
      } else if(nodeName === "BUTTON") {
        preVoice = "Tombol"
      } else if(["H1", "H2", "H3", "H4", "H5", "H6"].includes(nodeName)){
        preVoice = "Judul"
      }

      (window as any).responsiveVoice.speak(preVoice + " " + text, "Indonesian Female")
    }
}
  


export default function screenReader(enable=false) {
  
  if(enable) {
        (window as any).__asw__onMouseOverScreenReader = (event) => {
          var clickedElement = event.target;
          
          if (!["BODY", "HEAD", "HTML", "DIV"].includes(clickedElement.nodeName)) {
            var selectedText = getFullSentence(clickedElement);
              speakText(selectedText, clickedElement.nodeName);
            }
        }

        (window as any).__asw__onMouseOutScreenReader = (event) => {
          var clickedElement = event.target;
          
          if (!["BODY", "HEAD", "HTML"].includes(clickedElement.nodeName)) {
            (window as any).responsiveVoice.cancel()
          }
           
        }

        document.addEventListener('mouseover', (window as any).__asw__onMouseOverScreenReader);
        document.addEventListener('mouseout', (window as any).__asw__onMouseOutScreenReader)
    } else {
        if((window as any).__asw__onMouseOverScreenReader) {
            (window as any).responsiveVoice.cancel()
            document.removeEventListener('mouseover', (window as any).__asw__onMouseOverScreenReader);
            delete (window as any).__asw__onMouseOverScreenReader;
        }
    }
}