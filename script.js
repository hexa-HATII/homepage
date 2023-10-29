const video = document.querySelector('.video');
const btn = document.getElementById('play-pause');
const playSvg = document.getElementById('play');
const pauseSvg = document.getElementById('pause');

function togglePlayPause() {
    if (video.paused) {
        playSvg.style.display = 'none';
        pauseSvg.style.display = 'inline-block';
        video.play();
    } else {
        pauseSvg.style.display = 'none';
        playSvg.style.display = 'inline-block';
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}