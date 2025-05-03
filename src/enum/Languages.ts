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
    code: "ca",
    label: "Català (Catalan)",
  },
  {
    code: "cs",
    label: "čeština (Czech)",
  },
  {
    code: "da",
    label: "Danish (Denmark)",
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
    code: "lb",
    label: "Lëtzebuergesch (Luxembourgish)",
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
    code: "si",
    label: "Slovenščina (Slovene)",
  },
  {
    code: "sl",
    label: "slovenščina (Slovenian)"
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
    code: "sv",
    label: "Svenska (Swedish)"
  },
  {
    code: "ta",
    label: "Tagalog (Filipno)",
  },
  {
    code: "tr",
    label: "Türkçe (Turkish)",
  },
  {
    code: "zh-Hans",
    label: "繁体中文 (Traditional Chinese)",
  },
  {
    code: "zh-Hant",
    label: "繁體中文 (Traditional Chinese)",
  },
  {
    code: "vi",
    label: "Tiếng Việt (Vietnamese)",
  }
];

const locales = LANGUAGES.map(lang => lang.code);
export interface ILanguage {
  code: string;
  label: string;
}

export const LANGUAGE_DICTIONARY: Record<string, ILanguage> = {};
// @ts-ignore
async function loadLanguages() {
  for (const locale of locales) {
    // @ts-ignore
    LANGUAGE_DICTIONARY[locale] = (await import(`../locales/${locale}.json`)).default;
  }
}

loadLanguages();