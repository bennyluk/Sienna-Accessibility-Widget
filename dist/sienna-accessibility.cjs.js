/*!
 * Sienna Accessibility Widget v2.0.1
 * (c) 2025 Benny Luk
 * License: MIT
 * Home Page: https://accessibility-widget.pages.dev/
 * Repository: git+https://github.com/bennyluk/Sienna-Accessibility-Widget.git
 */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/locales/am.json
var require_am = __commonJS({
  "src/locales/am.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u12E8\u1270\u12F0\u1228\u1230 \u121D\u1293\u120C",
      "Reset settings": "\u1245\u1295\u1265\u122E\u127D\u1295 \u12F3\u130D\u121D \u12A0\u1235\u1300\u121D\u122D",
      Close: "\u12DD\u130B",
      "Content Adjustments": "\u12E8\u12ED\u12D8\u1275 \u121B\u1235\u1270\u12AB\u12A8\u12EB\u12CE\u127D",
      "Adjust Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1235\u1270\u12AB\u12AD\u120D",
      "Highlight Title": "\u122D\u12D5\u1235\u1295 \u12A0\u1260\u122B",
      "Highlight Links": "\u12A0\u1308\u1293\u129E\u127D\u1295 \u12A0\u1260\u122B",
      "Readable Font": "\u1270\u1290\u1263\u1262 \u134A\u12F0\u120D",
      "Color Adjustments": "\u12E8\u1240\u1208\u121D \u121B\u1235\u1270\u12AB\u12A8\u12EB\u12CE\u127D",
      "Dark Contrast": "\u1328\u1208\u121B \u1218\u1208\u12EB\u12E8\u1275",
      "Light Contrast": "\u1265\u122D\u1203\u1295 \u1218\u1208\u12EB\u12E8\u1275",
      "High Contrast": "\u12A8\u134D\u1270\u129B \u1218\u1208\u12EB\u12E8\u1275",
      "High Saturation": "\u12A8\u134D\u1270\u129B \u1218\u1320\u1295 \u12EB\u1208\u12CD \u1240\u1208\u121D",
      "Low Saturation": "\u12DD\u1245\u1270\u129B \u1218\u1320\u1295 \u12EB\u1208\u12CD \u1240\u1208\u121D",
      Monochrome: "\u12A0\u1295\u12F0\u129B \u1240\u1208\u121D",
      Tools: "\u1218\u1233\u122A\u12EB\u12CE\u127D",
      "Reading Guide": "\u12E8\u1295\u1263\u1265 \u1218\u1218\u122A\u12EB",
      "Stop Animations": "\u12A0\u1295\u12F2\u1236\u127D\u1295 \u12A0\u1241\u121D",
      "Big Cursor": "\u1275\u120D\u1245 \u12A0\u12DD\u122B\u122D",
      "Increase Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1233\u12F5\u130D",
      "Decrease Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1233\u1295\u1235",
      "Letter Spacing": "\u12E8\u134A\u12F0\u120D \u12AD\u134D\u1270\u1275",
      "Line Height": "\u12E8\u1218\u1235\u1218\u122D \u12A8\u134D\u1273",
      "Font Weight": "\u12E8\u134A\u12F0\u120D \u12AD\u1265\u12F0\u1275",
      "Dyslexia Font": "\u12E8\u12F2\u1235\u120C\u12AD\u1232\u12EB \u134A\u12F0\u120D",
      Language: "\u124B\u1295\u124B",
      "Open Accessibility Menu": "\u12E8\u1270\u12F0\u1228\u1230 \u121D\u1293\u120C\u1295 \u12AD\u1348\u1275"
    };
  }
});

// src/locales/ar.json
var require_ar = __commonJS({
  "src/locales/ar.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
      "Reset settings": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
      Close: "\u0625\u063A\u0644\u0627\u0642",
      "Content Adjustments": "\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
      "Adjust Font Size": "\u062A\u0639\u062F\u064A\u0644 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
      "Highlight Title": "\u062A\u0633\u0644\u064A\u0637 \u0627\u0644\u0636\u0648\u0621 \u0639\u0644\u0649 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
      "Highlight Links": "\u062A\u0633\u0644\u064A\u0637 \u0627\u0644\u0636\u0648\u0621 \u0639\u0644\u0649 \u0627\u0644\u0631\u0648\u0627\u0628\u0637",
      "Readable Font": "\u062E\u0637 \u0633\u0647\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
      "Color Adjustments": "\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
      "Dark Contrast": "\u062A\u0628\u0627\u064A\u0646 \u062F\u0627\u0643\u0646",
      "Light Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0641\u0627\u062A\u062D",
      "High Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0639\u0627\u0644\u064A",
      "High Saturation": "\u062A\u0634\u0628\u0639 \u0639\u0627\u0644\u064A",
      "Low Saturation": "\u062A\u0634\u0628\u0639 \u0645\u0646\u062E\u0641\u0636",
      Monochrome: "\u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646",
      Tools: "\u0623\u062F\u0648\u0627\u062A",
      "Reading Guide": "\u062F\u0644\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
      "Stop Animations": "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629",
      "Big Cursor": "\u0645\u0624\u0634\u0631 \u0643\u0628\u064A\u0631",
      "Increase Font Size": "\u0632\u064A\u0627\u062F\u0629 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
      "Decrease Font Size": "\u062A\u0642\u0644\u064A\u0644 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
      "Letter Spacing": "\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u062D\u0631\u0648\u0641",
      "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0637\u0631",
      "Font Weight": "\u0633\u0645\u0627\u0643\u0629 \u0627\u0644\u062E\u0637",
      "Dyslexia Font": "\u062E\u0637 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0644\u0645\u0646 \u064A\u0639\u0627\u0646\u0648\u0646 \u0645\u0646 \u0639\u0633\u0631 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
      Language: "\u0627\u0644\u0644\u063A\u0629",
      "Open Accessibility Menu": "\u0627\u0641\u062A\u062D \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0648\u0635\u0648\u0644"
    };
  }
});

// src/locales/bg.json
var require_bg = __commonJS({
  "src/locales/bg.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u041C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
      "Reset settings": "\u041D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435",
      Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
      "Content Adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E",
      "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Highlight Title": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u0442\u043E",
      "Highlight Links": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0438\u0442\u0435",
      "Readable Font": "\u0427\u0435\u0442\u0438\u043C \u0448\u0440\u0438\u0444\u0442",
      "Color Adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435",
      "Dark Contrast": "\u0422\u044A\u043C\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "Light Contrast": "\u0421\u0432\u0435\u0442\u044A\u043B \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Contrast": "\u0412\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
      "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
      Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u0435\u043D",
      Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
      "Reading Guide": "\u0420\u044A\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0437\u0430 \u0447\u0435\u0442\u0435\u043D\u0435",
      "Stop Animations": "\u0421\u043F\u0440\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438\u0442\u0435",
      "Big Cursor": "\u0413\u043E\u043B\u044F\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
      "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Decrease Font Size": "\u041D\u0430\u043C\u0430\u043B\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Letter Spacing": "\u0420\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0431\u0443\u043A\u0432\u0438\u0442\u0435",
      "Line Height": "\u0412\u0438\u0441\u043E\u0447\u0438\u043D\u0430 \u043D\u0430 \u0440\u0435\u0434\u0430",
      "Font Weight": "\u0414\u0435\u0431\u0435\u043B\u0438\u043D\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0437\u0430 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u044F",
      Language: "\u0415\u0437\u0438\u043A",
      "Open Accessibility Menu": "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442"
    };
  }
});

// src/locales/bn.json
var require_bn = __commonJS({
  "src/locales/bn.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1",
      "Reset settings": "\u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8",
      Close: "\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
      "Content Adjustments": "\u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
      "Adjust Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
      "Highlight Title": "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
      "Highlight Links": "\u09B2\u09BF\u0999\u09CD\u0995\u0997\u09C1\u09B2\u09BF \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
      "Readable Font": "\u09AA\u09A0\u09A8\u09C0\u09AF\u09BC \u09AB\u09A8\u09CD\u099F",
      "Color Adjustments": "\u09B0\u0999 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
      "Dark Contrast": "\u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u09C0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
      "Light Contrast": "\u0986\u09B2\u09CB\u0995\u09BF\u09A4 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
      "High Contrast": "\u0989\u099A\u09CD\u099A \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
      "High Saturation": "\u0989\u099A\u09CD\u099A \u09B8\u09A4\u09CD\u09B0\u09BE\u099C\u09A8",
      "Low Saturation": "\u09A8\u09BF\u09AE\u09CD\u09A8 \u09B8\u09A4\u09CD\u09B0\u09BE\u099C\u09A8",
      Monochrome: "\u098F\u0995\u09B0\u0999",
      Tools: "\u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE",
      "Reading Guide": "\u09AA\u09A1\u09BC\u09BE\u09B0 \u0997\u09BE\u0987\u09A1",
      "Stop Animations": "\u0985\u09CD\u09AF\u09BE\u09A8\u09BF\u09AE\u09C7\u09B6\u09A8 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
      "Big Cursor": "\u09AC\u09A1\u09BC \u0995\u09BE\u09B0\u09CD\u09B8\u09B0",
      "Increase Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09AC\u09BE\u09A1\u09BC\u09BE\u09A8",
      "Decrease Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u0995\u09AE\u09BE\u09A8",
      "Letter Spacing": "\u0985\u0995\u09CD\u09B7\u09B0 \u09AC\u09BF\u09B0\u09BE\u099F\u09BF",
      "Line Height": "\u09B2\u09BE\u0987\u09A8 \u0989\u099A\u09CD\u099A\u09A4\u09BE",
      "Font Weight": "\u09AB\u09A8\u09CD\u099F \u0993\u099C\u09A8",
      "Dyslexia Font": "\u09A1\u09BE\u0987\u09B8\u09B2\u09C7\u0995\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AB\u09A8\u09CD\u099F",
      Language: "\u09AD\u09BE\u09B7\u09BE",
      "Open Accessibility Menu": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1 \u0996\u09CB\u09B2\u09C1\u09A8"
    };
  }
});

// src/locales/ca.json
var require_ca = __commonJS({
  "src/locales/ca.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Men\xFA d'accessibilitat",
      "Reset settings": "Restablir configuraci\xF3",
      Close: "Tancar",
      "Content Adjustments": "Ajustos de contingut",
      "Adjust Font Size": "Ajustar la mida de la font",
      "Highlight Title": "Destacar t\xEDtol",
      "Highlight Links": "Destacar enlla\xE7os",
      "Readable Font": "Font llegible",
      "Color Adjustments": "Ajustos de color",
      "Dark Contrast": "Contrast fosc",
      "Light Contrast": "Contrast clar",
      "High Contrast": "Alt contrast",
      "High Saturation": "Alta saturaci\xF3",
      "Low Saturation": "Baixa saturaci\xF3",
      Monochrome: "Monocrom",
      Tools: "Eines",
      "Reading Guide": "Guia de lectura",
      "Stop Animations": "Aturar animacions",
      "Big Cursor": "Cursor gran",
      "Increase Font Size": "Augmentar mida de la font",
      "Decrease Font Size": "Reduir mida de la font",
      "Letter Spacing": "Espaiat entre lletres",
      "Line Height": "Al\xE7ada de l\xEDnia",
      "Font Weight": "Gruix de la font",
      "Dyslexia Font": "Font per a disl\xE8xia",
      Language: "Idioma",
      "Open Accessibility Menu": "Obrir men\xFA d'accessibilitat"
    };
  }
});

// src/locales/cs.json
var require_cs = __commonJS({
  "src/locales/cs.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "P\u0159\xEDstupnostn\xED menu",
      "Reset settings": "Obnovit nastaven\xED",
      Close: "Zav\u0159\xEDt",
      "Content Adjustments": "\xDApravy obsahu",
      "Adjust Font Size": "Nastavit velikost p\xEDsma",
      "Highlight Title": "Zv\xFDraznit nadpis",
      "Highlight Links": "Zv\xFDraznit odkazy",
      "Readable Font": "\u010Citeln\xFD font",
      "Color Adjustments": "Nastaven\xED barev",
      "Dark Contrast": "Tmav\xFD kontrast",
      "Light Contrast": "Sv\u011Btl\xFD kontrast",
      "High Contrast": "Vysok\xFD kontrast",
      "High Saturation": "Vysok\xE1 saturace",
      "Low Saturation": "N\xEDzk\xE1 saturace",
      Monochrome: "Monochromatick\xFD",
      Tools: "N\xE1stroje",
      "Reading Guide": "Pr\u016Fvodce \u010Dten\xEDm",
      "Stop Animations": "Zastavit animace",
      "Big Cursor": "Velk\xFD kurzor",
      "Increase Font Size": "Zv\u011Bt\u0161it velikost p\xEDsma",
      "Decrease Font Size": "Zmen\u0161it velikost p\xEDsma",
      "Letter Spacing": "Mezery mezi p\xEDsmeny",
      "Line Height": "V\xFD\u0161ka \u0159\xE1dku",
      "Font Weight": "Tlou\u0161\u0165ka p\xEDsma",
      "Dyslexia Font": "Dyslexick\xFD font",
      Language: "Jazyk",
      "Open Accessibility Menu": "Otev\u0159\xEDt p\u0159\xEDstupnostn\xED menu"
    };
  }
});

// src/locales/da.json
var require_da = __commonJS({
  "src/locales/da.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Tilg\xE6ngelighedsmenu",
      "Reset settings": "Nulstil indstillinger",
      Close: "Luk",
      "Content Adjustments": "Justeringer af indhold",
      "Adjust Font Size": "Juster skriftst\xF8rrelse",
      "Highlight Title": "Fremh\xE6v titel",
      "Highlight Links": "Fremh\xE6v links",
      "Readable Font": "L\xE6sbar skrifttype",
      "Color Adjustments": "Farvejusteringer",
      "Dark Contrast": "M\xF8rk kontrast",
      "Light Contrast": "Lys kontrast",
      "High Contrast": "H\xF8j kontrast",
      "High Saturation": "H\xF8j m\xE6tning",
      "Low Saturation": "Lav m\xE6tning",
      Monochrome: "Monokrom",
      Tools: "V\xE6rkt\xF8jer",
      "Reading Guide": "L\xE6sevejledning",
      "Stop Animations": "Stop animationer",
      "Big Cursor": "Stor mark\xF8r",
      "Increase Font Size": "\xD8g skriftst\xF8rrelse",
      "Decrease Font Size": "Mindsk skriftst\xF8rrelse",
      "Letter Spacing": "Bogstavafstand",
      "Line Height": "Linjeh\xF8jde",
      "Font Weight": "Skrifttypev\xE6gt",
      "Dyslexia Font": "Ordblinde-skrifttype",
      Language: "Sprog",
      "Open Accessibility Menu": "\xC5bn tilg\xE6ngelighedsmenu"
    };
  }
});

// src/locales/de.json
var require_de = __commonJS({
  "src/locales/de.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Barrierefreiheit",
      "Reset settings": "Einstellungen zur\xFCcksetzen",
      Close: "Schlie\xDFen",
      "Content Adjustments": "Inhaltsanpassungen",
      "Adjust Font Size": "Schriftgr\xF6\xDFe anpassen",
      "Highlight Title": "Titel hervorheben",
      "Highlight Links": "Links hervorheben",
      "Readable Font": "Lesbare Schrift",
      "Color Adjustments": "Farbanpassungen",
      "Dark Contrast": "Dunkler Kontrast",
      "Light Contrast": "Heller Kontrast",
      "High Contrast": "Hoher Kontrast",
      "High Saturation": "Hohe Farbs\xE4ttigung",
      "Low Saturation": "Niedrige Farbs\xE4ttigung",
      Monochrome: "Monochrom",
      Tools: "Werkzeuge",
      "Reading Guide": "Lesehilfe",
      "Stop Animations": "Animationen stoppen",
      "Big Cursor": "Gro\xDFer Cursor",
      "Increase Font Size": "Schriftgr\xF6\xDFe vergr\xF6\xDFern",
      "Decrease Font Size": "Schriftgr\xF6\xDFe verkleinern",
      "Letter Spacing": "Zeichenabstand",
      "Line Height": "Zeilenh\xF6he",
      "Font Weight": "Schriftst\xE4rke",
      "Dyslexia Font": "Dyslexie-Schrift",
      Language: "Sprache",
      "Open Accessibility Menu": "Barrierefreiheitsmen\xFC \xF6ffnen"
    };
  }
});

// src/locales/el.json
var require_el = __commonJS({
  "src/locales/el.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u039C\u03B5\u03BD\u03BF\u03CD \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
      "Reset settings": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD",
      Close: "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
      "Content Adjustments": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5",
      "Adjust Font Size": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
      "Highlight Title": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C5",
      "Highlight Links": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BC\u03C9\u03BD",
      "Readable Font": "\u0395\u03C5\u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03C4\u03B7 \u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC",
      "Color Adjustments": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03C7\u03C1\u03C9\u03BC\u03AC\u03C4\u03C9\u03BD",
      "Dark Contrast": "\u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7 \u03C3\u03B5 \u03C3\u03BA\u03BF\u03CD\u03C1\u03BF",
      "Light Contrast": "\u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7 \u03C3\u03B5 \u03C6\u03C9\u03C4\u03B5\u03B9\u03BD\u03CC",
      "High Contrast": "\u03A5\u03C8\u03B7\u03BB\u03AE \u03B1\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
      "High Saturation": "\u03A5\u03C8\u03B7\u03BB\u03CC\u03C2 \u03BA\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
      "Low Saturation": "\u03A7\u03B1\u03BC\u03B7\u03BB\u03CC\u03C2 \u03BA\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
      Monochrome: "\u039C\u03BF\u03BD\u03CC\u03C7\u03C1\u03C9\u03BC\u03BF",
      Tools: "\u0395\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03B1",
      "Reading Guide": "\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2",
      "Stop Animations": "\u0391\u03C6\u03B1\u03AF\u03C1\u03B5\u03C3\u03B7 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2",
      "Big Cursor": "\u039C\u03B5\u03B3\u03AC\u03BB\u03BF\u03C2 \u03BA\u03AD\u03C1\u03C3\u03BF\u03C1\u03B1\u03C2",
      "Increase Font Size": "\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
      "Decrease Font Size": "\u039C\u03B5\u03AF\u03C9\u03C3\u03B7 \u03BC\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
      "Letter Spacing": "\u0394\u03B9\u03AC\u03BA\u03B5\u03BD\u03BF \u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD",
      "Line Height": "\u038E\u03C8\u03BF\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2",
      "Font Weight": "\u0392\u03AC\u03C1\u03BF\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
      "Dyslexia Font": "\u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03B3\u03B9\u03B1 \u03B4\u03C5\u03C3\u03BB\u03B5\u03BE\u03AF\u03B1",
      Language: "\u0393\u03BB\u03CE\u03C3\u03C3\u03B1",
      "Open Accessibility Menu": "\u0391\u03BD\u03BF\u03AF\u03BE\u03C4\u03B5 \u03C4\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD \u03C0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2"
    };
  }
});

// src/locales/en.json
var require_en = __commonJS({
  "src/locales/en.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Accessibility Menu",
      "Reset settings": "Reset settings",
      Close: "Close",
      "Content Adjustments": "Content Adjustments",
      "Adjust Font Size": "Adjust Font Size",
      "Highlight Title": "Highlight Title",
      "Highlight Links": "Highlight Links",
      "Readable Font": "Readable Font",
      "Color Adjustments": "Color Adjustments",
      "Dark Contrast": "Dark Contrast",
      "Light Contrast": "Light Contrast",
      "High Contrast": "High Contrast",
      "High Saturation": "High Saturation",
      "Low Saturation": "Low Saturation",
      Monochrome: "Monochrome",
      Tools: "Tools",
      "Reading Guide": "Reading Guide",
      "Stop Animations": "Stop Animations",
      "Big Cursor": "Big Cursor",
      "Increase Font Size": "Increase Font Size",
      "Decrease Font Size": "Decrease Font Size",
      "Letter Spacing": "Letter Spacing",
      "Line Height": "Line Height",
      "Font Weight": "Font Weight",
      "Dyslexia Font": "Dyslexia Font",
      Language: "Language",
      "Open Accessibility Menu": "Open Accessibility Menu"
    };
  }
});

