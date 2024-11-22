const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const audioFiles = [{ title: 1, file: "Ishq.mp3" }, { title: 2, file: "Jo Tum Mere Ho.mp3" }, { title: 3, file: "Kasturi.mp3" }, { title: 4, file: "Pehle Bhi Main.mp3" }, { title: 5, file: "Tu Hai Kahan.mp3" }]


let currentIndex = 0;

let playTrack = (index) => {
    audio.src = audioFiles[index].file;
    audio.play();
}


const playPause = () =>{
    if (audio.paused) {
        playTrack(currentIndex);
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}


playPauseButton.addEventListener("click", () => {
  playPause(); 
})



document.getElementById("next-track").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % audioFiles.length;
    playTrack(currentIndex);
    playPause();
})