# 👩‍🦽 Sienna: Accessibility Widget for Websites

![Banner Image](images/banner.png)

[![GitHub license](https://img.shields.io/github/license/bennyluk/Sienna-Accessibility-Widget)](https://github.com/bennyluk/Sienna-Accessibility-Widget/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/bennyluk/Sienna-Accessibility-Widget)](https://github.com/bennyluk/Sienna-Accessibility-Widget/releases)
[![GitHub issues](https://img.shields.io/github/issues/bennyluk/Sienna-Accessibility-Widget)](https://github.com/bennyluk/Sienna-Accessibility-Widget/issues)

Sienna: accessibility widget for websites. easy to install, just copy and paste the plugin. Fast performance with lightweight plugin (~30kb).

## 🎉 Getting Started
[View Demo](https://accessibility-widget.pages.dev)

[Install the plugin quickly with just a copy and paste](https://accessibility-widget.pages.dev/#setup)

## 🚀 Features

✅ **Multilingual Support**: Supports multiple languages to ensure a seamless user experience for all users.

✅ **Dyslexia Font**:  Dyslexia font to make reading easier for dyslexic users.

✅ **Adjustable Font Size and Highlighting Text**: Users can easily adjust the font size and highlight text to their liking, making it easier to read content.

✅ **Bionic Reading**: Allows users to read content faster and more efficiently by highlighting parts of the words. ([text-vide](https://github.com/Gumball12/text-vide) package (MIT license) from [@Gumball12](https://github.com/Gumball12))

✅ **Color Adjustments, Contrast, Saturation, and Monochrome**: Allows users to customize the color scheme of your website, making it easier for them to read and navigate.

✅ **Reading Guide, Stop Animations, Hiding Images, and Big Cursor**: Helpful tools like a reading guide, the ability to stop animations, and a big cursor to make browsing your website easier for users with visual impairments.

✅ **Screen Reader**: Clicking or selecting text will read it out loud, making it easier for users with visual impairments to navigate your website.

✅ **Muting Audio**: Users can easily mute audio and video elements on your website, making it easier for them to focus on the content.

## 🐛 Known Issues

- The screen reader is disabled in Google Chrome as it would only read the selected text for 15 seconds, then stop. This is a known issue with Chrome and the `speechSynthesis` API.

## 📌 TODO

- Accessibility Profiles
- Voice Navigation
- Position of Button
- Inject Icon in code
- Support More Languages

## 📝 How to Use

Use the `sienna.min.js` file in the `dist` folder. You can include it in your HTML file like this:
```html
<script defer src="/dist/sienna.min.js"></script>
```

It is recommended to include the script at the end of the body tag to ensure that the DOM is fully loaded before the script is executed.
Also, using the `defer` attribute ensures that the script is executed after the DOM is parsed and does not block the rendering of the page.

## 🤝 Contributing
We welcome contributions from anyone who is interested in improving this. If you would like to contribute, please fork the repository and submit a pull request. ❤️

## 🎓 License
Sienna is released under the MIT License