// src/locales/es.json
var require_es = __commonJS({
  "src/locales/es.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Men\xFA de accesibilidad",
      "Reset settings": "Restablecer configuraci\xF3n",
      Close: "Cerrar",
      "Content Adjustments": "Ajustes de contenido",
      "Adjust Font Size": "Ajustar el tama\xF1o de fuente",
      "Highlight Title": "Destacar t\xEDtulo",
      "Highlight Links": "Destacar enlaces",
      "Readable Font": "Fuente legible",
      "Color Adjustments": "Ajustes de color",
      "Dark Contrast": "Contraste oscuro",
      "Light Contrast": "Contraste claro",
      "High Contrast": "Alto contraste",
      "High Saturation": "Alta saturaci\xF3n",
      "Low Saturation": "Baja saturaci\xF3n",
      Monochrome: "Monocromo",
      Tools: "Herramientas",
      "Reading Guide": "Gu\xEDa de lectura",
      "Stop Animations": "Detener animaciones",
      "Big Cursor": "Cursor grande",
      "Increase Font Size": "Aumentar tama\xF1o de fuente",
      "Decrease Font Size": "Reducir tama\xF1o de fuente",
      "Letter Spacing": "Espaciado entre letras",
      "Line Height": "Altura de l\xEDnea",
      "Font Weight": "Grosor de fuente",
      "Dyslexia Font": "Fuente para dislexia",
      Language: "Idioma",
      "Open Accessibility Menu": "Abrir men\xFA de accesibilidad"
    };
  }
});

// src/locales/fa.json
var require_fa = __commonJS({
  "src/locales/fa.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
      "Reset settings": "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
      Close: "\u0628\u0633\u062A\u0646",
      "Content Adjustments": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u062D\u062A\u0648\u0627",
      "Adjust Font Size": "\u062A\u0646\u0638\u06CC\u0645 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
      "Highlight Title": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0639\u0646\u0648\u0627\u0646",
      "Highlight Links": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0644\u06CC\u0646\u06A9\u200C\u0647\u0627",
      "Readable Font": "\u0641\u0648\u0646\u062A \u062E\u0648\u0627\u0646\u0627",
      "Color Adjustments": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0631\u0646\u06AF",
      "Dark Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u062A\u0627\u0631\u06CC\u06A9",
      "Light Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0631\u0648\u0634\u0646",
      "High Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
      "High Saturation": "\u0627\u0634\u0628\u0627\u0639 \u0628\u0627\u0644\u0627",
      "Low Saturation": "\u0627\u0634\u0628\u0627\u0639 \u067E\u0627\u06CC\u06CC\u0646",
      Monochrome: "\u062A\u06A9\u200C\u0631\u0646\u06AF",
      Tools: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
      "Reading Guide": "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062E\u0648\u0627\u0646\u062F\u0646",
      "Stop Animations": "\u062A\u0648\u0642\u0641 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627",
      "Big Cursor": "\u0645\u0624\u0634\u0631 \u0628\u0632\u0631\u06AF",
      "Increase Font Size": "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
      "Decrease Font Size": "\u06A9\u0627\u0647\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
      "Letter Spacing": "\u0641\u0627\u0635\u0644\u0647 \u0628\u06CC\u0646 \u062D\u0631\u0648\u0641",
      "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u062E\u0637",
      "Font Weight": "\u0648\u0632\u0646 \u0641\u0648\u0646\u062A",
      "Dyslexia Font": "\u0641\u0648\u0646\u062A \u062F\u06CC\u0633\u0644\u06A9\u0633\u06CC\u0627",
      Language: "\u0632\u0628\u0627\u0646",
      "Open Accessibility Menu": "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC"
    };
  }
});

// src/locales/fi.json
var require_fi = __commonJS({
  "src/locales/fi.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Saavutettavuusvalikko",
      "Reset settings": "Palauta asetukset",
      Close: "Sulje",
      "Content Adjustments": "Sis\xE4ll\xF6n s\xE4\xE4d\xF6t",
      "Adjust Font Size": "S\xE4\xE4d\xE4 fonttikokoa",
      "Highlight Title": "Korosta otsikko",
      "Highlight Links": "Korosta linkit",
      "Readable Font": "Helposti luettava fontti",
      "Color Adjustments": "V\xE4rien s\xE4\xE4d\xF6t",
      "Dark Contrast": "Tumma kontrasti",
      "Light Contrast": "Vaalea kontrasti",
      "High Contrast": "Korkea kontrasti",
      "High Saturation": "Korkea kyll\xE4isyys",
      "Low Saturation": "Matala kyll\xE4isyys",
      Monochrome: "Yksiv\xE4rinen",
      Tools: "Ty\xF6kalut",
      "Reading Guide": "Lukemisopas",
      "Stop Animations": "Pys\xE4yt\xE4 animaatiot",
      "Big Cursor": "Iso kohdistin",
      "Increase Font Size": "Suurenna fonttikokoa",
      "Decrease Font Size": "Pienenn\xE4 fonttikokoa",
      "Letter Spacing": "Kirjainten v\xE4listys",
      "Line Height": "Rivin korkeus",
      "Font Weight": "Fontin paksuus",
      "Dyslexia Font": "Dysleksiafontti",
      Language: "Kieli",
      "Open Accessibility Menu": "Avaa saavutettavuusvalikko"
    };
  }
});

// src/locales/fil.json
var require_fil = __commonJS({
  "src/locales/fil.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu ng Accessibility",
      "Reset settings": "I-reset ang mga setting",
      Close: "Isara",
      "Content Adjustments": "Ayusin ang Nilalaman",
      "Adjust Font Size": "I-adjust ang Laki ng Font",
      "Highlight Title": "I-highlight ang Pamagat",
      "Highlight Links": "I-highlight ang mga Link",
      "Readable Font": "Madaling Basahing Font",
      "Color Adjustments": "Ayusin ang Kulay",
      "Dark Contrast": "Madilim na Pagkakaiba",
      "Light Contrast": "Maliwanag na Pagkakaiba",
      "High Contrast": "Mataas na Pagkakaiba",
      "High Saturation": "Mataas na Saturation",
      "Low Saturation": "Mababang Saturation",
      Monochrome: "Monokrom",
      Tools: "Mga Kasangkapan",
      "Reading Guide": "Gabay sa Pagbabasa",
      "Stop Animations": "Itigil ang Mga Animasyon",
      "Big Cursor": "Malaking Cursor",
      "Increase Font Size": "Palakihin ang Laki ng Font",
      "Decrease Font Size": "Bawasan ang Laki ng Font",
      "Letter Spacing": "Espasyo ng mga Titik",
      "Line Height": "Taas ng Linya",
      "Font Weight": "Bigat ng Font",
      "Dyslexia Font": "Font para sa Dyslexia",
      Language: "Wika",
      "Open Accessibility Menu": "Buksan ang Menu ng Accessibility"
    };
  }
});

// src/locales/fr.json
var require_fr = __commonJS({
  "src/locales/fr.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu d'accessibilit\xE9",
      "Reset settings": "R\xE9initialiser les param\xE8tres",
      Close: "Fermer",
      "Content Adjustments": "Ajustements de contenu",
      "Adjust Font Size": "Ajuster la taille de police",
      "Highlight Title": "Surligner le titre",
      "Highlight Links": "Surligner les liens",
      "Readable Font": "Police lisible",
      "Color Adjustments": "Ajustements de couleur",
      "Dark Contrast": "Contraste fonc\xE9",
      "Light Contrast": "Contraste clair",
      "High Contrast": "Contraste \xE9lev\xE9",
      "High Saturation": "Saturation \xE9lev\xE9e",
      "Low Saturation": "Saturation faible",
      Monochrome: "Monochrome",
      Tools: "Outils",
      "Reading Guide": "Guide de lecture",
      "Stop Animations": "Arr\xEAter les animations",
      "Big Cursor": "Gros curseur",
      "Increase Font Size": "Augmenter la taille de police",
      "Decrease Font Size": "R\xE9duire la taille de police",
      "Letter Spacing": "Espacement des lettres",
      "Line Height": "Hauteur de ligne",
      "Font Weight": "Poids de la police",
      "Dyslexia Font": "Police dyslexie",
      Language: "Langue",
      "Open Accessibility Menu": "Ouvrir le menu d'accessibilit\xE9"
    };
  }
});

// src/locales/he.json
var require_he = __commonJS({
  "src/locales/he.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
      "Reset settings": "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
      Close: "\u05E1\u05D2\u05D5\u05E8",
      "Content Adjustments": "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05EA\u05D5\u05DB\u05DF",
      "Adjust Font Size": "\u05D4\u05EA\u05D0\u05DD \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
      "Highlight Title": "\u05D4\u05D3\u05D2\u05E9 \u05DB\u05D5\u05EA\u05E8\u05EA",
      "Highlight Links": "\u05D4\u05D3\u05D2\u05E9 \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
      "Readable Font": "\u05E4\u05D5\u05E0\u05D8 \u05E7\u05E8\u05D9\u05D0",
      "Color Adjustments": "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05E6\u05D1\u05E2",
      "Dark Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05DB\u05D4\u05D4",
      "Light Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D4\u05D9\u05E8\u05D4",
      "High Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",
      "High Saturation": "\u05E8\u05D5\u05D5\u05D9 \u05E6\u05D1\u05E2 \u05D2\u05D1\u05D5\u05D4",
      "Low Saturation": "\u05E8\u05D5\u05D5\u05D9 \u05E6\u05D1\u05E2 \u05E0\u05DE\u05D5\u05DA",
      Monochrome: "\u05DE\u05D5\u05E0\u05D5\u05DB\u05E8\u05D5\u05DD",
      Tools: "\u05DB\u05DC\u05D9\u05DD",
      "Reading Guide": "\u05DE\u05D3\u05E8\u05D9\u05DA \u05E7\u05E8\u05D9\u05D0\u05D4",
      "Stop Animations": "\u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA",
      "Big Cursor": "\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",
      "Increase Font Size": "\u05D4\u05D2\u05D3\u05DC \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
      "Decrease Font Size": "\u05D4\u05E7\u05D8\u05DF \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
      "Letter Spacing": "\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D9\u05DF \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      "Line Height": "\u05D2\u05D5\u05D1\u05D4 \u05E9\u05D5\u05E8\u05D4",
      "Font Weight": "\u05DE\u05E9\u05E7\u05DC \u05D4\u05E4\u05D5\u05E0\u05D8",
      "Dyslexia Font": "\u05E4\u05D5\u05E0\u05D8 \u05DC\u05D3\u05D9\u05E1\u05DC\u05E7\u05D8\u05D9\u05DD",
      Language: "\u05E9\u05E4\u05D4",
      "Open Accessibility Menu": "\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"
    };
  }
});

// src/locales/hi.json
var require_hi = __commonJS({
  "src/locales/hi.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u092A\u0939\u0941\u0901\u091A\u093F\u092F\u094B\u0917\u094D\u092F\u0924\u093E \u092E\u0947\u0928\u0942",
      "Reset settings": "\u0938\u0947\u091F\u093F\u0902\u0917 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902",
      Close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      "Content Adjustments": "\u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0938\u092E\u093E\u092F\u094B\u091C\u0928",
      "Adjust Font Size": "\u092B\u093C\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0947\u0902",
      "Highlight Title": "\u0936\u0940\u0930\u094D\u0937\u0915 \u0915\u094B \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
      "Highlight Links": "\u0932\u093F\u0902\u0915 \u0915\u094B \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
      "Readable Font": "\u092A\u0922\u093C\u0928\u0947 \u092F\u094B\u0917\u094D\u092F \u092B\u093C\u0949\u0928\u094D\u091F",
      "Color Adjustments": "\u0930\u0902\u0917 \u0938\u092E\u093E\u092F\u094B\u091C\u0928",
      "Dark Contrast": "\u0905\u0902\u0927\u0947\u0930\u093E \u0935\u093F\u0930\u094B\u0927",
      "Light Contrast": "\u092A\u094D\u0930\u0915\u093E\u0936 \u0935\u093F\u0930\u094B\u0927",
      "High Contrast": "\u0909\u091A\u094D\u091A \u0935\u093F\u0930\u094B\u0927",
      "High Saturation": "\u0909\u091A\u094D\u091A \u0938\u0902\u0924\u0941\u0932\u0928",
      "Low Saturation": "\u0928\u093F\u092E\u094D\u0928 \u0938\u0902\u0924\u0941\u0932\u0928",
      Monochrome: "\u090F\u0915\u0930\u0902\u0917",
      Tools: "\u0909\u092A\u0915\u0930\u0923",
      "Reading Guide": "\u092A\u0922\u093C\u0928\u0947 \u0915\u093E \u0917\u093E\u0907\u0921",
      "Stop Animations": "\u090F\u0928\u093F\u092E\u0947\u0936\u0928 \u0930\u094B\u0915\u0947\u0902",
      "Big Cursor": "\u092C\u0921\u093C\u093E \u0915\u0930\u094D\u0938\u0930",
      "Increase Font Size": "\u092B\u093C\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u092C\u0922\u093C\u093E\u090F\u0901",
      "Decrease Font Size": "\u092B\u093C\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0915\u092E \u0915\u0930\u0947\u0902",
      "Letter Spacing": "\u0905\u0915\u094D\u0937\u0930 \u0938\u094D\u092A\u0947\u0938\u093F\u0902\u0917",
      "Line Height": "\u0932\u093E\u0907\u0928 \u0915\u0940 \u090A\u0901\u091A\u093E\u0908",
      "Font Weight": "\u092B\u093C\u0949\u0928\u094D\u091F \u0935\u0947\u091F",
      "Dyslexia Font": "\u0935\u093F\u0935\u093F\u0927\u0924\u093E\u091C\u0928\u093F\u0924 \u0935\u093F\u092A\u0925\u0924\u093E \u092B\u093C\u0949\u0928\u094D\u091F",
      Language: "\u092D\u093E\u0937\u093E",
      "Open Accessibility Menu": "\u090F\u0915\u094D\u0938\u0947\u0938\u093F\u092C\u093F\u0932\u093F\u091F\u0940 \u092E\u0947\u0928\u0942 \u0916\u094B\u0932\u0947\u0902"
    };
  }
});

// src/locales/hr.json
var require_hr = __commonJS({
  "src/locales/hr.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Izbornik Pristupa\u010Dnosti",
      "Reset settings": "Resetiraj postavke",
      Close: "Zatvori",
      "Content Adjustments": "Prilagodbe Sadr\u017Eaja",
      "Adjust Font Size": "Prilagodi Veli\u010Dinu Fonta",
      "Highlight Title": "Istakni Naslove",
      "Highlight Links": "Istakni Poveznice",
      "Readable Font": "\u010Citljiv Font",
      "Color Adjustments": "Prilagodbe Boja",
      "Dark Contrast": "Tamni Kontrast",
      "Light Contrast": "Svijetli Kontrast",
      "High Contrast": "Visoki Kontrast",
      "High Saturation": "Visoka Zasi\u0107enost",
      "Low Saturation": "Niska Zasi\u0107enost",
      Monochrome: "Jednobojno",
      Tools: "Alati",
      "Reading Guide": "Vodi\u010D Za \u010Citanje",
      "Stop Animations": "Zaustavi Animacije",
      "Big Cursor": "Veliki Kursor",
      "Increase Font Size": "Pove\u0107aj Veli\u010Dinu Fonta",
      "Decrease Font Size": "Smanji Veli\u010Dinu Fonta",
      "Letter Spacing": "Razmak Izme\u0111u Slova",
      "Line Height": "Visina Linije",
      "Font Weight": "Debljina Fonta",
      "Dyslexia Font": "Font Za Disleksiju",
      Language: "Jezik",
      "Open Accessibility Menu": "Otvori Izbornik Pristupa\u010Dnosti"
    };
  }
});

// src/locales/hu.json
var require_hu = __commonJS({
  "src/locales/hu.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC",
      "Reset settings": "Be\xE1ll\xEDt\xE1sok vissza\xE1ll\xEDt\xE1sa",
      Close: "Bez\xE1r\xE1s",
      "Content Adjustments": "Tartalom be\xE1ll\xEDt\xE1sai",
      "Adjust Font Size": "Bet\u0171m\xE9ret be\xE1ll\xEDt\xE1sa",
      "Highlight Title": "C\xEDm kiemel\xE9se",
      "Highlight Links": "Linkek kiemel\xE9se",
      "Readable Font": "Olvashat\xF3 bet\u0171t\xEDpus",
      "Color Adjustments": "Sz\xEDnbe\xE1ll\xEDt\xE1sok",
      "Dark Contrast": "S\xF6t\xE9t kontraszt",
      "Light Contrast": "Vil\xE1gos kontraszt",
      "High Contrast": "Magas kontraszt",
      "High Saturation": "Magas tel\xEDtetts\xE9g",
      "Low Saturation": "Alacsony tel\xEDtetts\xE9g",
      Monochrome: "Monokr\xF3m",
      Tools: "Eszk\xF6z\xF6k",
      "Reading Guide": "Olvas\xE1si \xFAtmutat\xF3",
      "Stop Animations": "Anim\xE1ci\xF3k le\xE1ll\xEDt\xE1sa",
      "Big Cursor": "Nagy kurzor",
      "Increase Font Size": "Bet\u0171m\xE9ret n\xF6vel\xE9se",
      "Decrease Font Size": "Bet\u0171m\xE9ret cs\xF6kkent\xE9se",
      "Letter Spacing": "Bet\u0171t\xE1vols\xE1g",
      "Line Height": "Sor magass\xE1g",
      "Font Weight": "Bet\u0171t\xEDpus vastags\xE1ga",
      "Dyslexia Font": "Dyslexia bet\u0171t\xEDpus",
      Language: "Nyelv",
      "Open Accessibility Menu": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC megnyit\xE1sa"
    };
  }
});

// src/locales/id.json
var require_id = __commonJS({
  "src/locales/id.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu Aksesibilitas",
      "Reset settings": "Atur Ulang Pengaturan",
      Close: "Tutup",
      "Content Adjustments": "Penyesuaian Konten",
      "Adjust Font Size": "Sesuaikan Ukuran Font",
      "Highlight Title": "Sorot Judul",
      "Highlight Links": "Sorot Tautan",
      "Readable Font": "Font Mudah Dibaca",
      "Color Adjustments": "Penyesuaian Warna",
      "Dark Contrast": "Kontras Gelap",
      "Light Contrast": "Kontras Terang",
      "High Contrast": "Kontras Tinggi",
      "High Saturation": "Saturasi Tinggi",
      "Low Saturation": "Saturasi Rendah",
      Monochrome: "Monokrom",
      Tools: "Alat",
      "Reading Guide": "Panduan Membaca",
      "Stop Animations": "Hentikan Animasi",
      "Big Cursor": "Kursor Besar",
      "Increase Font Size": "Perbesar Ukuran Font",
      "Decrease Font Size": "Perkecil Ukuran Font",
      "Letter Spacing": "Jarak Huruf",
      "Line Height": "Tinggi Baris",
      "Font Weight": "Ketebalan Font",
      "Dyslexia Font": "Font Disleksia",
      Language: "Bahasa",
      "Open Accessibility Menu": "Buka menu aksesibilitas"
    };
  }
});

