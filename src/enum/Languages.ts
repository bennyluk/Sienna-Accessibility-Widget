import en from "../locales/en.json";
import es from "../locales/es.json";
import ar from "../locales/ar.json";
import de from "../locales/de.json";
import hi from "../locales/hi.json";
import ko from "../locales/ko.json";
import ja from "../locales/ja.json";
import fr from "../locales/fr.json";
import it from "../locales/it.json";
import id from "../locales/id.json";
import pt from "../locales/pt.json";
import he from "../locales/he.json";
import ro from "../locales/ro.json";
import ms from "../locales/ms.json";
import el from "../locales/el.json";
import zh from "../locales/zh-Hans.json";

export interface ILanguage {
  code: string,
  label: string
}

export const LANGUAGE_DICTIONARY = {
  ar: ar,
  de: de,
  en: en,
  el: el,
  es: es,
  fr: fr,
  hi: hi,
  it: it,
  ja: ja,
  ko: ko,
  zh: zh,
  id: id,
  pt: pt,
  he: he,
  ro: ro,
  ms: ms
};

export const LANGUAGES: ILanguage[] = [
  {
  code: 'ar',
  label: 'العربية',
  },
  {
  code: 'de',
  label: 'Deutsch',
  },
  {
  code: 'el',
  label: 'Ελληνικά',
  },
  {
  code: 'en',
  label: 'English',
  },
  {
  code: 'es',
  label: 'Español',
  },
  {
  code: 'fr',
  label: 'Français',
  },
  {
  code: 'he',
  label: 'עברית',
  },
  {
  code: 'hi',
  label: 'हिन्दी',
  },
  {
  code: 'id',
  label: 'Bahasa Indonesia',
  },
  {
  code: 'it',
  label: 'Italiano',
  },
  {
  code: 'ja',
  label: '日本語',
  },
  {
  code: 'ko',
  label: '한국어',
  },
  {
  code: 'ms',
  label: 'Bahasa Malaysia',
  },
  {
  code: 'pt',
  label: 'Português',
  },
  {
  code: 'ro',
  label: 'Română',
  },
  {
  code: 'zh',
  label: '简体中文',
  },
];
