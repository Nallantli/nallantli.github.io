var waveform = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ffcc99',
    progressColor: '#cc9966',
    scrollParent: false,
    responsive: true,
    barWidth: 4,
    barGap: 1,
    hideScrollbar: true,
    cursorWidth: 1,
    cursorColor: '#ddd',
    normalize: true
});

let curr = "";

function loadSong(id, path) {
    if (curr == path) {
        waveform.seekTo(0);
        return;
    }
    curr = path;
    waveform.load(path);
    let old = document.getElementsByClassName("record");
    for (let i = 0; i < old.length; i++) {
        old[i].classList.remove("selected-record");
    }
    document.getElementById(id).classList.add("selected-record");
    waveform.on('ready', function() {
        waveform.play();
    });
}