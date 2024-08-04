export default function muteAudio(enable=false) {
    document.querySelectorAll('audio').forEach((audio: HTMLAudioElement) => {
        if (!enable) {
            if (audio.classList.contains('asw-mute-audio')) {
                audio.classList.remove('asw-mute-audio');
                audio.play().catch(() => {});
            }
            return;
        }
        if (!audio.paused) {
            audio.classList.add('asw-mute-audio');
            audio.pause();
        }
    });

    document.querySelectorAll('video').forEach((video: HTMLVideoElement) => {
        if (!enable) {
            if (video.classList.contains('asw-mute-video')) {
                video.classList.remove('asw-mute-video');
                video.muted = false;
            }
            return;
        }
        if (!video.muted) {
            video.classList.add('asw-mute-video');
            video.muted = true;
        }
    });
}