// src/locales/it.json
var require_it = __commonJS({
  "src/locales/it.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu di accessibilit\xE0",
      "Reset settings": "Ripristina impostazioni",
      Close: "Chiudi",
      "Content Adjustments": "Regolazioni del contenuto",
      "Adjust Font Size": "Regola la dimensione del carattere",
      "Highlight Title": "Evidenzia il titolo",
      "Highlight Links": "Evidenzia i collegamenti",
      "Readable Font": "Carattere leggibile",
      "Color Adjustments": "Regolazioni del colore",
      "Dark Contrast": "Contrasto scuro",
      "Light Contrast": "Contrasto chiaro",
      "High Contrast": "Alto contrasto",
      "High Saturation": "Alta saturazione",
      "Low Saturation": "Bassa saturazione",
      Monochrome: "Monocromatico",
      Tools: "Strumenti",
      "Reading Guide": "Guida alla lettura",
      "Stop Animations": "Arresta le animazioni",
      "Big Cursor": "Cursore grande",
      "Increase Font Size": "Aumenta la dimensione del carattere",
      "Decrease Font Size": "Diminuisci la dimensione del carattere",
      "Letter Spacing": "Spaziatura delle lettere",
      "Line Height": "Altezza della linea",
      "Font Weight": "Peso del carattere",
      "Dyslexia Font": "Carattere per dislessia",
      Language: "Lingua",
      "Open Accessibility Menu": "Apri il menu di accessibilit\xE0"
    };
  }
});

// src/locales/ja.json
var require_ja = __commonJS({
  "src/locales/ja.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC",
      "Reset settings": "\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8",
      Close: "\u9589\u3058\u308B",
      "Content Adjustments": "\u30B3\u30F3\u30C6\u30F3\u30C4\u8ABF\u6574",
      "Adjust Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u8ABF\u6574",
      "Highlight Title": "\u30BF\u30A4\u30C8\u30EB\u3092\u5F37\u8ABF\u8868\u793A",
      "Highlight Links": "\u30EA\u30F3\u30AF\u3092\u5F37\u8ABF\u8868\u793A",
      "Readable Font": "\u8AAD\u307F\u3084\u3059\u3044\u30D5\u30A9\u30F3\u30C8",
      "Color Adjustments": "\u8272\u306E\u8ABF\u6574",
      "Dark Contrast": "\u30C0\u30FC\u30AF\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
      "Light Contrast": "\u30E9\u30A4\u30C8\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
      "High Contrast": "\u9AD8\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
      "High Saturation": "\u5F69\u5EA6\u304C\u9AD8\u3044",
      "Low Saturation": "\u5F69\u5EA6\u304C\u4F4E\u3044",
      Monochrome: "\u30E2\u30CE\u30AF\u30ED\u30FC\u30E0",
      Tools: "\u30C4\u30FC\u30EB",
      "Reading Guide": "\u8AAD\u307F\u4E0A\u3052\u30AC\u30A4\u30C9",
      "Stop Animations": "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62",
      "Big Cursor": "\u5927\u304D\u306A\u30AB\u30FC\u30BD\u30EB",
      "Increase Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u5927\u304D\u304F\u3059\u308B",
      "Decrease Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u5C0F\u3055\u304F\u3059\u308B",
      "Letter Spacing": "\u6587\u5B57\u9593\u9694",
      "Line Height": "\u884C\u306E\u9AD8\u3055",
      "Font Weight": "\u30D5\u30A9\u30F3\u30C8\u306E\u592A\u3055",
      "Dyslexia Font": "\u30C7\u30A3\u30B9\u30EC\u30AF\u30B7\u30A2\u7528\u30D5\u30A9\u30F3\u30C8",
      Language: "\u8A00\u8A9E",
      "Open Accessibility Menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"
    };
  }
});

// src/locales/ka.json
var require_ka = __commonJS({
  "src/locales/ka.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3",
      "Reset settings": "\u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0",
      Close: "\u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0",
      "Content Adjustments": "\u10E8\u10D8\u10D2\u10D7\u10D0\u10D5\u10E1\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
      "Adjust Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
      "Highlight Title": "\u10E1\u10D0\u10D7\u10D0\u10E3\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
      "Highlight Links": "\u10D1\u10DB\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
      "Readable Font": "\u10EC\u10D0\u10D9\u10D8\u10D7\u10EE\u10D5\u10D0\u10D3\u10D8 \u10E2\u10D4\u10E5\u10E1\u10E2\u10D4\u10D1\u10D8",
      "Color Adjustments": "\u10E4\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
      "Dark Contrast": "\u10D1\u10DC\u10D4\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
      "Light Contrast": "\u10DC\u10D0\u10D7\u10D4\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
      "High Contrast": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
      "High Saturation": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
      "Low Saturation": "\u10D3\u10D0\u10D1\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
      Monochrome: "\u10D4\u10E0\u10D7\u10E4\u10D4\u10E0\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E1\u10D0\u10EE\u10E3\u10DA\u10D4\u10D1\u10D0",
      Tools: "\u10EE\u10D4\u10DA\u10E1\u10D0\u10EC\u10E7\u10DD\u10D4\u10D1\u10D8",
      "Reading Guide": "\u10D9\u10D8\u10D7\u10EE\u10D5\u10D8\u10E1 \u10D2\u10D0\u10DB\u10E7\u10DD\u10DA\u10D8 \u10D6\u10DD\u10DA\u10D8",
      "Stop Animations": "\u10D0\u10DC\u10D8\u10DB\u10D0\u10EA\u10D8\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E9\u10D4\u10E0\u10D4\u10D1\u10D0",
      "Big Cursor": "\u10D3\u10D8\u10D3\u10D8 \u10D9\u10E3\u10E0\u10E1\u10DD\u10E0\u10D8",
      "Increase Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10D2\u10D0\u10D6\u10E0\u10D3\u10D0",
      "Decrease Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10E8\u10D4\u10DB\u10EA\u10D8\u10E0\u10D4\u10D1\u10D0",
      "Letter Spacing": "\u10D0\u10E1\u10DD\u10D4\u10D1\u10E1 \u10E8\u10DD\u10E0\u10D8\u10E1 \u10D3\u10D0\u10E8\u10DD\u10E0\u10D4\u10D1\u10D0",
      "Line Height": "\u10EE\u10D0\u10D6\u10D8\u10E1 \u10E1\u10D8\u10DB\u10D0\u10E6\u10DA\u10D4",
      "Font Weight": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10EC\u10DD\u10DC\u10D0",
      "Dyslexia Font": "\u10D3\u10D8\u10E1\u10DA\u10D4\u10E5\u10E1\u10D8\u10E3\u10E0\u10D8 \u10E4\u10DD\u10DC\u10E2\u10D8",
      Language: "\u10D4\u10DC\u10D0",
      "Open Accessibility Menu": "\u10D2\u10D0\u10EE\u10E1\u10D4\u10DC\u10D8 \u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3"
    };
  }
});

// src/locales/kn.json
var require_kn = __commonJS({
  "src/locales/kn.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1",
      "Reset settings": "\u0CB8\u0CC6\u0C9F\u0CCD\u0C9F\u0CBF\u0C82\u0C97\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CB0\u0CC1\u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
      Close: "\u0CAE\u0CC1\u0C9A\u0CCD\u0C9A\u0CBF",
      "Content Adjustments": "\u0CB5\u0CBF\u0CB7\u0CAF\u0CA6 \u0CB9\u0CCA\u0C82\u0CA6\u0CBE\u0CA3\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1",
      "Adjust Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
      "Highlight Title": "\u0CB6\u0CC0\u0CB0\u0CCD\u0CB7\u0CBF\u0C95\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "Highlight Links": "\u0CB2\u0CBF\u0C82\u0C95\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "Readable Font": "\u0C93\u0CA6\u0CB2\u0CC1 \u0CB8\u0CC1\u0CB2\u0CAD\u0CB5\u0CBE\u0CA6 \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
      "Color Adjustments": "\u0CAC\u0CA3\u0CCD\u0CA3 \u0CB9\u0CCA\u0C82\u0CA6\u0CBE\u0CA3\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1",
      "Dark Contrast": "\u0C95\u0CA4\u0CCD\u0CA4\u0CB2\u0CC6 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
      "Light Contrast": "\u0CB9\u0C97\u0CC1\u0CB0 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
      "High Contrast": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
      "High Saturation": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB8\u0CBE\u0CA4\u0CC1\u0CB0\u0CCD\u0CA8\u0CA4\u0CC6",
      "Low Saturation": "\u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CB8\u0CBE\u0CA4\u0CC1\u0CB0\u0CCD\u0CA8\u0CA4\u0CC6",
      Monochrome: "\u0C8F\u0C95\u0CB5\u0CB0\u0CCD\u0CA3",
      Tools: "\u0C89\u0CAA\u0C95\u0CB0\u0CA3\u0C97\u0CB3\u0CC1",
      "Reading Guide": "\u0C93\u0CA6\u0CC1\u0CB5 \u0CAE\u0CBE\u0CB0\u0CCD\u0C97\u0CA6\u0CB0\u0CCD\u0CB6\u0CBF",
      "Stop Animations": "\u0C85\u0CA8\u0CBF\u0CAE\u0CC7\u0CB6\u0CA8\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBF\u0CB8\u0CBF",
      "Big Cursor": "\u0CA6\u0CCA\u0CA1\u0CCD\u0CA1 \u0C95\u0CB0\u0CCD\u0CB8\u0CB0\u0CCD",
      "Increase Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CBF\u0CB8\u0CBF",
      "Decrease Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CAE\u0CBE\u0CA1\u0CBF",
      "Letter Spacing": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0C97\u0CB3 \u0CA8\u0CA1\u0CC1\u0CB5\u0CBF\u0CA8 \u0C85\u0C82\u0CA4\u0CB0",
      "Line Height": "\u0CB8\u0CBE\u0CB2\u0CBF\u0CA8 \u0C8E\u0CA4\u0CCD\u0CA4\u0CB0",
      "Font Weight": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0CA4\u0CC2\u0C95",
      "Dyslexia Font": "\u0CA1\u0CBF\u0CB8\u0CCD\u0CB2\u0CC6\u0C95\u0CCD\u0CB8\u0CBF\u0CAF\u0CBE \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
      Language: "\u0CAD\u0CBE\u0CB7\u0CC6",
      "Open Accessibility Menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1 \u0C85\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA4\u0CC6\u0CB0\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF"
    };
  }
});

// src/locales/ko.json
var require_ko = __commonJS({
  "src/locales/ko.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\uC811\uADFC\uC131 \uBA54\uB274",
      "Reset settings": "\uC124\uC815 \uCD08\uAE30\uD654",
      Close: "\uB2EB\uAE30",
      "Content Adjustments": "\uCEE8\uD150\uCE20 \uC870\uC815",
      "Adjust Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC870\uC815",
      "Highlight Title": "\uC81C\uBAA9 \uAC15\uC870",
      "Highlight Links": "\uB9C1\uD06C \uAC15\uC870",
      "Readable Font": "\uC77D\uAE30 \uC26C\uC6B4 \uAE00\uAF34",
      "Color Adjustments": "\uC0C9\uC0C1 \uC870\uC815",
      "Dark Contrast": "\uC5B4\uB450\uC6B4 \uB300\uBE44",
      "Light Contrast": "\uBC1D\uC740 \uB300\uBE44",
      "High Contrast": "\uB192\uC740 \uB300\uBE44",
      "High Saturation": "\uB192\uC740 \uCC44\uB3C4",
      "Low Saturation": "\uB0AE\uC740 \uCC44\uB3C4",
      Monochrome: "\uB2E8\uC0C9",
      Tools: "\uB3C4\uAD6C",
      "Reading Guide": "\uC77D\uAE30 \uAC00\uC774\uB4DC",
      "Stop Animations": "\uC560\uB2C8\uBA54\uC774\uC158 \uC911\uC9C0",
      "Big Cursor": "\uD070 \uCEE4\uC11C",
      "Increase Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC99D\uAC00",
      "Decrease Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uAC10\uC18C",
      "Letter Spacing": "\uC790\uAC04",
      "Line Height": "\uC904 \uAC04\uACA9",
      "Font Weight": "\uAE00\uAF34 \uB450\uAED8",
      "Dyslexia Font": "\uB09C\uB3C5\uC99D \uAE00\uAF34",
      Language: "\uC5B8\uC5B4",
      "Open Accessibility Menu": "\uC811\uADFC\uC131 \uBA54\uB274 \uC5F4\uAE30"
    };
  }
});

// src/locales/ku.json
var require_ku = __commonJS({
  "src/locales/ku.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menuya Gih\xEE\u015Ftin\xEA",
      "Reset settings": "M\xEEheng\xEAn vegerandin\xEA",
      Close: "Bigire",
      "Content Adjustments": "Guhertin\xEAn Naverok\xEA",
      "Adjust Font Size": "Mezinahiya Font\xEA biguher\xEEne",
      "Highlight Title": "Sernav\xEA n\xEE\u015Fan bide",
      "Highlight Links": "Gir\xEAdan\xEAn n\xEE\u015Fan bide",
      "Readable Font": "Fonta Xwendin\xEA",
      "Color Adjustments": "Guhertin\xEAn Reng\xEA",
      "Dark Contrast": "P\xEAvajoya Tar\xEE",
      "Light Contrast": "P\xEAvajoya Ronah\xEE",
      "High Contrast": "P\xEAvajoya Bilind",
      "High Saturation": "Tevgeriya Bilind",
      "Low Saturation": "Tevgeriya Nizm",
      Monochrome: "Reng\xEA Yekane",
      Tools: "Am\xFBr",
      "Reading Guide": "Rehbera Xwendin\xEA",
      "Stop Animations": "An\xEEmasyonan Rawest\xEEne",
      "Big Cursor": "Kursor\xEA Mezin",
      "Increase Font Size": "Mezinahiya Font\xEA Mezinkirin",
      "Decrease Font Size": "Mezinahiya Font\xEA K\xEAmkirin",
      "Letter Spacing": "D\xFBrahiya T\xEEpan",
      "Line Height": "Bilindahiya R\xEAz\xEA",
      "Font Weight": "Giraniya Font\xEA",
      "Dyslexia Font": "Fonta Disleksiya",
      Language: "Ziman",
      "Open Accessibility Menu": "Menuya Gih\xEE\u015Ftin\xEA Vekir\xEE"
    };
  }
});

// src/locales/lb.json
var require_lb = __commonJS({
  "src/locales/lb.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Accessibility Menu",
      "Reset settings": "Astellungen zr\xE9cksetzen",
      Close: "Zoumaachen",
      "Content Adjustments": "Inhalt Unpassungen",
      "Adjust Font Size": "Schr\xEBftgr\xE9isst unpassen",
      "Highlight Title": "Titel mark\xE9ieren",
      "Highlight Links": "Links mark\xE9ieren",
      "Readable Font": "Liesbar Schr\xEBft",
      "Color Adjustments": "Faarfleg Unpassungen",
      "Dark Contrast": "D\xE4ischteren Kontrast",
      "Light Contrast": "Hellen Kontrast",
      "High Contrast": "H\xE9ijen Kontrast",
      "High Saturation": "H\xE9ij S\xE4ttigung",
      "Low Saturation": "Niddr\xE9g S\xE4ttigung",
      Monochrome: "Monochrom",
      Tools: "Tools",
      "Reading Guide": "Guide fir ze liesen",
      "Stop Animations": "Animatiounen stoppen",
      "Big Cursor": "Groussen Cursor",
      "Increase Font Size": "Schr\xEBftgr\xE9isst erh\xE9ijen",
      "Decrease Font Size": "Schr\xEBftgr\xE9isst ernidderegen",
      "Letter Spacing": "Zeechenofstand",
      "Line Height": "Linn H\xE9icht",
      "Font Weight": "Schr\xEBftgewiicht",
      "Dyslexia Font": "Schr\xEBft fir Dyslexie",
      Language: "Sprooch",
      "Open Accessibility Menu": "Accessibility Menu opmaachen"
    };
  }
});

// src/locales/lv.json
var require_lv = __commonJS({
  "src/locales/lv.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Pieejam\u012Bbas izv\u0113lne",
      "Reset settings": "Atiestat\u012Bt iestat\u012Bjumus",
      Close: "Aizv\u0113rt",
      "Content Adjustments": "Satura piel\u0101gojumi",
      "Adjust Font Size": "Main\u012Bt fonta izm\u0113ru",
      "Highlight Title": "Izcelt virsrakstu",
      "Highlight Links": "Izcelt saites",
      "Readable Font": "Las\u0101ms fonts",
      "Color Adjustments": "Kr\u0101su piel\u0101gojumi",
      "Dark Contrast": "Tum\u0161s kontrasts",
      "Light Contrast": "Zems kontrasts",
      "High Contrast": "Augsts kontrasts",
      "High Saturation": "Augsta pies\u0101tin\u0101t\u012Bba",
      "Low Saturation": "Zema pies\u0101tin\u0101t\u012Bba",
      Monochrome: "Monohroms",
      Tools: "R\u012Bki",
      "Reading Guide": "Las\u012B\u0161anas pal\u012Bgl\u012Bnija",
      "Stop Animations": "Aptur\u0113t anim\u0101cijas",
      "Big Cursor": "Liels kursors",
      "Increase Font Size": "Palielin\u0101t fonta izm\u0113ru",
      "Decrease Font Size": "Samazin\u0101t fonta izm\u0113ru",
      "Letter Spacing": "Burtu atstatums",
      "Line Height": "Rindu augstums",
      "Font Weight": "Fonta biezums",
      "Dyslexia Font": "Disleksijas fonts",
      Language: "Valoda",
      "Open Accessibility Menu": "Atv\u0113rt pieejam\u012Bbas izv\u0113lni"
    };
  }
});

// src/locales/ml.json
var require_ml = __commonJS({
  "src/locales/ml.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41",
      "Reset settings": "\u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E \u0D2A\u0D41\u0D28\u0D03\u0D38\u0D1C\u0D4D\u0D1C\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
      Close: "\u0D05\u0D1F\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "Content Adjustments": "\u0D09\u0D33\u0D4D\u0D33\u0D1F\u0D15\u0D4D\u0D15 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
      "Adjust Font Size": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D\u0D31\u0D46 \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "Highlight Title": "\u0D36\u0D40\u0D7C\u0D37\u0D15\u0D02 \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "Highlight Links": "\u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D41\u0D15\u0D7E \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "Readable Font": "\u0D35\u0D3E\u0D2F\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D7B \u0D0E\u0D33\u0D41\u0D2A\u0D4D\u0D2A\u0D2E\u0D41\u0D33\u0D4D\u0D33 \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
      "Color Adjustments": "\u0D28\u0D3F\u0D31 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
      "Dark Contrast": "\u0D07\u0D30\u0D41\u0D23\u0D4D\u0D1F \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
      "Light Contrast": "\u0D07\u0D33\u0D02 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
      "High Contrast": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
      "High Saturation": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D38\u0D3E\u0D1A\u0D41\u0D30\u0D47\u0D37\u0D7B",
      "Low Saturation": "\u0D15\u0D41\u0D31\u0D1E\u0D4D\u0D1E \u0D38\u0D3E\u0D1A\u0D41\u0D30\u0D47\u0D37\u0D7B",
      Monochrome: "\u0D2E\u0D4B\u0D28\u0D4B\u0D15\u0D4D\u0D30\u0D4B\u0D02",
      Tools: "\u0D09\u0D2A\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
      "Reading Guide": "\u0D35\u0D3E\u0D2F\u0D28\u0D3E \u0D17\u0D48\u0D21\u0D4D",
      "Stop Animations": "\u0D06\u0D28\u0D3F\u0D2E\u0D47\u0D37\u0D28\u0D41\u0D15\u0D7E \u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D41\u0D15",
      "Big Cursor": "\u0D35\u0D32\u0D3F\u0D2F \u0D15\u0D7C\u0D38\u0D7C",
      "Increase Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D35\u0D7C\u0D26\u0D4D\u0D27\u0D3F\u0D2A\u0D4D\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "Decrease Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D41\u0D31\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "Letter Spacing": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D19\u0D4D\u0D19\u0D7E\u0D15\u0D4D\u0D15\u0D3F\u0D1F\u0D2F\u0D3F\u0D32\u0D46 \u0D07\u0D1F\u0D35\u0D4D",
      "Line Height": "\u0D32\u0D48\u0D7B \u0D09\u0D2F\u0D30\u0D02",
      "Font Weight": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D2D\u0D3E\u0D30\u0D02",
      "Dyslexia Font": "\u0D21\u0D3F\u0D38\u0D4D\u0D32\u0D46\u0D15\u0D4D\u0D38\u0D3F\u0D2F \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
      Language: "\u0D2D\u0D3E\u0D37",
      "Open Accessibility Menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41 \u0D24\u0D41\u0D31\u0D15\u0D4D\u0D15\u0D41\u0D15"
    };
  }
});

