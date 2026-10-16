let currentAudio: HTMLAudioElement | null = null;
let currentStop: (() => void) | null = null;

export const audioManager = {
    register(audio: HTMLAudioElement, onStop: () => void) {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentStop?.();
        }
        currentAudio = audio;
        currentStop = onStop;
    },

    unregister(audio: HTMLAudioElement) {
        if (currentAudio === audio) {
            currentAudio = null;
            currentStop = null;
        }
    },
};