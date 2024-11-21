let audio = document.getElementById("audio");
let playPauseButton = document.getElementById("play-pause");

playPauseButton.addEventListener("click", () =>{
    if(audio.paused){
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }else{
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
})