// src/locales/mn.json
var require_mn = __commonJS({
  "src/locales/mn.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u0446\u044D\u0441",
      "Reset settings": "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
      Close: "\u0425\u0430\u0430\u0445",
      "Content Adjustments": "\u0410\u0433\u0443\u0443\u043B\u0433\u044B\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0433\u0430",
      "Adjust Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
      "Highlight Title": "\u0413\u0430\u0440\u0447\u0433\u0438\u0439\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
      "Highlight Links": "\u0425\u043E\u043B\u0431\u043E\u043E\u0441\u0443\u0443\u0434\u044B\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
      "Readable Font": "\u0423\u043D\u0448\u0438\u0445\u0430\u0434 \u0445\u044F\u043B\u0431\u0430\u0440 \u0444\u043E\u043D\u0442",
      "Color Adjustments": "\u04E8\u043D\u0433\u04E9\u043D\u0438\u0439 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0433\u0430",
      "Dark Contrast": "\u0425\u0430\u0440\u0430\u043D\u0445\u0443\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
      "Light Contrast": "\u0413\u044D\u0440\u044D\u043B\u0442\u044D\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
      "High Contrast": "\u04E8\u043D\u0434\u04E9\u0440 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
      "High Saturation": "\u04E8\u043D\u0434\u04E9\u0440 \u0445\u0430\u043D\u0430\u043B\u0442",
      "Low Saturation": "\u0411\u0430\u0433\u0430 \u0445\u0430\u043D\u0430\u043B\u0442",
      Monochrome: "\u041D\u044D\u0433 \u04E9\u043D\u0433\u04E9",
      Tools: "\u0425\u044D\u0440\u044D\u0433\u0441\u043B\u04AF\u04AF\u0434",
      "Reading Guide": "\u0423\u043D\u0448\u0438\u0445 \u0433\u0430\u0440\u044B\u043D \u0430\u0432\u043B\u0430\u0433\u0430",
      "Stop Animations": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0439\u0433 \u0437\u043E\u0433\u0441\u043E\u043E\u0445",
      "Big Cursor": "\u0422\u043E\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
      "Increase Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u044D\u0445",
      "Decrease Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0431\u0430\u0433\u0430\u0441\u0433\u0430\u0445",
      "Letter Spacing": "\u04AE\u0441\u0433\u0438\u0439\u043D \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u0437\u0430\u0439",
      "Line Height": "\u041C\u04E9\u0440\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440",
      "Font Weight": "\u0424\u043E\u043D\u0442\u044B\u043D \u0436\u0438\u043D",
      "Dyslexia Font": "\u0414\u0438\u0441\u043B\u0435\u043A\u0441\u0438 \u0444\u043E\u043D\u0442",
      Language: "\u0425\u044D\u043B",
      "Open Accessibility Menu": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u0446\u044D\u0441\u0438\u0439\u0433 \u043D\u044D\u044D\u0445"
    };
  }
});

// src/locales/ms.json
var require_ms = __commonJS({
  "src/locales/ms.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu Aksesibiliti",
      "Reset settings": "Tetapkan semula tetapan",
      Close: "Tutup",
      "Content Adjustments": "Penyesuaian Kandungan",
      "Adjust Font Size": "Laraskan Saiz Fon",
      "Highlight Title": "Serlahkan Tajuk",
      "Highlight Links": "Serlahkan Pautan",
      "Readable Font": "Fon Mudah Baca",
      "Color Adjustments": "Penyesuaian Warna",
      "Dark Contrast": "Kontras Gelap",
      "Light Contrast": "Kontras Terang",
      "High Contrast": "Kontras Tinggi",
      "High Saturation": "Saturasi Tinggi",
      "Low Saturation": "Saturasi Rendah",
      Monochrome: "Monokrom",
      Tools: "Peralatan",
      "Reading Guide": "Panduan Membaca",
      "Stop Animations": "Hentikan Animasi",
      "Big Cursor": "Kursor Besar",
      "Increase Font Size": "Besarkan Saiz Fon",
      "Decrease Font Size": "Kecilkan Saiz Fon",
      "Letter Spacing": "Ruangan Huruf",
      "Line Height": "Ketinggian Garis",
      "Font Weight": "Ketebalan Fon",
      "Dyslexia Font": "Fon Dyslexia",
      Language: "Bahasa",
      "Open Accessibility Menu": "Buka menu kebolehcapaian"
    };
  }
});

// src/locales/my.json
var require_my = __commonJS({
  "src/locales/my.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038",
      "Reset settings": "\u1006\u1000\u103A\u1010\u1004\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u1010\u103A\u1019\u103E\u1010\u103A\u1015\u102B",
      Close: "\u1015\u102D\u1010\u103A\u1015\u102B",
      "Content Adjustments": "\u1021\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u101B\u102C \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
      "Adjust Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1015\u102B",
      "Highlight Title": "\u1001\u1031\u102B\u1004\u103A\u1038\u1005\u1009\u103A\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
      "Highlight Links": "\u101C\u1004\u1037\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
      "Readable Font": "\u1016\u1010\u103A\u101B\u1014\u103A\u101C\u103D\u101A\u103A\u1000\u1030\u101E\u1031\u102C \u1016\u1031\u102C\u1004\u1037\u103A",
      "Color Adjustments": "\u1021\u101B\u1031\u102C\u1004\u103A \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
      "Dark Contrast": "\u1019\u103E\u1031\u102C\u1004\u103A\u1019\u102D\u102F\u1000\u103A\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
      "Light Contrast": "\u1021\u101C\u1004\u103A\u1038\u101B\u1031\u102C\u1004\u103A \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
      "High Contrast": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
      "High Saturation": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
      "Low Saturation": "\u1014\u102D\u1019\u1037\u103A\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
      Monochrome: "\u1010\u1005\u103A\u101B\u1031\u102C\u1004\u103A\u1010\u100A\u103A\u1038",
      Tools: "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
      "Reading Guide": "\u1016\u1010\u103A\u101B\u103E\u102F\u101B\u1014\u103A \u101C\u1019\u103A\u1038\u100A\u103D\u103E\u1014\u103A",
      "Stop Animations": "\u1021\u1014\u103A\u1014\u102E\u1019\u1031\u1038\u101B\u103E\u1004\u103A\u1038\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u101B\u1015\u103A\u1015\u102B",
      "Big Cursor": "\u1000\u103C\u102E\u1038\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u102C\u1006\u102C",
      "Increase Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1010\u102D\u102F\u1038\u1001\u103B\u1032\u1037\u1015\u102B",
      "Decrease Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u101C\u103B\u103E\u1031\u102C\u1037\u1001\u103B\u1015\u102B",
      "Letter Spacing": "\u1021\u1000\u1039\u1001\u101B\u102C\u1021\u1000\u103C\u102C\u1038 \u1021\u1000\u103D\u102C\u1021\u101D\u1031\u1038",
      "Line Height": "\u1005\u102C\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u1019\u103C\u1004\u1037\u103A",
      "Font Weight": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101C\u1031\u1038\u1001\u103B\u102D\u1014\u103A",
      "Dyslexia Font": "Dyslexia \u1016\u1031\u102C\u1004\u1037\u103A",
      Language: "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
      "Open Accessibility Menu": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1016\u103D\u1004\u1037\u103A\u1015\u102B"
    };
  }
});

// src/locales/nl.json
var require_nl = __commonJS({
  "src/locales/nl.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Toegankelijkheidsmenu",
      "Reset settings": "Instellingen resetten",
      Close: "Sluiten",
      "Content Adjustments": "Inhoudsaanpassingen",
      "Adjust Font Size": "Lettergrootte aanpassen",
      "Highlight Title": "Titel markeren",
      "Highlight Links": "Links markeren",
      "Readable Font": "Leesbaar lettertype",
      "Color Adjustments": "Kleur aanpassingen",
      "Dark Contrast": "Donker contrast",
      "Light Contrast": "Licht contrast",
      "High Contrast": "Hoog contrast",
      "High Saturation": "Hoge verzadiging",
      "Low Saturation": "Lage verzadiging",
      Monochrome: "Monochroom",
      Tools: "Gereedschappen",
      "Reading Guide": "Leesgids",
      "Stop Animations": "Animaties stoppen",
      "Big Cursor": "Grote cursor",
      "Increase Font Size": "Lettergrootte vergroten",
      "Decrease Font Size": "Lettergrootte verkleinen",
      "Letter Spacing": "Letterafstand",
      "Line Height": "Regelhoogte",
      "Font Weight": "Letterdikte",
      "Dyslexia Font": "Dyslexie lettertype",
      Language: "Taal",
      "Open Accessibility Menu": "Toegankelijkheidsmenu openen"
    };
  }
});

// src/locales/no.json
var require_no = __commonJS({
  "src/locales/no.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Tilgjengelighetsmeny",
      "Reset settings": "Tilbakestill innstillinger",
      Close: "Lukk",
      "Content Adjustments": "Innholdstilpasninger",
      "Adjust Font Size": "Juster skriftst\xF8rrelse",
      "Highlight Title": "Fremhev tittel",
      "Highlight Links": "Fremhev lenker",
      "Readable Font": "Lesbar skrifttype",
      "Color Adjustments": "Fargejusteringer",
      "Dark Contrast": "M\xF8rk kontrast",
      "Light Contrast": "Lys kontrast",
      "High Contrast": "H\xF8y kontrast",
      "High Saturation": "H\xF8y metning",
      "Low Saturation": "Lav metning",
      Monochrome: "Monokrom",
      Tools: "Verkt\xF8y",
      "Reading Guide": "Leseguide",
      "Stop Animations": "Stopp animasjoner",
      "Big Cursor": "Stor peker",
      "Increase Font Size": "\xD8k skriftst\xF8rrelsen",
      "Decrease Font Size": "Reduser skriftst\xF8rrelsen",
      "Letter Spacing": "Bokstavavstand",
      "Line Height": "Linjeh\xF8yde",
      "Font Weight": "Skriftvekt",
      "Dyslexia Font": "Dysleksisk skrifttype",
      Language: "Spr\xE5k",
      "Open Accessibility Menu": "\xC5pne tilgjengelighetsmeny"
    };
  }
});

// src/locales/pa.json
var require_pa = __commonJS({
  "src/locales/pa.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42",
      "Reset settings": "\u0A38\u0A48\u0A1F\u0A3F\u0A70\u0A17\u0A3E\u0A02 \u0A30\u0A40\u0A38\u0A48\u0A1F \u0A15\u0A30\u0A4B",
      Close: "\u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
      "Content Adjustments": "\u0A38\u0A2E\u0A71\u0A17\u0A30\u0A40 \u0A38\u0A70\u0A38\u0A3C\u0A4B\u0A27\u0A28",
      "Adjust Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A05\u0A28\u0A41\u0A15\u0A42\u0A32\u0A3F\u0A24 \u0A15\u0A30\u0A4B",
      "Highlight Title": "\u0A38\u0A3F\u0A30\u0A32\u0A47\u0A16 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
      "Highlight Links": "\u0A32\u0A3F\u0A70\u0A15 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
      "Readable Font": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28\u0A2F\u0A4B\u0A17 \u0A2B\u0A4B\u0A02\u0A1F",
      "Color Adjustments": "\u0A30\u0A70\u0A17 \u0A38\u0A70\u0A38\u0A3C\u0A4B\u0A27\u0A28",
      "Dark Contrast": "\u0A17\u0A42\u0A5C\u0A4D\u0A39\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
      "Light Contrast": "\u0A39\u0A32\u0A15\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
      "High Contrast": "\u0A09\u0A71\u0A1A\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
      "High Saturation": "\u0A09\u0A71\u0A1A\u0A3E \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
      "Low Saturation": "\u0A18\u0A71\u0A1F \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
      Monochrome: "\u0A07\u0A15 \u0A30\u0A70\u0A17\u0A40",
      Tools: "\u0A09\u0A2A\u0A15\u0A30\u0A28",
      "Reading Guide": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28 \u0A17\u0A3E\u0A08\u0A21",
      "Stop Animations": "\u0A10\u0A28\u0A40\u0A2E\u0A47\u0A38\u0A3C\u0A28 \u0A30\u0A4B\u0A15\u0A4B",
      "Big Cursor": "\u0A35\u0A71\u0A21\u0A3E \u0A15\u0A30\u0A38\u0A30",
      "Increase Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A35\u0A27\u0A3E\u0A13",
      "Decrease Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A18\u0A1F\u0A3E\u0A13",
      "Letter Spacing": "\u0A05\u0A71\u0A16\u0A30\u0A3E\u0A02 \u0A26\u0A40 \u0A26\u0A42\u0A30\u0A40",
      "Line Height": "\u0A32\u0A3E\u0A08\u0A28 \u0A26\u0A40 \u0A09\u0A1A\u0A3E\u0A08",
      "Font Weight": "\u0A2B\u0A4B\u0A02\u0A1F \u0A2D\u0A3E\u0A30",
      "Dyslexia Font": "\u0A21\u0A3F\u0A38\u0A32\u0A48\u0A15\u0A38\u0A40\u0A06 \u0A2B\u0A4B\u0A02\u0A1F",
      Language: "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E",
      "Open Accessibility Menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42 \u0A16\u0A4B\u0A32\u0A4D\u0A39\u0A4B"
    };
  }
});

// src/locales/pl.json
var require_pl = __commonJS({
  "src/locales/pl.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu dost\u0119pno\u015Bci",
      "Reset settings": "Reset ustawie\u0144",
      Close: "Zamknij",
      "Content Adjustments": "Dostosowanie zawarto\u015Bci",
      "Adjust Font Size": "Dostosuj rozmiar czcionki",
      "Highlight Title": "Pod\u015Bwietl tytu\u0142y",
      "Highlight Links": "Pod\u015Bwietl linki",
      "Readable Font": "Czytelna czcionka",
      "Color Adjustments": "Dostosowanie kolor\xF3w",
      "Dark Contrast": "Ciemny kontrast",
      "Light Contrast": "Jasny kontrast",
      "High Contrast": "Wysoki kontrast",
      "High Saturation": "Wysoka saturacja",
      "Low Saturation": "Niska saturacja",
      Monochrome: "Monochromatyczno\u015B\u0107",
      Tools: "Narz\u0119dzia",
      "Reading Guide": "Pomocnik czytania",
      "Stop Animations": "Wstrzymaj animacje",
      "Big Cursor": "Du\u017Cy kursor",
      "Increase Font Size": "Zwi\u0119ksz rozmiar czcionki",
      "Decrease Font Size": "Zmniejsz rozmiar czcionki",
      "Letter Spacing": "Odst\u0119py mi\u0119dzy literami",
      "Line Height": "Wysoko\u015B\u0107 wierszy",
      "Font Weight": "Pogrubiona czcionka",
      "Dyslexia Font": "Czcionka dla dyslektyk\xF3w",
      Language: "J\u0119zyk",
      "Open Accessibility Menu": "Otw\xF3rz menu dost\u0119pno\u015Bci"
    };
  }
});

// src/locales/pt.json
var require_pt = __commonJS({
  "src/locales/pt.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu de Acessibilidade",
      "Reset settings": "Redefinir configura\xE7\xF5es",
      Close: "Fechar",
      "Content Adjustments": "Ajustes de Conte\xFAdo",
      "Adjust Font Size": "Ajustar Tamanho da Fonte",
      "Highlight Title": "Destacar T\xEDtulo",
      "Highlight Links": "Destacar Links",
      "Readable Font": "Fonte Leg\xEDvel",
      "Color Adjustments": "Ajustes de Cor",
      "Dark Contrast": "Contraste Escuro",
      "Light Contrast": "Contraste Claro",
      "High Contrast": "Alto Contraste",
      "High Saturation": "Satura\xE7\xE3o Alta",
      "Low Saturation": "Satura\xE7\xE3o Baixa",
      Monochrome: "Monocrom\xE1tico",
      Tools: "Ferramentas",
      "Reading Guide": "Guia de Leitura",
      "Stop Animations": "Parar Anima\xE7\xF5es",
      "Big Cursor": "Cursor Grande",
      "Increase Font Size": "Aumentar Tamanho da Fonte",
      "Decrease Font Size": "Diminuir Tamanho da Fonte",
      "Letter Spacing": "Espa\xE7amento entre Letras",
      "Line Height": "Altura da Linha",
      "Font Weight": "Espessura da Fonte",
      "Dyslexia Font": "Fonte para Dislexia",
      Language: "Idioma",
      "Open Accessibility Menu": "Abrir menu de acessibilidade"
    };
  }
});

// src/locales/ro.json
var require_ro = __commonJS({
  "src/locales/ro.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Meniu de accesibilitate",
      "Reset settings": "Reseteaz\u0103 set\u0103rile",
      Close: "\xCEnchide",
      "Content Adjustments": "Ajust\u0103ri con\u021Binut",
      "Adjust Font Size": "Ajusteaz\u0103 dimensiunea fontului",
      "Highlight Title": "Eviden\u021Biaz\u0103 titlul",
      "Highlight Links": "Eviden\u021Biaz\u0103 leg\u0103turile",
      "Readable Font": "Font lizibil",
      "Color Adjustments": "Ajust\u0103ri de culoare",
      "Dark Contrast": "Contrast \xEEntunecat",
      "Light Contrast": "Contrast luminos",
      "High Contrast": "Contrast ridicat",
      "High Saturation": "Satura\u021Bie ridicat\u0103",
      "Low Saturation": "Satura\u021Bie redus\u0103",
      Monochrome: "Monocrom",
      Tools: "Instrumente",
      "Reading Guide": "Ghid de lectur\u0103",
      "Stop Animations": "Opri\u021Bi anima\u021Biile",
      "Big Cursor": "Cursor mare",
      "Increase Font Size": "M\u0103re\u0219te dimensiunea fontului",
      "Decrease Font Size": "Mic\u0219oreaz\u0103 dimensiunea fontului",
      "Letter Spacing": "Spa\u021Bierea literelor",
      "Line Height": "\xCEn\u0103l\u021Bimea liniei",
      "Font Weight": "Grosimea fontului",
      "Dyslexia Font": "Font pentru dislexie",
      Language: "Limb\u0103",
      "Open Accessibility Menu": "Deschide\u021Bi meniul de accesibilitate"
    };
  }
});

