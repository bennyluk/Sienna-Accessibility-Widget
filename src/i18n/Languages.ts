export const LANGUAGES: ILanguage[] = [
  { code: "am", label: "አማርኛ (Amharic)" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "bg", label: "български (Bulgarian)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "ca", label: "Català (Catalan)" },
  { code: "cs", label: "čeština (Czech)" },
  { code: "da", label: "Danish (Denmark)" },
  { code: "de", label: "Deutsch (German)" },
  { code: "el", label: "Ελληνικά (Greek)" },
  { code: "en", label: "English (English)" },
  { code: "es", label: "Español (Spanish)" },
  { code: "fa", label: "فارسی (Persian)" },
  { code: "fi", label: "suomi (Finnish)" },
  { code: "fil", label: "Tagalog (Filipno)" },
  { code: "fr", label: "Français (French)" },
  { code: "he", label: "עברית (Hebrew)" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "hr", label: "Hrvatski (Croatian)" },
  { code: "hu", label: "Magyar (Hungarian)" },
  { code: "id", label: "Bahasa Indonesia (Indonesian)" },
  { code: "it", label: "Italiano (Italian)" },
  { code: "ja", label: "日本語 (Japanese)" },
  { code: "ka", label: "ქართული (Georgian)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "ku", label: "Kurdî (Kurdish)" },
  { code: "lb", label: "Lëtzebuergesch (Luxembourgish)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "mn", label: "Монгол (Mongolian)" },
  { code: "ms", label: "Bahasa Malaysia (Malay)" },
  { code: "my", label: "မြန်မာ (Burmese)" },
  { code: "nl", label: "Nederlands (Dutch)" },
  { code: "no", label: "Norsk (Norwegian)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "pl", label: "Polski (Polish)" },
  { code: "pt", label: "Português (Portuguese)" },
  { code: "ro", label: "Română (Romanian)" },
  { code: "ru", label: "Русский (Russian)" },
  { code: "si", label: "Slovenščina (Slovene)" },
  { code: "sk", label: "slovenčina (Slovak)" },
  { code: "sl", label: "slovenščina (Slovenian)" },
  { code: "sr", label: "Srpski (Serbian)" },
  { code: "sr-SP", label: "Српски (Serbian Cyrillic)" },
  { code: "sv", label: "Svenska (Swedish)" },
  { code: "sw", label: "Kiswahili (Swahili)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "th", label: "ไทย (Thai)" },
  { code: "tr", label: "Türkçe (Turkish)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "vi", label: "Tiếng Việt (Vietnamese)" },
  { code: "zh-Hans", label: "简体中文 (Simplified Chinese)" },
  { code: "zh-Hant", label: "繁體中文 (Traditional Chinese)" }
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