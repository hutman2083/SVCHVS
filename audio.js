var audio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "Приостановить";
  } 
  else {
    audio.pause();
    playPauseButton.innerHTML = "Воспроизвести";
  }
}