// src/locales/ru.json
var require_ru = __commonJS({
  "src/locales/ru.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u041C\u0435\u043D\u044E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439",
      "Reset settings": "\u0421\u0431\u0440\u043E\u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
      Close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      "Content Adjustments": "\u041A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430",
      "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Highlight Title": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438",
      "Highlight Links": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438",
      "Readable Font": "\u0427\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0448\u0440\u0438\u0444\u0442",
      "Color Adjustments": "\u041A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0446\u0432\u0435\u0442\u0430",
      "Dark Contrast": "\u0422\u0435\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "Light Contrast": "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Contrast": "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Saturation": "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
      "Low Saturation": "\u041D\u0438\u0437\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
      Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",
      Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      "Reading Guide": "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E \u0447\u0442\u0435\u043D\u0438\u044E",
      "Stop Animations": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044E",
      "Big Cursor": "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0443\u0440\u0441\u043E\u0440",
      "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Decrease Font Size": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Letter Spacing": "\u041C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",
      "Line Height": "\u0412\u044B\u0441\u043E\u0442\u0430 \u043B\u0438\u043D\u0438\u0438",
      "Font Weight": "\u0412\u0435\u0441 \u0448\u0440\u0438\u0444\u0442\u0430",
      "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0414\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u044F",
      Language: "\u042F\u0437\u044B\u043A",
      "Open Accessibility Menu": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439"
    };
  }
});

// src/locales/si.json
var require_si = __commonJS({
  "src/locales/si.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Meni dostopnosti",
      "Reset settings": "Ponastavi nastavitve",
      Close: "Zapri",
      "Content Adjustments": "Prilagoditve vsebine",
      "Adjust Font Size": "Prilagodi velikost pisave",
      "Highlight Title": "Ozna\u010Di naslov",
      "Highlight Links": "Ozna\u010Di povezave",
      "Readable Font": "Bralna pisava",
      "Color Adjustments": "Prilagoditve barv",
      "Dark Contrast": "Temni kontrast",
      "Light Contrast": "Svetli kontrast",
      "High Contrast": "Visoki kontrast",
      "High Saturation": "Visoka nasi\u010Denost",
      "Low Saturation": "Nizka nasi\u010Denost",
      Monochrome: "Monokromno",
      Tools: "Orodja",
      "Reading Guide": "Bralni vodnik",
      "Stop Animations": "Ustavi animacije",
      "Big Cursor": "Velik kazalec",
      "Increase Font Size": "Pove\u010Daj velikost pisave",
      "Decrease Font Size": "Zmanj\u0161aj velikost pisave",
      "Letter Spacing": "Razmik med \u010Drkami",
      "Line Height": "Vi\u0161ina vrstice",
      "Font Weight": "Debelina pisave",
      "Dyslexia Font": "Pisava za disleksijo",
      Language: "Jezik",
      "Open Accessibility Menu": "Odpri meni dostopnosti"
    };
  }
});

// src/locales/sk.json
var require_sk = __commonJS({
  "src/locales/sk.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu pr\xEDstupnosti",
      "Reset settings": "Obnovi\u0165 nastavenia",
      Close: "Zavrie\u0165",
      "Content Adjustments": "Nastavenia obsahu",
      "Adjust Font Size": "Prisp\xF4sobi\u0165 ve\u013Ekos\u0165 p\xEDsma",
      "Highlight Title": "Zv\xFDrazni\u0165 nadpis",
      "Highlight Links": "Zv\xFDrazni\u0165 odkazy",
      "Readable Font": "\u010Citate\u013En\xE9 p\xEDsmo",
      "Color Adjustments": "Nastavenia farieb",
      "Dark Contrast": "Tmav\xFD kontrast",
      "Light Contrast": "Svetl\xFD kontrast",
      "High Contrast": "Vysok\xFD kontrast",
      "High Saturation": "Vysok\xE1 satur\xE1cia",
      "Low Saturation": "N\xEDzka satur\xE1cia",
      Monochrome: "Monochromatick\xE9",
      Tools: "N\xE1stroje",
      "Reading Guide": "Sprievodca \u010D\xEDtan\xEDm",
      "Stop Animations": "Zastavi\u0165 anim\xE1cie",
      "Big Cursor": "Ve\u013Ek\xFD kurzor",
      "Increase Font Size": "Zv\xE4\u010D\u0161i\u0165 ve\u013Ekos\u0165 p\xEDsma",
      "Decrease Font Size": "Zmen\u0161i\u0165 ve\u013Ekos\u0165 p\xEDsma",
      "Letter Spacing": "Rozostup p\xEDsmen",
      "Line Height": "V\xFD\u0161ka riadku",
      "Font Weight": "Tlak p\xEDsma",
      "Dyslexia Font": "P\xEDsmo pre dyslexiu",
      Language: "Jazyk",
      "Open Accessibility Menu": "Otvori\u0165 menu pr\xEDstupnosti"
    };
  }
});

// src/locales/sl.json
var require_sl = __commonJS({
  "src/locales/sl.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Meni dostopnosti",
      "Reset settings": "Ponastavi nastavitve",
      Close: "Zapri",
      "Content Adjustments": "Prilagoditve vsebine",
      "Adjust Font Size": "Prilagodi velikost pisave",
      "Highlight Title": "Ozna\u010Di naslov",
      "Highlight Links": "Ozna\u010Di povezave",
      "Readable Font": "Bralna pisava",
      "Color Adjustments": "Prilagoditve barv",
      "Dark Contrast": "Temni kontrast",
      "Light Contrast": "Svetli kontrast",
      "High Contrast": "Visoki kontrast",
      "High Saturation": "Visoka nasi\u010Denost",
      "Low Saturation": "Nizka nasi\u010Denost",
      Monochrome: "Monokromno",
      Tools: "Orodja",
      "Reading Guide": "Bralni vodnik",
      "Stop Animations": "Ustavi animacije",
      "Big Cursor": "Velik kazalec",
      "Increase Font Size": "Pove\u010Daj velikost pisave",
      "Decrease Font Size": "Zmanj\u0161aj velikost pisave",
      "Letter Spacing": "Razmik med \u010Drkami",
      "Line Height": "Vi\u0161ina vrstice",
      "Font Weight": "Debelina pisave",
      "Dyslexia Font": "Pisava za disleksijo",
      Language: "Jezik",
      "Open Accessibility Menu": "Odpri meni dostopnosti"
    };
  }
});

// src/locales/sr-SP.json
var require_sr_SP = __commonJS({
  "src/locales/sr-SP.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u041C\u0435\u043D\u0438 \u0417\u0430 \u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442",
      "Reset settings": "\u0420\u0435\u0441\u0435\u0442\u0443\u0458 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0435",
      Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
      "Content Adjustments": "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0435 \u0421\u0430\u0434\u0440\u0436\u0430\u0458\u0430",
      "Adjust Font Size": "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0435 \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0435 \u0424\u043E\u043D\u0442\u0430",
      "Highlight Title": "\u041E\u0437\u043D\u0430\u0447\u0438 \u041D\u0430\u0441\u043B\u043E\u0432\u0435",
      "Highlight Links": "\u041E\u0437\u043D\u0430\u0447\u0438 \u0412\u0435\u0437\u0435",
      "Readable Font": "\u0427\u0438\u0442\u0459\u0438\u0432\u0438\u0458\u0438 \u0424\u043E\u043D\u0442",
      "Color Adjustments": "\u041F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0435 \u0411\u043E\u0458\u0430",
      "Dark Contrast": "\u0422\u0430\u043C\u043D\u0438 \u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "Light Contrast": "\u0421\u0432\u0438\u0458\u0435\u0442\u043B\u0438 \u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Contrast": "\u0412\u0438\u0441\u043E\u043A\u0438 \u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
      "High Saturation": "\u0412\u0435\u043B\u0438\u043A\u0430 \u0417\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
      "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u0417\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
      Monochrome: "\u0408\u0435\u0434\u043D\u043E\u0431\u043E\u0458\u043D\u0438",
      Tools: "\u0410\u043B\u0430\u0442\u0438",
      "Reading Guide": "\u0412\u043E\u0434\u0438\u0447 \u0417\u0430 \u0427\u0438\u0442\u0430\u045A\u0435",
      "Stop Animations": "\u0417\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0435",
      "Big Cursor": "\u0412\u0435\u043B\u0438\u043A\u0438 \u041A\u0443\u0440\u0441\u043E\u0440",
      "Increase Font Size": "\u041F\u043E\u0432\u0435\u045B\u0430\u0458 \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0424\u043E\u043D\u0442\u0430",
      "Decrease Font Size": "\u0421\u043C\u0430\u045A\u0438 \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0424\u043E\u043D\u0442\u0430",
      "Letter Spacing": "\u0420\u0430\u0437\u043C\u0430\u043A \u0421\u043B\u043E\u0432\u0430",
      "Line Height": "\u0412\u0438\u0441\u0438\u043D\u0430 \u041B\u0438\u043D\u0438\u0458\u0435",
      "Font Weight": "\u0414\u0435\u0431\u0459\u0438\u043D\u0430 \u0424\u043E\u043D\u0442\u0430",
      "Dyslexia Font": "\u0424\u043E\u043D\u0442 \u0417\u0430 \u0414\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u0447\u0430\u0440\u0435",
      Language: "\u0408\u0435\u0437\u0438\u043A",
      "Open Accessibility Menu": "\u041E\u0442\u0432\u043E\u0440\u0438 \u041C\u0435\u043D\u0438 \u0417\u0430 \u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442"
    };
  }
});

// src/locales/sr.json
var require_sr = __commonJS({
  "src/locales/sr.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Meni Za Pristupa\u010Dnost",
      "Reset settings": "Resetuj postavke",
      Close: "Zatvori",
      "Content Adjustments": "Pode\u0161avanje Sadr\u017Eaja",
      "Adjust Font Size": "Pode\u0161avanje Veli\u010Dine Fonta",
      "Highlight Title": "Ozna\u010Di Naslove",
      "Highlight Links": "Ozna\u010Di Veze",
      "Readable Font": "\u010Citljiviji Font",
      "Color Adjustments": "Pode\u0161avanje Boja",
      "Dark Contrast": "Tamni Kontrast",
      "Light Contrast": "Svijetli Kontrast",
      "High Contrast": "Visoki Kontrast",
      "High Saturation": "Velika Zasi\u0107enost",
      "Low Saturation": "Niska Zasi\u0107enost",
      Monochrome: "Jednobojni",
      Tools: "Alati",
      "Reading Guide": "Vodi\u010D Za \u010Citanje",
      "Stop Animations": "Zaustavi Animacije",
      "Big Cursor": "Veliki Kursor",
      "Increase Font Size": "Pove\u0107aj Veli\u010Dinu Fonta",
      "Decrease Font Size": "Smanji Veli\u010Dinu Fonta",
      "Letter Spacing": "Razmak Slova",
      "Line Height": "Visina Linije",
      "Font Weight": "Debljina Fonta",
      "Dyslexia Font": "Font Za Disleksi\u010Dare",
      Language: "Jezik",
      "Open Accessibility Menu": "Otvori Meni Za Pristupa\u010Dnost"
    };
  }
});

// src/locales/sv.json
var require_sv = __commonJS({
  "src/locales/sv.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Tillg\xE4nglighetsmeny",
      "Reset settings": "Nollst\xE4ll inst\xE4llningar",
      Close: "St\xE4ng",
      "Content Adjustments": "Anpassa inneh\xE5ll",
      "Adjust Font Size": "Justera textstorlek",
      "Highlight Title": "Framh\xE4v titel",
      "Highlight Links": "Framh\xE4v l\xE4nkar",
      "Readable Font": "L\xE4sbart teckensnitt",
      "Color Adjustments": "Anpassa f\xE4rger",
      "Dark Contrast": "M\xF6rk kontrast",
      "Light Contrast": "Ljus kontrast",
      "High Contrast": "H\xF6g kontrast",
      "High Saturation": "H\xF6g m\xE4ttnad",
      "Low Saturation": "L\xE5g m\xE4ttnad",
      Monochrome: "Monokrom",
      Tools: "Verktyg",
      "Reading Guide": "L\xE4slinjal",
      "Stop Animations": "Hindra animationer",
      "Big Cursor": "Stor muspekare",
      "Increase Font Size": "\xD6ka textstorlek",
      "Decrease Font Size": "Minska textstorlek",
      "Letter Spacing": "Teckenavst\xE5nd",
      "Line Height": "Radh\xF6jd",
      "Font Weight": "Teckensnitt tjocklek",
      "Dyslexia Font": "Dyslektiskt teckensnitt",
      Language: "Spr\xE5k",
      "Open Accessibility Menu": "\xD6ppna tillg\xE4nglighetsmeny"
    };
  }
});

// src/locales/sw.json
var require_sw = __commonJS({
  "src/locales/sw.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menyu ya Ufikiaji",
      "Reset settings": "Weka upya mipangilio",
      Close: "Funga",
      "Content Adjustments": "Marekebisho ya Maudhui",
      "Adjust Font Size": "Rekebisha Ukubwa wa Herufi",
      "Highlight Title": "Angazia Kichwa",
      "Highlight Links": "Angazia Viungo",
      "Readable Font": "Herufi Inayosomeka",
      "Color Adjustments": "Marekebisho ya Rangi",
      "Dark Contrast": "Tofauti ya Giza",
      "Light Contrast": "Tofauti ya Mwanga",
      "High Contrast": "Tofauti ya Juu",
      "High Saturation": "Usitishaji wa Juu",
      "Low Saturation": "Usitishaji wa Chini",
      Monochrome: "Monokromu",
      Tools: "Vifaa",
      "Reading Guide": "Mwongozo wa Kusoma",
      "Stop Animations": "Simamisha Uhuishaji",
      "Big Cursor": "Kisahihi Kikubwa",
      "Increase Font Size": "Ongeza Ukubwa wa Herufi",
      "Decrease Font Size": "Punguza Ukubwa wa Herufi",
      "Letter Spacing": "Nafasi ya Herufi",
      "Line Height": "Urefu wa Mstari",
      "Font Weight": "Uzito wa Herufi",
      "Dyslexia Font": "Herufi ya Dyslexia",
      Language: "Lugha",
      "Open Accessibility Menu": "Fungua Menyu ya Ufikiaji"
    };
  }
});

// src/locales/ta.json
var require_ta = __commonJS({
  "src/locales/ta.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1",
      "Reset settings": "\u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8",
      Close: "\u0BAE\u0BC2\u0B9F\u0BC1",
      "Content Adjustments": "\u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
      "Adjust Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD",
      "Highlight Title": "\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BB9\u0BC8\u0BB2\u0BC8\u0B9F\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD",
      "Highlight Links": "\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BB9\u0BC8\u0BB2\u0BC8\u0B9F\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD",
      "Readable Font": "\u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0B95\u0BCD\u0B95\u0BC2\u0B9F\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1",
      "Color Adjustments": "\u0BA8\u0BBF\u0BB1 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
      "Dark Contrast": "\u0B87\u0BB0\u0BC1\u0BA3\u0BCD\u0B9F \u0BAE\u0BBE\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
      "Light Contrast": "\u0B92\u0BB3\u0BBF \u0BAE\u0BBE\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
      "High Contrast": "\u0B89\u0BAF\u0BB0\u0BCD \u0BAE\u0BBE\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
      "High Saturation": "\u0B89\u0BAF\u0BB0\u0BCD \u0BA8\u0BBF\u0BB1\u0BAE\u0BCD",
      "Low Saturation": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0BA8\u0BBF\u0BB1\u0BAE\u0BCD",
      Monochrome: "\u0B92\u0BB1\u0BCD\u0BB1\u0BC8 \u0BA8\u0BBF\u0BB1\u0BAE\u0BCD",
      Tools: "\u0B95\u0BB0\u0BC1\u0BB5\u0BBF\u0B95\u0BB3\u0BCD",
      "Reading Guide": "\u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF",
      "Stop Animations": "\u0B85\u0BA9\u0BBF\u0BAE\u0BC7\u0BB7\u0BA9\u0BCD\u0B95\u0BB3\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
      "Big Cursor": "\u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B95\u0BB0\u0BCD\u0B9A\u0BB0\u0BCD",
      "Increase Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B85\u0BA4\u0BBF\u0B95\u0BB0\u0BBF\u0B95\u0BCD\u0B95",
      "Decrease Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8\u0B95\u0BCD\u0B95",
      "Letter Spacing": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B87\u0B9F\u0BC8\u0BB5\u0BC6\u0BB3\u0BBF",
      "Line Height": "\u0BB5\u0BB0\u0BBF \u0B89\u0BAF\u0BB0\u0BAE\u0BCD",
      "Font Weight": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1 \u0B8E\u0B9F\u0BC8",
      "Dyslexia Font": "\u0B9F\u0BBF\u0BB8\u0BCD\u0BB2\u0BC6\u0B95\u0BCD\u0B9A\u0BBF\u0BAF\u0BBE \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB0\u0BC1",
      Language: "\u0BAE\u0BCA\u0BB4\u0BBF",
      "Open Accessibility Menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8 \u0BA4\u0BBF\u0BB1"
    };
  }
});

// src/locales/te.json
var require_te = __commonJS({
  "src/locales/te.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0C2A\u0C4D\u0C30\u0C3E\u0C2A\u0C4D\u0C2F\u0C24 \u0C2E\u0C46\u0C28\u0C42",
      "Reset settings": "\u0C38\u0C46\u0C1F\u0C4D\u0C1F\u0C3F\u0C02\u0C17\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      Close: "\u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C3F",
      "Content Adjustments": "\u0C15\u0C02\u0C1F\u0C46\u0C02\u0C1F\u0C4D \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C4D\u0C32\u0C41",
      "Adjust Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "Highlight Title": "\u0C36\u0C40\u0C30\u0C4D\u0C37\u0C3F\u0C15\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "Highlight Links": "\u0C32\u0C3F\u0C02\u0C15\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "Readable Font": "\u0C1A\u0C26\u0C35\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C42\u0C32\u0C2E\u0C48\u0C28 \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
      "Color Adjustments": "\u0C30\u0C02\u0C17\u0C41 \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C4D\u0C32\u0C41",
      "Dark Contrast": "\u0C1A\u0C40\u0C15\u0C1F\u0C3F \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
      "Light Contrast": "\u0C24\u0C46\u0C32\u0C4D\u0C32\u0C1F\u0C3F \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
      "High Contrast": "\u0C05\u0C27\u0C3F\u0C15 \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
      "High Saturation": "\u0C05\u0C27\u0C3F\u0C15 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
      "Low Saturation": "\u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
      Monochrome: "\u0C2E\u0C4B\u0C28\u0C4B\u0C15\u0C4D\u0C30\u0C4B\u0C2E\u0C4D",
      Tools: "\u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C3E\u0C32\u0C41",
      "Reading Guide": "\u0C1A\u0C26\u0C35\u0C21\u0C02 \u0C2E\u0C3E\u0C30\u0C4D\u0C17\u0C26\u0C30\u0C4D\u0C36\u0C15\u0C41\u0C21\u0C41",
      "Stop Animations": "\u0C2F\u0C3E\u0C28\u0C3F\u0C2E\u0C47\u0C37\u0C28\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C06\u0C2A\u0C41",
      "Big Cursor": "\u0C2A\u0C46\u0C26\u0C4D\u0C26 \u0C15\u0C30\u0C4D\u0C38\u0C30\u0C4D",
      "Increase Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C46\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "Decrease Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C24\u0C17\u0C4D\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "Letter Spacing": "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32 \u0C2E\u0C27\u0C4D\u0C2F \u0C16\u0C3E\u0C33\u0C40",
      "Line Height": "\u0C32\u0C48\u0C28\u0C4D \u0C0E\u0C24\u0C4D\u0C24\u0C41",
      "Font Weight": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2C\u0C30\u0C41\u0C35\u0C41",
      "Dyslexia Font": "\u0C21\u0C3F\u0C38\u0C4D\u0C32\u0C46\u0C15\u0C4D\u0C38\u0C3F\u0C2F\u0C3E \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
      Language: "\u0C2D\u0C3E\u0C37",
      "Open Accessibility Menu": "\u0C2A\u0C4D\u0C30\u0C3E\u0C2A\u0C4D\u0C2F\u0C24 \u0C2E\u0C46\u0C28\u0C42\u0C28\u0C41 \u0C24\u0C46\u0C30\u0C35\u0C02\u0C21\u0C3F"
    };
  }
});

