import en from "../locales/en.json";
import es from "../locales/es.json";
import ar from "../locales/ar.json";
import de from "../locales/de.json";
import hi from "../locales/hi.json";
import ko from "../locales/ko.json";
import ja from "../locales/ja.json";
import fr from "../locales/fr.json";
import it from "../locales/it.json";
import zh from "../locales/zh-Hans.json";

export interface ILanguage {
  code: string,
  label: string
}

export const LANGUAGE_DICTIONARY = {
  ar: ar,
  de: de,
  en: en,
  es: es,
  fr: fr,
  hi: hi,
  it: it,
  ja: ja,
  ko: ko,
  zh: zh,
};

export const LANGUAGES: ILanguage[] = [
  {
    code: 'ar',
    label: 'Arabic',
  },
  {
    code: 'de',
    label: 'German',
  },
  {
    code: 'en',
    label: 'English',
  },
  {
    code: 'es',
    label: 'Spanish',
  },
  {
    code: 'fr',
    label: 'French',
  },
  {
    code: 'hi',
    label: 'Hindi',
  },
  {
    code: 'it',
    label: 'Italian',
  },
  {
    code: 'ja',
    label: 'Japanese',
  },
  {
    code: 'ko',
    label: 'Korean',
  },
  {
    code: 'zh',
    label: 'Chinese (Simplified)',
  },
];