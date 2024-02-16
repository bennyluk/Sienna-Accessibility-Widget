import ar from "../locales/ar.json";
import bg from "../locales/bg.json";
import bn from "../locales/bn.json";
import cs from "../locales/cs.json";
import de from "../locales/de.json";
import el from "../locales/el.json";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fi from "../locales/fi.json";
import fr from "../locales/fr.json";
import he from "../locales/he.json";
import hi from "../locales/hi.json";
import hr from "../locales/hr.json";
import hu from "../locales/hu.json";
import id from "../locales/id.json";
import it from "../locales/it.json";
import ja from "../locales/ja.json";
import ka from "../locales/ka.json";
import ko from "../locales/ko.json";
import ms from "../locales/ms.json";
import nl from "../locales/nl.json";
import no from "../locales/no.json";
import fa from "../locales/fa.json";
import pl from "../locales/pl.json";
import pt from "../locales/pt.json";
import ro from "../locales/ro.json";
import ru from "../locales/ru.json";
import sk from "../locales/sk.json";
import sr from "../locales/sr.json";
import sr_rs from "../locales/sr_rs.json";
import ta from "../locales/ta.json";
import zh_Hans from "../locales/zh-Hans.json";
import zh_Hant from "../locales/zh-Hant.json";
import vi from "../locales/vi.json";

export interface ILanguage {
  code: string;
  label: string;
}

export const LANGUAGE_DICTIONARY = {
  ar,
  bg,
  bn,
  cs,
  de,
  el,
  en,
  es,
  fi,
  fr,
  he,
  hi,
  hr,
  hu,
  id,
  it,
  ja,
  ka,
  ko,
  ms,
  nl,
  no,
  fa,
  pl,
  pt,
  ro,
  ru,
  sk,
  sr,
  "sr-SP": sr_rs,
  ta,
  zh_Hans,
  zh_Hant,
  vi,
};

export const LANGUAGES: ILanguage[] = [
  {
    code: "ar",
    label: "العربية (Arabic)",
  },
  {
    code: "bg",
    label: "български (Bulgarian)",
  },
  {
    code: "bn",
    label: "বাংলা (Bengali)",
  },
  {
    code: "cs",
    label: "čeština (Czech)",
  },
  {
    code: "de",
    label: "Deutsch (German)",
  },
  {
    code: "el",
    label: "Ελληνικά (Greek)",
  },
  {
    code: "en",
    label: "English (English)",
  },
  {
    code: "es",
    label: "Español (Spanish)",
  },
  {
    code: "fi",
    label: "suomi (Finnish)",
  },
  {
    code: "fr",
    label: "Français (French)",
  },
  {
    code: "he",
    label: "עברית (Hebrew)",
  },
  {
    code: "hi",
    label: "हिन्दी (Hindi)",
  },
  {
    code: "hr",
    label: "Hrvatski (Croatian)",
  },
  {
    code: "hu",
    label: "Magyar (Hungarian)",
  },
  {
    code: "id",
    label: "Bahasa Indonesia (Indonesian)",
  },
  {
    code: "it",
    label: "Italiano (Italian)",
  },
  {
    code: "ja",
    label: "日本語 (Japanese)",
  },
  {
    code: "ka",
    label: "ქართული (Georgian)",
  },
  {
    code: "ko",
    label: "한국어 (Korean)",
  },
  {
    code: "ms",
    label: "Bahasa Malaysia (Malay)",
  },
  {
    code: "nl",
    label: "Nederlands (Dutch)",
  },
  {
    code: "no",
    label: "Norsk (Norwegian)",
  },
  {
    code: "fa",
    label: "فارسی (Persian)",
  },
  {
    code: "pl",
    label: "Polski (Polish)",
  },
  {
    code: "pt",
    label: "Português (Portuguese)",
  },
  {
    code: "ro",
    label: "Română (Romanian)",
  },
  {
    code: "ru",
    label: "Русский (Russian)",
  },
  {
    code: "sk",
    label: "slovenčina (Slovak)",
  },
  {
    code: "sr",
    label: "Srpski (Serbian)",
  },
  {
    code: "sr-SP",
    label: "Српски (Serbian Cyrillic)",
  },
  {
    code: "ta",
    label: "Tagalog (Filipno)",
  },
  {
    code: "zh_Hans",
    label: "繁体中文 (Traditional Chinese)",
  },
  {
    code: "zh_Hant",
    label: "繁體中文 (Traditional Chinese)",
  },
  {
    code: "vi",
    label: "Tiếng Việt (Vietnamese)",
  }
];