// src/locales/th.json
var require_th = __commonJS({
  "src/locales/th.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
      "Reset settings": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
      Close: "\u0E1B\u0E34\u0E14",
      "Content Adjustments": "\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
      "Adjust Font Size": "\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      "Highlight Title": "\u0E40\u0E19\u0E49\u0E19\u0E2B\u0E31\u0E27\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
      "Highlight Links": "\u0E40\u0E19\u0E49\u0E19\u0E25\u0E34\u0E07\u0E01\u0E4C",
      "Readable Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22",
      "Color Adjustments": "\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E2A\u0E35",
      "Dark Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E40\u0E02\u0E49\u0E21",
      "Light Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07",
      "High Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E39\u0E07",
      "High Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E2A\u0E39\u0E07",
      "Low Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E15\u0E48\u0E33",
      Monochrome: "\u0E42\u0E21\u0E42\u0E19\u0E42\u0E04\u0E23\u0E21",
      Tools: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
      "Reading Guide": "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
      "Stop Animations": "\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27",
      "Big Cursor": "\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48",
      "Increase Font Size": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      "Decrease Font Size": "\u0E25\u0E14\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      "Letter Spacing": "\u0E23\u0E30\u0E22\u0E30\u0E2B\u0E48\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      "Line Height": "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14",
      "Font Weight": "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      "Dyslexia Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E14\u0E34\u0E2A\u0E40\u0E25\u0E47\u0E01\u0E40\u0E0B\u0E35\u0E22",
      Language: "\u0E20\u0E32\u0E29\u0E32",
      "Open Accessibility Menu": "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07"
    };
  }
});

// src/locales/tr.json
var require_tr = __commonJS({
  "src/locales/tr.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Eri\u015Filebilirlik Men\xFCs\xFC",
      "Reset settings": "Ayarlar\u0131 S\u0131f\u0131rla",
      Close: "Kapat",
      "Content Adjustments": "\u0130\xE7erik Ayarlar\u0131",
      "Adjust Font Size": "Yaz\u0131 Tipi Boyutunu Ayarla",
      "Highlight Title": "Ba\u015Fl\u0131\u011F\u0131 Vurgula",
      "Highlight Links": "Ba\u011Flant\u0131lar\u0131 Vurgula",
      "Readable Font": "Okunakl\u0131 Yaz\u0131 Tipi",
      "Color Adjustments": "Renk Ayarlar\u0131",
      "Dark Contrast": "Koyu Kontrast",
      "Light Contrast": "A\xE7\u0131k Kontrast",
      "High Contrast": "Y\xFCksek Kontrast",
      "High Saturation": "Y\xFCksek Doygunluk",
      "Low Saturation": "D\xFC\u015F\xFCk Doygunluk",
      Monochrome: "Tek Renkli",
      Tools: "Ara\xE7lar",
      "Reading Guide": "Okuma Rehberi",
      "Stop Animations": "Animasyonlar\u0131 Durdur",
      "Big Cursor": "B\xFCy\xFCk \u0130mle\xE7",
      "Increase Font Size": "Yaz\u0131 Tipi Boyutunu Art\u0131r",
      "Decrease Font Size": "Yaz\u0131 Tipi Boyutunu Azalt",
      "Letter Spacing": "Harf Aral\u0131\u011F\u0131",
      "Line Height": "Sat\u0131r Y\xFCksekli\u011Fi",
      "Font Weight": "Yaz\u0131 Tipi Kal\u0131nl\u0131\u011F\u0131",
      "Dyslexia Font": "Disleksi Yaz\u0131 Tipi",
      Language: "Dil",
      "Open Accessibility Menu": "Eri\u015Filebilirlik men\xFCs\xFCn\xFC a\xE7"
    };
  }
});

// src/locales/ur.json
var require_ur = __commonJS({
  "src/locales/ur.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648",
      "Reset settings": "\u062A\u0631\u062A\u06CC\u0628\u0627\u062A \u0631\u06CC \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA",
      Close: "\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
      "Content Adjustments": "\u0645\u0648\u0627\u062F \u06A9\u06CC \u0627\u06CC\u0688\u062C\u0633\u0679\u0645\u0646\u0679",
      "Adjust Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0627\u06CC\u0688\u062C\u0633\u0679 \u06A9\u0631\u06CC\u06BA",
      "Highlight Title": "\u0639\u0646\u0648\u0627\u0646 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
      "Highlight Links": "\u0644\u0646\u06A9\u0633 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
      "Readable Font": "\u0642\u0627\u0628\u0644\u0650 \u0645\u0637\u0627\u0644\u0639\u06C1 \u0641\u0648\u0646\u0679",
      "Color Adjustments": "\u0631\u0646\u06AF \u06A9\u06CC \u0627\u06CC\u0688\u062C\u0633\u0679\u0645\u0646\u0679",
      "Dark Contrast": "\u06AF\u06C1\u0631\u0627 \u062A\u0636\u0627\u062F",
      "Light Contrast": "\u06C1\u0644\u06A9\u0627 \u062A\u0636\u0627\u062F",
      "High Contrast": "\u0632\u06CC\u0627\u062F\u06C1 \u062A\u0636\u0627\u062F",
      "High Saturation": "\u0632\u06CC\u0627\u062F\u06C1 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
      "Low Saturation": "\u06A9\u0645 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
      Monochrome: "\u0645\u0648\u0646\u0648\u06A9\u0631\u0648\u0645",
      Tools: "\u0627\u0648\u0632\u0627\u0631",
      "Reading Guide": "\u0645\u0637\u0627\u0644\u0639\u06C1 \u06AF\u0627\u0626\u06CC\u0688",
      "Stop Animations": "\u062D\u0631\u06A9\u0627\u062A \u0631\u0648\u06A9\u06CC\u06BA",
      "Big Cursor": "\u0628\u0691\u0627 \u06A9\u0631\u0633\u0631",
      "Increase Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0628\u0691\u06BE\u0627\u0626\u06CC\u06BA",
      "Decrease Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u06A9\u0645 \u06A9\u0631\u06CC\u06BA",
      "Letter Spacing": "\u062D\u0631\u0648\u0641 \u06A9\u0627 \u0641\u0627\u0635\u0644\u06C1",
      "Line Height": "\u0644\u0627\u0626\u0646 \u06A9\u06CC \u0627\u0648\u0646\u0686\u0627\u0626\u06CC",
      "Font Weight": "\u0641\u0648\u0646\u0679 \u06A9\u0627 \u0648\u0632\u0646",
      "Dyslexia Font": "\u0688\u0633\u0644\u06CC\u06A9\u0633\u06CC\u0627 \u0641\u0648\u0646\u0679",
      Language: "\u0632\u0628\u0627\u0646",
      "Open Accessibility Menu": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648 \u06A9\u06BE\u0648\u0644\u06CC\u06BA"
    };
  }
});

// src/locales/vi.json
var require_vi = __commonJS({
  "src/locales/vi.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "Menu Truy c\u1EADp",
      "Reset settings": "\u0110\u1EB7t l\u1EA1i c\xE0i \u0111\u1EB7t",
      Close: "\u0110\xF3ng",
      "Content Adjustments": "\u0110i\u1EC1u ch\u1EC9nh N\u1ED9i dung",
      "Adjust Font Size": "\u0110i\u1EC1u ch\u1EC9nh K\xEDch th\u01B0\u1EDBc Font ch\u1EEF",
      "Highlight Title": "\u0110\xE1nh d\u1EA5u Ti\xEAu \u0111\u1EC1",
      "Highlight Links": "\u0110\xE1nh d\u1EA5u Li\xEAn k\u1EBFt",
      "Readable Font": "Font ch\u1EEF D\u1EC5 \u0111\u1ECDc",
      "Color Adjustments": "\u0110i\u1EC1u ch\u1EC9nh M\xE0u s\u1EAFc",
      "Dark Contrast": "T\u01B0\u01A1ng ph\u1EA3n T\u1ED1i",
      "Light Contrast": "T\u01B0\u01A1ng ph\u1EA3n S\xE1ng",
      "High Contrast": "T\u01B0\u01A1ng ph\u1EA3n Cao",
      "High Saturation": "B\xE3o h\xF2a Cao",
      "Low Saturation": "B\xE3o h\xF2a Th\u1EA5p",
      Monochrome: "\u0110\u01A1n s\u1EAFc",
      Tools: "C\xF4ng c\u1EE5",
      "Reading Guide": "H\u01B0\u1EDBng d\u1EABn \u0110\u1ECDc",
      "Stop Animations": "D\u1EEBng Ho\u1EA1t h\xECnh",
      "Big Cursor": "Con tr\u1ECF L\u1EDBn",
      "Increase Font Size": "T\u0103ng K\xEDch th\u01B0\u1EDBc Font ch\u1EEF",
      "Decrease Font Size": "Gi\u1EA3m K\xEDch th\u01B0\u1EDBc Font ch\u1EEF",
      "Letter Spacing": "Kho\u1EA3ng c\xE1ch Ch\u1EEF",
      "Line Height": "\u0110\u1ED9 Cao d\xF2ng",
      "Font Weight": "\u0110\u1ED9 \u0110\u1EADm c\u1EE7a Font ch\u1EEF",
      "Dyslexia Font": "Font ch\u1EEF Cho ng\u01B0\u1EDDi c\xF3 Khuy\u1EBFt t\u1EADt \u0111\u1ECDc hi\u1EC3u",
      Language: "Ng\xF4n ng\u1EEF",
      "Open Accessibility Menu": "M\u1EDF Menu Truy c\u1EADp"
    };
  }
});

// src/locales/zh-Hans.json
var require_zh_Hans = __commonJS({
  "src/locales/zh-Hans.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u8F85\u52A9\u529F\u80FD\u83DC\u5355",
      "Reset settings": "\u91CD\u7F6E\u8BBE\u7F6E",
      Close: "\u5173\u95ED",
      "Content Adjustments": "\u5185\u5BB9\u8C03\u6574",
      "Adjust Font Size": "\u8C03\u6574\u5B57\u4F53\u5927\u5C0F",
      "Highlight Title": "\u6807\u9898\u9AD8\u4EAE",
      "Highlight Links": "\u94FE\u63A5\u9AD8\u4EAE",
      "Readable Font": "\u6613\u8BFB\u5B57\u4F53",
      "Color Adjustments": "\u8272\u5F69\u8C03\u6574",
      "Dark Contrast": "\u9AD8\u5BF9\u6BD4\u5EA6\uFF08\u9ED1\u8272\uFF09",
      "Light Contrast": "\u9AD8\u5BF9\u6BD4\u5EA6\uFF08\u767D\u8272\uFF09",
      "High Contrast": "\u9AD8\u5BF9\u6BD4\u5EA6",
      "High Saturation": "\u9AD8\u9971\u548C\u5EA6",
      "Low Saturation": "\u4F4E\u9971\u548C\u5EA6",
      Monochrome: "\u5355\u8272",
      Tools: "\u66F4\u591A\u8BBE\u7F6E",
      "Reading Guide": "\u9605\u8BFB\u5C3A",
      "Stop Animations": "\u505C\u6B62\u95EA\u52A8",
      "Big Cursor": "\u653E\u5927\u9F20\u6807",
      "Increase Font Size": "\u589E\u52A0\u5B57\u4F53\u5927\u5C0F",
      "Decrease Font Size": "\u51CF\u5C0F\u5B57\u4F53\u5927\u5C0F",
      "Letter Spacing": "\u5B57\u6BCD\u95F4\u8DDD",
      "Line Height": "\u884C\u8DDD",
      "Font Weight": "\u5B57\u91CD",
      "Dyslexia Font": "\u9605\u8BFB\u969C\u788D\u5B57\u4F53",
      Language: "\u8BED\u8A00",
      "Open Accessibility Menu": "\u6253\u5F00\u8F85\u52A9\u529F\u80FD\u83DC\u5355"
    };
  }
});

// src/locales/zh-Hant.json
var require_zh_Hant = __commonJS({
  "src/locales/zh-Hant.json"(exports, module2) {
    module2.exports = {
      "Accessibility Menu": "\u8F14\u52A9\u529F\u80FD\u83DC\u55AE",
      "Reset settings": "\u91CD\u7F6E\u8A2D\u5B9A",
      Close: "\u95DC\u9589",
      "Content Adjustments": "\u5167\u5BB9\u8ABF\u6574",
      "Adjust Font Size": "\u8ABF\u6574\u5B57\u9AD4\u5927\u5C0F",
      "Highlight Title": "\u6A19\u984C\u9AD8\u4EAE",
      "Highlight Links": "\u9023\u7D50\u9AD8\u4EAE",
      "Readable Font": "\u6613\u8B80\u5B57\u9AD4",
      "Color Adjustments": "\u8272\u5F69\u8ABF\u6574",
      "Dark Contrast": "\u9AD8\u5C0D\u6BD4\u5EA6\uFF08\u9ED1\u8272\uFF09",
      "Light Contrast": "\u9AD8\u5C0D\u6BD4\u5EA6\uFF08\u767D\u8272\uFF09",
      "High Contrast": "\u9AD8\u5C0D\u6BD4\u5EA6",
      "High Saturation": "\u9AD8\u98FD\u548C\u5EA6",
      "Low Saturation": "\u4F4E\u98FD\u548C\u5EA6",
      Monochrome: "\u55AE\u8272",
      Tools: "\u66F4\u591A\u8A2D\u5B9A",
      "Reading Guide": "\u95B1\u8B80\u5C3A",
      "Stop Animations": "\u505C\u6B62\u9583\u52D5",
      "Big Cursor": "\u653E\u5927\u6ED1\u9F20",
      "Increase Font Size": "\u589E\u52A0\u5B57\u9AD4\u5927\u5C0F",
      "Decrease Font Size": "\u6E1B\u5C0F\u5B57\u9AD4\u5927\u5C0F",
      "Letter Spacing": "\u5B57\u6BCD\u9593\u8DDD",
      "Line Height": "\u884C\u8DDD",
      "Font Weight": "\u5B57\u91CD",
      "Dyslexia Font": "\u95B1\u8B80\u969C\u7919\u5B57\u9AD4",
      Language: "\u8A9E\u8A00",
      "Open Accessibility Menu": "\u6253\u958B\u8F14\u52A9\u529F\u80FD\u83DC\u55AE"
    };
  }
});

// src/utils/cookies.ts
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = /* @__PURE__ */ new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1e3);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// src/storage.ts
function saveStorageData(key, value) {
  const jsonValue = JSON.stringify(value);
  try {
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
    setCookie(key, jsonValue);
  }
}
function getStorageData(key) {
  let data;
  try {
    data = localStorage.getItem(key);
  } catch (e) {
    console.error(e);
    data = getCookie(key);
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    return {};
  }
}

// src/globals/userSettings.ts
var userSettings = {
  lang: void 0,
  position: void 0,
  states: {}
};
var STORAGE_KEY = "asw-user-settings";
function saveUserSettings() {
  saveStorageData(STORAGE_KEY, userSettings);
}
function getSavedUserSettings() {
  return getStorageData(STORAGE_KEY);
}

// src/enum/Selectors.ts
var ICON_SELECTOR = [
  "material-icons",
  // Google Material Icons
  "fa",
  // Font Awesome (general)
  "fa-solid",
  // Font Awesome solid icons
  "fa-regular",
  // Font Awesome regular icons
  "fa-brands",
  // Font Awesome brand icons
  "glyphicon",
  // Bootstrap Glyphicons
  "icon",
  // Common class for older icon sets
  "mdi",
  // Material Design Icons
  "ion",
  // Ionicons
  "svg-icon",
  // Custom SVG icons
  "iconfont",
  // Icon fonts from other libraries
  "emoji-icon",
  // Emoji icon class
  "bi",
  // Bootstrap Icons
  "octicon",
  // GitHub Octicons
  "feather",
  // Feather Icons
  "heroicon",
  // Heroicons
  "bx",
  // Boxicons
  "ri"
  // Remix Icon
];
var NOT_ICON_SELECTORS = `*:not(${ICON_SELECTOR.map((s) => `.${s}`).join(",")})`;
var ALL_ELEMENT_SELECTORS = ["", NOT_ICON_SELECTORS];
var LINKS_SELECTORS = ["a[href]"];
var HEADER_SELECTORS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var TEXT_SELECTORS = [...HEADER_SELECTORS, "img", "p", "i", "svg", "a", "button:not(.asw-btn)", "label", "li", "ol"];

// src/tools/adjustFontSize.ts
var FONT_SIZE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text";
var ICON_SELECTOR_SET = new Set(ICON_SELECTOR);
function adjustFontSize(multiply = 1) {
  document.querySelectorAll(FONT_SIZE_SELECTOR).forEach((el) => {
    if ([...el.classList].some((cls) => ICON_SELECTOR_SET.has(cls))) {
      return;
    }
    const orgFontSize = Number(el.dataset.aswOrgFontSize) || parseInt(window.getComputedStyle(el).fontSize);
    if (!el.dataset.aswOrgFontSize) {
      el.dataset.aswOrgFontSize = String(orgFontSize);
    }
    const newFontSize = orgFontSize * multiply;
    el.style.fontSize = `${newFontSize}px`;
  });
}

// src/utils/addStylesheet.ts
function addStylesheet({
  id,
  css
}) {
  if (css) {
    const style = document.getElementById(id || "") || document.createElement("style");
    style.innerHTML = css;
    if (!style.id) {
      style.id = id;
      document.head.appendChild(style);
    }
  }
}

// src/utils/cssGenerator.ts
var browserPrefixes = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
var propertiesNeedPrefix = ["filter"];
function generateCSS(styles) {
  let css = "";
  if (styles) {
    for (const key in styles) {
      const prefixes = propertiesNeedPrefix.includes(key) ? browserPrefixes : [""];
      prefixes.forEach((prefix) => {
        css += `${prefix}${key}:${styles[key]} !important;`;
      });
    }
  }
  return css;
}
function wrapCSSToSelector({
  selector,
  childrenSelector = [""],
  css
}) {
  let output = "";
  childrenSelector.forEach((childSelector) => {
    output += `${selector} ${childSelector}{${css}}`;
  });
  return output;
}
function generateCSSFromConfig(config) {
  let output = "";
  if (config) {
    output += generateCSS(config.styles);
    if (output.length && config.selector) {
      output = wrapCSSToSelector({
        selector: config.selector,
        childrenSelector: config.childrenSelector,
        css: output
      });
    }
    output += config.css ?? "";
  }
  return output;
}
function injectToolCSS(config) {
  const {
    id = "",
    enable = false
  } = config;
  const toolId = `asw-${id}`;
  if (enable) {
    const css = generateCSSFromConfig(config);
    addStylesheet({
      css,
      id: toolId
    });
  } else {
    document.getElementById(toolId)?.remove();
  }
  document.documentElement.classList.toggle(toolId, enable);
}

// src/tools/stopAnimations.ts
var stopAnimationsConfig = {
  id: "stop-animations",
  selector: `html`,
  childrenSelector: ["*"],
  styles: {
    "transition": "none",
    "animation-fill-mode": "forwards",
    "animation-iteration-count": "1",
    "animation-duration": ".01s"
  }
};
function stopAnimations(enable = false) {
  injectToolCSS({
    ...stopAnimationsConfig,
    enable
  });
}

