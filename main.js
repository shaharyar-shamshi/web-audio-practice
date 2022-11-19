const ctx = new AudioContext();

let audio;

fetch("./sound/sound.mp3")
    .then(data => {
        return data.arrayBuffer()
    })
    .then(arrayBuffer =>
        ctx.decodeAudioData(arrayBuffer))
    .then(decodeAudioData => {
        audio = decodeAudioData;
    })

function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}

window.addEventListener("mousedown", playback);