export default function disableAnimatedImages(enable = false) {
    const gifImages = document.querySelectorAll('img[src$=".gif"]');

    if (gifImages.length) {
        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect width="100%" height="100%" fill="white" stroke="black" stroke-width="2"/>
                <text x="50%" y="50%" font-family="Arial" font-size="16" fill="black" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
                    GIF Disabled
                </text>
            </svg>
        `;

        const staticImageBase64 = `data:image/svg+xml;base64,${btoa(svgContent)}`;

        gifImages.forEach(img => {
            const src = img.src;

            if (enable) {
                const naturalWidth = img.naturalWidth;
                const naturalHeight = img.naturalHeight;

                img.dataset.aswOrgSrc = img.src;
                img.src = staticImageBase64;
                img.style.width = `${naturalWidth}px`;
                img.style.height = `${naturalHeight}px`;
            } else {
                img.src = img.dataset.aswOrgSrc || src;  // Restore the original GIF
                img.alt = '';
                img.setAttribute('aria-label', 'GIF animation enabled.');
            }
        });
    }
}