// src/tools/readableFont.ts
var readableFontConfig = {
  id: "readable-font",
  selector: `html`,
  childrenSelector: [...ALL_ELEMENT_SELECTORS, ...TEXT_SELECTORS],
  styles: {
    "font-family": "OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif"
  },
  css: `@font-face {font-family: OpenDyslexic3;src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");}`
};
function readableFont(enable = false) {
  injectToolCSS({
    ...readableFontConfig,
    enable
  });
}

// src/tools/bigCursor.ts
var bigCursorConfig = {
  id: "big-cursor",
  selector: `body`,
  childrenSelector: ["*"],
  styles: {
    "cursor": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='98px' height='98px' viewBox='0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z'/%3E%3Cpath fill='%23212121' d='m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z'/%3E%3C/svg%3E") 40 15, auto`
  }
};
function bigCursor(enable = false) {
  injectToolCSS({
    ...bigCursorConfig,
    enable
  });
}

// src/tools/highlightTitle.ts
var highlightTitleConfig = {
  id: "highlight-title",
  selector: `html`,
  childrenSelector: HEADER_SELECTORS,
  styles: {
    "outline": "2px solid #0048ff",
    "outline-offset": "2px"
  }
};
function highlightTitle(enable = false) {
  injectToolCSS({
    ...highlightTitleConfig,
    enable
  });
}

// src/tools/readingGuide.html
var readingGuide_default = '<div class="asw-rg asw-rg-top"></div><div class="asw-rg asw-rg-bottom" style="top: auto;bottom: 0;"></div>';

// src/tools/readingGuide.css
var readingGuide_default2 = ".asw-rg{position:fixed;top:0;left:0;right:0;width:100%;height:0;pointer-events:none;background-color:#000c;z-index:1000000}\n";

// src/tools/readingGuide.ts
function readingGuide(enable = false) {
  let guide = document.querySelector(".asw-rg-container");
  if (enable) {
    if (!guide) {
      guide = document.createElement("div");
      guide.classList.add("asw-rg-container");
      guide.innerHTML = `<style>${readingGuide_default2}</style>${readingGuide_default}`;
      const rgTop = guide.querySelector(".asw-rg-top");
      const rgBottom = guide.querySelector(".asw-rg-bottom");
      const margin = 20;
      window.__asw__onScrollReadableGuide = (event) => {
        rgTop.style.height = `${event.clientY - margin}px`;
        rgBottom.style.height = `${window.innerHeight - event.clientY - margin * 2}px`;
      };
      document.addEventListener("mousemove", window.__asw__onScrollReadableGuide, { passive: false });
      document.body.appendChild(guide);
    }
  } else {
    guide?.remove();
    if (window.__asw__onScrollReadableGuide) {
      document.removeEventListener("mousemove", window.__asw__onScrollReadableGuide);
      delete window.__asw__onScrollReadableGuide;
    }
  }
}

// src/tools/highlightLinks.ts
var highlightLinksConfig = {
  id: "highlight-links",
  selector: `html`,
  childrenSelector: LINKS_SELECTORS,
  styles: {
    "outline": "2px solid #0048ff",
    "outline-offset": "2px"
  }
};
function highlightLinks(enable = false) {
  injectToolCSS({
    ...highlightLinksConfig,
    enable
  });
}

// src/tools/adjustLetterSpacing.ts
var adjustLetterSpacingConfig = {
  id: "letter-spacing",
  selector: `html`,
  childrenSelector: ALL_ELEMENT_SELECTORS,
  styles: {
    "letter-spacing": "2px"
  }
};
function adjustLetterSpacing(enable = false) {
  injectToolCSS({
    ...adjustLetterSpacingConfig,
    enable
  });
}

// src/tools/adjustLineHeight.ts
var adjustLineHeightConfig = {
  id: "line-height",
  selector: `html`,
  childrenSelector: ALL_ELEMENT_SELECTORS,
  styles: {
    "line-height": "3"
  }
};
function adjustLineHeight(enable = false) {
  injectToolCSS({
    ...adjustLineHeightConfig,
    enable
  });
}

// src/tools/adjustFontWeight.ts
var adjustFontWeightConfig = {
  id: "font-weight",
  selector: `html`,
  childrenSelector: ALL_ELEMENT_SELECTORS,
  styles: {
    "font-weight": "700"
  }
};
function adjustFontWeight(enable = false) {
  injectToolCSS({
    ...adjustFontWeightConfig,
    enable
  });
}

// src/views/menu/renderTools.ts
function renderTools() {
  const states = userSettings?.states;
  highlightTitle(states["highlight-title"]);
  highlightLinks(states["highlight-links"]);
  adjustLetterSpacing(states["letter-spacing"]);
  adjustLineHeight(states["line-height"]);
  adjustFontWeight(states["font-weight"]);
  readableFont(states["readable-font"]);
  readingGuide(states["readable-guide"]);
  stopAnimations(states["stop-animations"]);
  bigCursor(states["big-cursor"]);
}

// src/enum/Filters.ts
var FILTERS = {
  "dark-contrast": {
    styles: {
      "color": "#FFF",
      "fill": "#FFF",
      "background-color": "#000"
    },
    childrenSelector: TEXT_SELECTORS
  },
  "light-contrast": {
    styles: {
      "color": "#000",
      "fill": "#000",
      "background-color": "#FFF"
    },
    childrenSelector: TEXT_SELECTORS
  },
  "high-contrast": {
    styles: {
      "filter": "contrast(125%)"
    }
  },
  "high-saturation": {
    styles: {
      "filter": "saturate(200%)"
    }
  },
  "low-saturation": {
    styles: {
      "filter": "saturate(50%)"
    }
  },
  "monochrome": {
    styles: {
      "filter": "grayscale(100%)"
    }
  }
};

// src/tools/enableContrast.ts
function enableContrast(contrast) {
  const filter = FILTERS[contrast];
  if (!filter) {
    document.getElementById("asw-filter-style")?.remove();
    document.documentElement.classList.remove("aws-filter");
    return;
  }
  const css = generateCSSFromConfig({
    ...filter,
    selector: "html.aws-filter"
  });
  addStylesheet({ css, id: "asw-filter-style" });
  document.documentElement.classList.add("aws-filter");
}

// src/views/menu/runAccessibility.ts
function runAccessibility() {
  adjustFontSize(userSettings?.states?.fontSize);
  renderTools();
  enableContrast(userSettings?.states?.contrast);
}

// src/views/widget/widget.html
var widget_default = '<div class="asw-widget"><a href="https://accessibility-widget.pages.dev" target="_blank" class="asw-menu-btn" title="Open Accessibility Menu" role="button" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" style="fill:white;" viewBox="0 0 24 24" width="30px" height="30px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></a></div>';

// src/views/widget/widget.css
var widget_default2 = ".asw-widget,.asw-menu{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;-webkit-font-smoothing:antialiased}.asw-widget *,.asw-menu *{box-sizing:border-box!important}.asw-menu-btn{position:fixed;z-index:500000;left:30px;bottom:30px;box-shadow:0 5px 15px #252c6126,0 2px 4px #5d649433;transition:transform .2s ease;border-radius:50%;align-items:center;justify-content:center;width:58px;height:58px;display:flex;cursor:pointer;border:3px solid white!important;outline:5px solid #0048ff!important;text-decoration:none!important;background:#326cff!important;background:linear-gradient(96deg,#326cff,#0048ff)!important}.asw-menu-btn svg{width:36px;height:36px;min-height:36px;min-width:36px;max-width:36px;max-height:36px;background:transparent!important}.asw-menu-btn:hover{transform:scale(1.05)}@media only screen and (max-width: 768px){.asw-menu-btn{width:42px;height:42px}.asw-menu-btn svg{width:26px;height:26px;min-height:26px;min-width:26px;max-width:26px;max-height:26px}}\n";

// src/views/menu/menu.html
var menu_default = '<div class="asw-menu"><div class="asw-menu-header"><div class="asw-menu-title asw-translate">Accessibility Menu</div><div style="gap:15px;"><button type="button" class="asw-menu-reset" title="Reset settings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4c2.1 0 4.1.8 5.6 2.3 3.1 3.1 3.1 8.2 0 11.3a7.78 7.78 0 0 1-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7a6.1 6.1 0 0 0 0-8.5A6.07 6.07 0 0 0 12 6v4.6l-5-5 5-5V4M6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8.5.5 1.1.9 1.8 1.2l-.6 2a8 8 0 0 1-2.7-1.8Z"/></svg></button> <button type="button" class="asw-menu-close" title="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg></button></div></div><div class="asw-menu-content"><div class="asw-card"><select id="asw-language" title="Language" class="asw-select"></select></div><div class="asw-card"><div class="asw-card-title">Content Adjustments</div><div class="asw-adjust-font"><div class="asw-label" style="margin:0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="margin-right:15px;"><path d="M2 4v3h5v12h3V7h5V4H2m19 5h-9v3h3v7h3v-7h3V9Z"/></svg><div class="asw-translate">Adjust Font Size</div></div><div><div class="asw-minus" data-key="font-size" role="button" aria-pressed="false" title="Decrease Font Size" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2Z"/></svg></div><div class="asw-amount">100%</div><div class="asw-plus" data-key="font-size" role="button" aria-pressed="false" title="Increase Font Size" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/></svg></div></div></div><div class="asw-items content"></div></div><div class="asw-card"><div class="asw-card-title">Color Adjustments</div><div class="asw-items contrast"></div></div><div class="asw-card"><div class="asw-card-title">Tools</div><div class="asw-items tools"></div></div><div class="asw-card"><button type="button" class="asw-menu-reset asw-menu-reset-footer-btn asw-translate" title="Reset settings">Reset settings</button></div></div><div class="asw-footer"><a href="https://accessifly.pages.dev" target="_blank">Web Accessibility By <span style="font-weight:700;color:inherit;">AccessiFly</span></a></div></div><div class="asw-overlay"></div>';

// src/icons/monochromeIcon.svg
var monochromeIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19 19-7-8v8H5l7-8V5h7m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>';

// src/icons/lowSaturationIcon.svg
var lowSaturationIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6Z"/></svg>';

// src/icons/highSaturationIcon.svg
var highSaturationIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4m6.7-3.6a6.06 6.06 0 0 0-.86-.4 5.98 5.98 0 0 0 3.86-5.59 6 6 0 0 0-6.78.54A5.99 5.99 0 0 0 12 .81a6 6 0 0 0-2.92 6.14A6 6 0 0 0 2.3 6.4 5.95 5.95 0 0 0 6.16 12a6 6 0 0 0-3.86 5.58 6 6 0 0 0 6.78-.54A6 6 0 0 0 12 23.19a6 6 0 0 0 2.92-6.14 6 6 0 0 0 6.78.54 5.98 5.98 0 0 0-3-5.19Z"/></svg>';

// src/icons/lightContrastIcon.svg
var lightContrastIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-2.69L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69Z"/></svg>';

// src/icons/darkContrastIcon.svg
var darkContrastIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 12c0-4.5-1.92-8.74-6-10a10 10 0 0 0 0 20c4.08-1.26 6-5.5 6-10Z"/></svg>';

// src/icons/highContrastIcon.svg
var highContrastIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 17.93a8 8 0 0 1 0-15.86v15.86zm2-15.86a8 8 0 0 1 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87a8 8 0 0 1-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93a8.4 8.4 0 0 1-.19 1z"/></svg>';

// src/views/menu/FilterButtons.ts
var FilterButtons_default = [
  {
    label: "Monochrome",
    key: "monochrome",
    icon: monochromeIcon_default
  },
  {
    label: "Low Saturation",
    key: "low-saturation",
    icon: lowSaturationIcon_default
  },
  {
    label: "High Saturation",
    key: "high-saturation",
    icon: highSaturationIcon_default
  },
  {
    label: "High Contrast",
    key: "high-contrast",
    icon: highContrastIcon_default
  },
  {
    label: "Light Contrast",
    key: "light-contrast",
    icon: lightContrastIcon_default
  },
  {
    label: "Dark Contrast",
    key: "dark-contrast",
    icon: darkContrastIcon_default
  }
];

// src/icons/highlightTitleIcon.svg
var highlightTitleIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4H5Z"/></svg>';

// src/icons/formatBoldIcon.svg
var formatBoldIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5 15.5H10v-3h3.5A1.5 1.5 0 0 1 15 14a1.5 1.5 0 0 1-1.5 1.5m-3.5-9h3A1.5 1.5 0 0 1 14.5 8 1.5 1.5 0 0 1 13 9.5h-3m5.6 1.29c.97-.68 1.65-1.79 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.1 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42Z"/></svg>';

// src/icons/lineHeightIcon.svg
var lineHeightIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 22H3v-2h18v2m0-18H3V2h18v2m-11 9.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z"/></svg>';

// src/icons/letterSpacingIcon.svg
var letterSpacingIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 3v18h-2V3h2M4 3v18H2V3h2m6 10.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z"/></svg>';

// src/icons/dyslexiaFontIcon.svg
var dyslexiaFontIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.59 11.59-8.09 8.09L9.83 16l-1.41 1.41 5.08 5.09L23 13M6.43 11 8.5 5.5l2.07 5.5m1.88 5h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3Z"/></svg>';

// src/icons/highlightLinksIcon.svg
var highlightLinksIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14m-5.06-8.94a3.37 3.37 0 0 1 0 4.75L11.73 17A3.29 3.29 0 0 1 7 17a3.31 3.31 0 0 1 0-4.74l1.35-1.36-.01.6c-.01.5.07 1 .23 1.44l.05.15-.4.41a1.6 1.6 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15 0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24.91.91 0 0 1 1.24 0m4.06-.7c0 .9-.35 1.74-1 2.38l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14.4-.42a1.6 1.6 0 0 0 0-2.28 1.64 1.64 0 0 0-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14 0 .44.18.83.48 1.14.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25.88.88 0 0 1-.62-.25 3.36 3.36 0 0 1 0-4.75L12.27 7A3.31 3.31 0 0 1 17 7c.65.62 1 1.46 1 2.36Z"/></svg>';

// src/views/menu/ContentButtons.ts
var ContentButtons_default = [
  {
    label: "Font Weight",
    key: "font-weight",
    icon: formatBoldIcon_default
  },
  {
    label: "Line Height",
    key: "line-height",
    icon: lineHeightIcon_default
  },
  {
    label: "Letter Spacing",
    key: "letter-spacing",
    icon: letterSpacingIcon_default
  },
  {
    label: "Dyslexia Font",
    key: "readable-font",
    icon: dyslexiaFontIcon_default
  },
  {
    label: "Highlight Links",
    key: "highlight-links",
    icon: highlightLinksIcon_default
  },
  {
    label: "Highlight Title",
    key: "highlight-title",
    icon: highlightTitleIcon_default
  }
];

// src/icons/bigCursorIcon.svg
var bigCursorIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 1.07C7.05 1.56 4 4.92 4 9h7m-7 6a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-4H4m9-9.93V9h7a8 8 0 0 0-7-7.93Z"/></svg>';

// src/icons/stopAnimationsIcon.svg
var stopAnimationsIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.54-4.46-10-10-10-1.17 0-2.3.19-3.38.56l.7 1.94A7.15 7.15 0 0 1 12 3.97 8.06 8.06 0 0 1 20.03 12 8.06 8.06 0 0 1 12 20.03 8.06 8.06 0 0 1 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66A10.37 10.37 0 0 0 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53 0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6 2.67 6 6 6 6-2.67 6-6m-7-3v6H9V9m6 0v6h-2V9"/></svg>';

// src/icons/readingGuideIcon.svg
var readingGuideIcon_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54A13.15 13.15 0 0 0 3 8v11c3.5 0 6.64 1.35 9 3.54A13.15 13.15 0 0 1 21 19V8c-3.5 0-6.64 1.35-9 3.54Z"/></svg>';

// src/enum/TOOL_PRESETS.ts
var TOOL_PRESETS_default = [
  {
    label: "Big Cursor",
    key: "big-cursor",
    icon: bigCursorIcon_default
  },
  {
    label: "Stop Animations",
    key: "stop-animations",
    icon: stopAnimationsIcon_default
  },
  {
    label: "Reading Guide",
    key: "readable-guide",
    icon: readingGuideIcon_default
  }
];

// src/views/menu/renderButtons.ts
function renderButtons(buttons, btnClass) {
  let _html = "";
  for (let i = buttons.length; i--; ) {
    const button = buttons[i];
    _html += `<button class="asw-btn ${btnClass || ""}" type="button" data-key="${button.key}" title="${button.label}">${button.icon}<span class="asw-translate">${button.label}</span></button>`;
  }
  return _html;
}

// src/views/menu/reset.ts
function reset() {
  document?.querySelectorAll(".asw-selected")?.forEach((el) => el?.classList?.remove("asw-selected"));
  userSettings.states = {};
  runAccessibility();
  saveUserSettings();
}

// import("../locales/**/*.json") in src/i18n/Languages.ts
var globImport_locales_json = __glob({
  "../locales/am.json": () => Promise.resolve().then(() => __toESM(require_am())),
  "../locales/ar.json": () => Promise.resolve().then(() => __toESM(require_ar())),
  "../locales/bg.json": () => Promise.resolve().then(() => __toESM(require_bg())),
  "../locales/bn.json": () => Promise.resolve().then(() => __toESM(require_bn())),
  "../locales/ca.json": () => Promise.resolve().then(() => __toESM(require_ca())),
  "../locales/cs.json": () => Promise.resolve().then(() => __toESM(require_cs())),
  "../locales/da.json": () => Promise.resolve().then(() => __toESM(require_da())),
  "../locales/de.json": () => Promise.resolve().then(() => __toESM(require_de())),
  "../locales/el.json": () => Promise.resolve().then(() => __toESM(require_el())),
  "../locales/en.json": () => Promise.resolve().then(() => __toESM(require_en())),
  "../locales/es.json": () => Promise.resolve().then(() => __toESM(require_es())),
  "../locales/fa.json": () => Promise.resolve().then(() => __toESM(require_fa())),
  "../locales/fi.json": () => Promise.resolve().then(() => __toESM(require_fi())),
  "../locales/fil.json": () => Promise.resolve().then(() => __toESM(require_fil())),
  "../locales/fr.json": () => Promise.resolve().then(() => __toESM(require_fr())),
  "../locales/he.json": () => Promise.resolve().then(() => __toESM(require_he())),
  "../locales/hi.json": () => Promise.resolve().then(() => __toESM(require_hi())),
  "../locales/hr.json": () => Promise.resolve().then(() => __toESM(require_hr())),
  "../locales/hu.json": () => Promise.resolve().then(() => __toESM(require_hu())),
  "../locales/id.json": () => Promise.resolve().then(() => __toESM(require_id())),
  "../locales/it.json": () => Promise.resolve().then(() => __toESM(require_it())),
  "../locales/ja.json": () => Promise.resolve().then(() => __toESM(require_ja())),
  "../locales/ka.json": () => Promise.resolve().then(() => __toESM(require_ka())),
  "../locales/kn.json": () => Promise.resolve().then(() => __toESM(require_kn())),
  "../locales/ko.json": () => Promise.resolve().then(() => __toESM(require_ko())),
  "../locales/ku.json": () => Promise.resolve().then(() => __toESM(require_ku())),
  "../locales/lb.json": () => Promise.resolve().then(() => __toESM(require_lb())),
  "../locales/lv.json": () => Promise.resolve().then(() => __toESM(require_lv())),
  "../locales/ml.json": () => Promise.resolve().then(() => __toESM(require_ml())),
  "../locales/mn.json": () => Promise.resolve().then(() => __toESM(require_mn())),
  "../locales/ms.json": () => Promise.resolve().then(() => __toESM(require_ms())),
  "../locales/my.json": () => Promise.resolve().then(() => __toESM(require_my())),
  "../locales/nl.json": () => Promise.resolve().then(() => __toESM(require_nl())),
  "../locales/no.json": () => Promise.resolve().then(() => __toESM(require_no())),
  "../locales/pa.json": () => Promise.resolve().then(() => __toESM(require_pa())),
  "../locales/pl.json": () => Promise.resolve().then(() => __toESM(require_pl())),
  "../locales/pt.json": () => Promise.resolve().then(() => __toESM(require_pt())),
  "../locales/ro.json": () => Promise.resolve().then(() => __toESM(require_ro())),
  "../locales/ru.json": () => Promise.resolve().then(() => __toESM(require_ru())),
  "../locales/si.json": () => Promise.resolve().then(() => __toESM(require_si())),
  "../locales/sk.json": () => Promise.resolve().then(() => __toESM(require_sk())),
  "../locales/sl.json": () => Promise.resolve().then(() => __toESM(require_sl())),
  "../locales/sr-SP.json": () => Promise.resolve().then(() => __toESM(require_sr_SP())),
  "../locales/sr.json": () => Promise.resolve().then(() => __toESM(require_sr())),
  "../locales/sv.json": () => Promise.resolve().then(() => __toESM(require_sv())),
  "../locales/sw.json": () => Promise.resolve().then(() => __toESM(require_sw())),
  "../locales/ta.json": () => Promise.resolve().then(() => __toESM(require_ta())),
  "../locales/te.json": () => Promise.resolve().then(() => __toESM(require_te())),
  "../locales/th.json": () => Promise.resolve().then(() => __toESM(require_th())),
  "../locales/tr.json": () => Promise.resolve().then(() => __toESM(require_tr())),
  "../locales/ur.json": () => Promise.resolve().then(() => __toESM(require_ur())),
  "../locales/vi.json": () => Promise.resolve().then(() => __toESM(require_vi())),
  "../locales/zh-Hans.json": () => Promise.resolve().then(() => __toESM(require_zh_Hans())),
  "../locales/zh-Hant.json": () => Promise.resolve().then(() => __toESM(require_zh_Hant()))
});

