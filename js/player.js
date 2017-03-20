var theVideo, theExt, video, toggleButton, restart;

function init() {
    console.log("init fired");

    theVideo = document.querySelector("video")
    console.log(theVideo.currentSrc);

    video = document.querySelector("#myVideo");
    console.log(video.currentSrc);

    toggleButton = document.querySelector(".playerButton")
    toggleButton.addEventListener("click", togglePlay, false);

    restartButton = document.querySelector("#restartVideo");
    restartButton.addEventListener("click", toggleReset, false);

    var currentlyPlaying = theVideo.currentSrc;
    theExt = currentlyPlaying.substr(currentlyPlaying.lastIndexOf("."));
    console.log(theExt);

    var theButtons = document.querySelectorAll("button");
    for (i = 0; i < theButtons.length; i++) {
        theButtons[i].addEventListener("click", loadVid, false);
    }
}

    function togglePlay() {
        console.log("toggle click");
        if (video.paused) {
            video.play();
            this.firstChild.nodeValue = "Pause";
        } else {
            video.pause();
            this.firstChild.nodeValue = "Play";

            toggleButton.addEventListener("click", restart, false);
        }
    }

    function toggleReset() {
        console.log("Restart Video");
        video.play();
        video.currentTime = 0;
        video.load;
        toggleButton.firstChild.nodeValue = "Play";
    }

    function loadVid() {
        console.log("button click");

        theVideo.src = "video/" + this.id + theExt;
        theVideo.load();
        theVideo.play();
    }

window.addEventListener("load", init, false);