// src/i18n/Languages.ts
var LANGUAGES = [
  { code: "lv", label: "Latvie\u0161u (Latvian)" },
  { code: "am", label: "\u12A0\u121B\u122D\u129B (Amharic)" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Arabic)" },
  { code: "bg", label: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (Bulgarian)" },
  { code: "bn", label: "\u09AC\u09BE\u0982\u09B2\u09BE (Bengali)" },
  { code: "ca", label: "Catal\xE0 (Catalan)" },
  { code: "cs", label: "\u010De\u0161tina (Czech)" },
  { code: "da", label: "Danish (Denmark)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "el", label: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (Greek)" },
  { code: "en", label: "English (English)" },
  { code: "es", label: "Espa\xF1ol (Spanish)" },
  { code: "fa", label: "\u0641\u0627\u0631\u0633\u06CC (Persian)" },
  { code: "fi", label: "suomi (Finnish)" },
  { code: "fil", label: "Tagalog (Filipno)" },
  { code: "fr", label: "Fran\xE7ais (French)" },
  { code: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA (Hebrew)" },
  { code: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" },
  { code: "hr", label: "Hrvatski (Croatian)" },
  { code: "hu", label: "Magyar (Hungarian)" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)" },
  { code: "it", label: "Italiano (Italian)" },
  { code: "ja", label: "\u65E5\u672C\u8A9E (Japanese)" },
  { code: "ka", label: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (Georgian)" },
  { code: "kn", label: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (Kannada)" },
  { code: "ko", label: "\uD55C\uAD6D\uC5B4 (Korean)" },
  { code: "ku", label: "Kurd\xEE (Kurdish)" },
  { code: "lb", label: "L\xEBtzebuergesch (Luxembourgish)" },
  { code: "ml", label: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 (Malayalam)" },
  { code: "mn", label: "\u041C\u043E\u043D\u0433\u043E\u043B (Mongolian)" },
  { code: "ms", label: "Bahasa Malaysia (Malay)" },
  { code: "my", label: "\u1019\u103C\u1014\u103A\u1019\u102C (Burmese)" },
  { code: "nl", label: "Nederlands (Dutch)" },
  { code: "no", label: "Norsk (Norwegian)" },
  { code: "pa", label: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (Punjabi)" },
  { code: "pl", label: "Polski (Polish)" },
  { code: "pt", label: "Portugu\xEAs (Portuguese)" },
  { code: "ro", label: "Rom\xE2n\u0103 (Romanian)" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (Russian)" },
  { code: "si", label: "Sloven\u0161\u010Dina (Slovene)" },
  { code: "sk", label: "sloven\u010Dina (Slovak)" },
  { code: "sl", label: "sloven\u0161\u010Dina (Slovenian)" },
  { code: "sr", label: "Srpski (Serbian)" },
  { code: "sr-SP", label: "\u0421\u0440\u043F\u0441\u043A\u0438 (Serbian Cyrillic)" },
  { code: "sv", label: "Svenska (Swedish)" },
  { code: "sw", label: "Kiswahili (Swahili)" },
  { code: "ta", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (Tamil)" },
  { code: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (Telugu)" },
  { code: "th", label: "\u0E44\u0E17\u0E22 (Thai)" },
  { code: "tr", label: "T\xFCrk\xE7e (Turkish)" },
  { code: "ur", label: "\u0627\u0631\u062F\u0648 (Urdu)" },
  { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t (Vietnamese)" },
  { code: "zh-Hans", label: "\u7B80\u4F53\u4E2D\u6587 (Simplified Chinese)" },
  { code: "zh-Hant", label: "\u7E41\u9AD4\u4E2D\u6587 (Traditional Chinese)" }
];
var locales = LANGUAGES.map((lang) => lang.code);
var LANGUAGE_DICTIONARY = {};
async function loadLanguages() {
  for (const locale of locales) {
    LANGUAGE_DICTIONARY[locale] = (await globImport_locales_json(`../locales/${locale}.json`)).default;
  }
}

// src/views/menu/menu.css
var menu_default2 = '.asw-menu{position:fixed;display:flex;flex-direction:column;left:0;top:0;box-shadow:0 0 20px #00000080;opacity:1;transition:.3s;z-index:500000;overflow:hidden;background:#eff1f5;width:500px;line-height:1;font-size:16px;height:100%;letter-spacing:.015em}.asw-menu *{color:#000!important;font-family:inherit;padding:0;margin:0;line-height:1!important;letter-spacing:normal!important}.asw-menu-header{display:flex;align-items:center;justify-content:space-between;padding:10px 15px;height:55px;font-weight:700!important;background-color:#0848ca!important}.asw-menu-title{font-size:16px!important;color:#fff!important}.asw-menu-header svg{fill:#0848ca!important;width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;max-width:24px!important;max-height:24px!important}.asw-menu-header>div{display:flex}.asw-menu-reset,.asw-menu-close{padding:5px!important;margin:0!important;background:#fff!important;cursor:pointer!important;border-radius:50%!important;transition:opacity .3s ease!important;border:0!important;box-shadow:none!important;outline:none!important}.asw-menu-reset-footer-btn{border-radius:5px!important;width:100%!important;font-size:15px!important;font-weight:600!important;padding:15px!important;background:#0848ca!important;color:#fff!important}.asw-menu-reset:hover,.asw-menu-close:hover,.asw-menu-reset:focus,.asw-menu-close:focus,.asw-menu-reset-footer-btn:hover,.asw-menu-reset-footer-btn:focus{outline:3px solid hsla(0,0%,100%,.4)!important}.asw-card{margin:0 15px 20px}.asw-card-title{font-size:14px!important;padding:15px 0;font-weight:600!important;opacity:.8}.asw-menu .asw-select{width:100%!important;padding:0 15px!important;font-size:16px!important;font-family:inherit!important;font-weight:600!important;border-radius:45px!important;background:#fff!important;border:none!important;min-height:45px!important;max-height:45px!important;height:45px!important;color:inherit!important}.asw-items{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.asw-btn{aspect-ratio:6 / 5;border-radius:12px;padding:0 15px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:#333;font-size:16px!important;background:#fff!important;border:2px solid transparent!important;transition:border-color .2s ease;cursor:pointer;word-break:break-word;gap:10px;position:relative;width:auto!important;height:auto!important}.asw-btn .asw-translate,.asw-adjust-font .asw-label div{font-size:14px!important;font-weight:600!important}.asw-plus,.asw-minus{background-color:#eff1f5!important;border:2px solid transparent;transition:border .2s ease}.asw-plus:hover,.asw-minus:hover{border-color:#0848ca!important}.asw-amount{font-size:18px!important;font-weight:600!important}.asw-adjust-font svg{width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;max-width:24px!important;max-height:24px!important}.asw-btn svg{width:34px!important;height:34px!important;min-width:34px!important;min-height:34px!important;max-width:34px!important;max-height:34px!important}.asw-btn:hover,.asw-btn.asw-selected{border-color:#0848ca!important}.asw-btn.asw-selected svg,.asw-btn.asw-selected span{fill:#0848ca!important;color:#0848ca!important}.asw-btn.asw-selected:after{content:"";display:inline-block;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M382-240%20154-468l57-57%20171%20171%20367-367%2057%2057-424%20424Z%22%2F%3E%3C%2Fsvg%3E);background-size:contain;background-repeat:no-repeat;position:absolute;top:10px;right:10px;background-color:#0848ca!important;color:#fff;padding:6px;font-size:10px;width:18px;height:18px;border-radius:100%;line-height:6px}.asw-footer{bottom:0;left:0;right:0;background:#fff;padding:20px;text-align:center;border-top:2px solid #eff1f5}.asw-footer a{font-size:16px!important;text-decoration:none!important;color:#000!important;background:transparent!important;font-weight:600!important}.asw-footer a:hover,.asw-footer a:hover span{color:#0848ca!important}.asw-menu-content{flex:1;overflow-y:scroll;overflow-x:hidden;padding:30px 0 15px}.asw-adjust-font{background:#fff;padding:20px;margin-bottom:20px}.asw-adjust-font .asw-label{display:flex;justify-content:flex-start}.asw-adjust-font>div{display:flex;justify-content:space-between;margin-top:20px;align-items:center;font-size:15px}.asw-adjust-font .asw-label div{font-size:15px!important}.asw-adjust-font div[role=button]{background:#eff1f5!important;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer}.asw-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}@media only screen and (max-width: 560px){.asw-menu{width:100%}}@media only screen and (max-width: 420px){.asw-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem}}\n';

// src/globals/pluginConfig.ts
var pluginConfig = {
  lang: "en",
  position: "bottom-left",
  offset: [20, 20],
  size: 58
};

// src/i18n/translate.ts
function t(label) {
  const dictionary = LANGUAGE_DICTIONARY[userSettings.lang] ?? LANGUAGE_DICTIONARY["en"];
  return dictionary[label] ?? label;
}

// src/views/menu/translateWidget.ts
function getTranslatedLabel(el, defaultValue) {
  const key = el.getAttribute("data-translate") || defaultValue;
  if (!el.hasAttribute("data-translate") && defaultValue) {
    el.setAttribute("data-translate", key);
  }
  return t(key);
}
function translateWidget() {
  $widget.querySelectorAll(".asw-card-title, .asw-translate").forEach((el) => {
    const text = el.textContent?.trim() || "";
    el.textContent = getTranslatedLabel(el, text);
  });
  $widget.querySelectorAll("[title]").forEach((el) => {
    const title = el.getAttribute("title") || "";
    el.setAttribute("title", getTranslatedLabel(el, title));
  });
}

// src/i18n/changeLanguage.ts
function changeLanguage(newLang) {
  newLang = String(newLang || "").toLowerCase();
  if (!LANGUAGES.some((lang) => lang.code === newLang)) {
    newLang = "en";
  }
  if (userSettings.lang !== newLang) {
    userSettings.lang = newLang;
    const $lang = $menu.querySelector("#asw-language");
    if ($lang) {
      $lang.value = newLang;
    }
    translateWidget();
    saveUserSettings();
  }
}

// src/views/menu/toggleMenu.ts
function toggleMenu() {
  $menu.style.display = $menu.style.display === "none" ? "block" : "none";
}

// src/views/menu/renderMenu.ts
function renderMenu() {
  const $container = document.createElement("div");
  $container.innerHTML = `<style>${menu_default2}</style>` + menu_default;
  const $menu2 = $container.querySelector(".asw-menu");
  if (pluginConfig?.position?.includes("right")) {
    $menu2.style.right = "0px";
    $menu2.style.left = "auto";
  }
  $menu2.querySelector(".content").innerHTML = renderButtons(ContentButtons_default);
  $menu2.querySelector(".tools").innerHTML = renderButtons(TOOL_PRESETS_default, "asw-tools");
  $menu2.querySelector(".contrast").innerHTML = renderButtons(FilterButtons_default, "asw-filter");
  const states = userSettings?.states;
  const fontSize = Number(states?.fontSize) || 1;
  if (fontSize != 1) {
    $menu2.querySelector(".asw-amount").innerHTML = `${fontSize * 100}%`;
  }
  if (states) {
    const buttons = Array.from($menu2.querySelectorAll(".asw-btn"));
    Object.entries(states).forEach(([key, value]) => {
      if (value && key !== "fontSize") {
        const selector = key === "contrast" ? states[key] : key;
        const btn = buttons.find((b) => b.dataset.key === selector);
        if (btn) btn.classList.add("asw-selected");
      }
    });
  }
  if (!userSettings.lang && pluginConfig?.lang) {
    userSettings.lang = pluginConfig.lang;
  }
  if (!LANGUAGES.some((lang) => lang.code === userSettings.lang)) {
    userSettings.lang = "en";
  }
  const $lang = $menu2.querySelector("#asw-language");
  const langOptions = LANGUAGES.map((lang) => `<option value="${lang.code}">${lang.label}</option>`).join("");
  $lang.innerHTML = langOptions;
  $lang.value = userSettings.lang;
  $lang.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });
  $container.querySelectorAll(".asw-menu-close, .asw-overlay").forEach(
    (el) => el.addEventListener("click", toggleMenu)
  );
  $container.querySelectorAll(".asw-menu-reset").forEach(
    (el) => el.addEventListener("click", reset)
  );
  $menu2.querySelectorAll(".asw-plus, .asw-minus").forEach((el) => {
    el.addEventListener("click", () => {
      const difference = 0.1;
      let fontSize2 = userSettings?.states?.fontSize || 1;
      if (el.classList.contains("asw-minus")) {
        fontSize2 -= difference;
      } else {
        fontSize2 += difference;
      }
      fontSize2 = Math.max(fontSize2, 0.1);
      fontSize2 = Math.min(fontSize2, 2);
      fontSize2 = Number(fontSize2.toFixed(2));
      document.querySelector(".asw-amount").textContent = `${(fontSize2 * 100).toFixed(0)}%`;
      adjustFontSize(fontSize2);
      userSettings.states.fontSize = fontSize2;
      saveUserSettings();
    });
  });
  $menu2.querySelectorAll(".asw-btn").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.key;
      const isSelected = !el.classList.contains("asw-selected");
      if (el.classList.contains("asw-filter")) {
        $menu2.querySelectorAll(".asw-filter").forEach(
          (el2) => el2.classList.remove("asw-selected")
        );
        if (isSelected) {
          el.classList.add("asw-selected");
        }
        userSettings.states.contrast = isSelected ? key : false;
        enableContrast(userSettings.states.contrast);
        saveUserSettings();
        return;
      }
      el.classList.toggle("asw-selected", isSelected);
      userSettings.states[key] = isSelected;
      renderTools();
      saveUserSettings();
    });
  });
  $widget.appendChild($container);
  return $container;
}

// src/views/menu/menu.ts
var $menu;
function openMenu() {
  if ($menu) {
    toggleMenu();
  } else {
    $menu = renderMenu();
  }
  translateWidget();
}

// src/views/widget/widget.ts
var $widget;
function renderWidget() {
  $widget = document.createElement("div");
  $widget.classList.add("asw-container");
  $widget.innerHTML = `<style>${widget_default2}</style>${widget_default}`;
  const $btn = $widget.querySelector(".asw-menu-btn");
  Object.assign($btn.style, getButtonStyle());
  $btn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openMenu();
  });
  translateWidget();
  document.body.appendChild($widget);
  return $widget;
}
function getButtonStyle() {
  const {
    position = "bottom-left",
    offset = [20, 20]
  } = pluginConfig;
  const [offsetX = 20, offsetY = 25] = offset;
  const centerY = `calc(50% - 27.5px - ${offsetY}px)`;
  const centerX = `calc(50% - 27.5px - ${offsetX}px)`;
  switch (position) {
    case "bottom-right":
      return {
        bottom: `${offsetY}px`,
        right: `${offsetX}px`,
        left: "auto"
      };
    case "top-left":
      return {
        top: `${offsetY}px`,
        left: `${offsetX}px`,
        bottom: "auto"
      };
    case "top-right":
      return {
        top: `${offsetY}px`,
        right: `${offsetX}px`,
        left: "auto",
        bottom: "auto"
      };
    case "center-left":
      return {
        left: `${offsetX}px`,
        bottom: centerY
      };
    case "center-right":
      return {
        right: `${offsetX}px`,
        left: "auto",
        bottom: centerY
      };
    case "bottom-center":
      return {
        bottom: `${offsetY}px`,
        left: centerX
      };
    case "top-center":
      return {
        top: `${offsetY}px`,
        bottom: "auto",
        left: centerX
      };
    default:
      return {
        bottom: `${offsetY}px`,
        left: `${offsetX}px`
      };
  }
}

// src/sienna.ts
function sienna({
  options
}) {
  const savedSettings = getSavedUserSettings();
  Object.assign(pluginConfig, options);
  Object.assign(userSettings, savedSettings);
  runAccessibility();
  renderWidget();
  return {
    changeLanguage
  };
}

// src/utils/getScriptDataAttribute.ts
function getScriptDataAttribute(attr) {
  const key = `data-asw-${attr}`;
  const script = document.currentScript;
  if (script?.hasAttribute(key)) {
    return script.getAttribute(key);
  }
  return document.querySelector(`[${key}]`)?.getAttribute(key);
}

// src/i18n/getDefaultLanguage.ts
function getDefaultLanguage() {
  const language = getScriptDataAttribute("lang") || document.documentElement?.lang || navigator?.language || document.querySelector('meta[http-equiv="Content-Language"]')?.content;
  return language?.split(/[-_]/)?.[0]?.trim() || "en";
}

// src/utils/observeHTMLLang.ts
function observeHTMLLang() {
  const htmlEl = document.documentElement;
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "lang") {
        changeLanguage(getDefaultLanguage());
      }
    }
  });
  observer.observe(htmlEl, { attributes: true });
}

// src/entry.ts
async function initialize() {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    document.removeEventListener("readystatechange", initialize);
    const options = {
      lang: getDefaultLanguage(),
      position: getScriptDataAttribute("position"),
      offset: getScriptDataAttribute("offset")?.split(",").map(Number),
      size: getScriptDataAttribute("size")
    };
    await loadLanguages();
    window.SiennaPlugin = sienna({
      options
    });
    if (!getScriptDataAttribute("disableObserveLang")) {
      observeHTMLLang();
    }
  }
}
if (document.readyState === "complete" || document.readyState === "interactive") {
  initialize();
} else {
  document.addEventListener("readystatechange", initialize);
}
//# sourceMappingURL=sienna-accessibility.cjs.js.map
