document.addEventListener("DOMContentLoaded", function () {
    /*local variables*/
    let video = document.querySelector(".video");
    video.onloadedmetadata = () => {
        let tmpVol = document.querySelector(".sound-level>input").value;
        let duration = video.duration;
        initSettings(video);
        /*buttons*/
        let btn_play = document.querySelector(".play");
        let btn_pause = document.querySelector(".pause");
        let btn_mute = document.querySelector(".mute");
        let btn_unmute = document.querySelector(".unmute");
        let btn_volume = document.querySelector(".sound-level>input");
        let btn_repeat = document.querySelector(".repeat");
        let btn_unrepeat = document.querySelector(".repeat-off");
        let btn_timeline = document.querySelector(".current-line");
        let btn_forward = document.querySelector(".forward");
        let btn_backward = document.querySelector(".backward");
        let btn_stop = document.querySelector(".stop");
        let btn_fullscreen = document.querySelector(".controls-screen");
        /*events*/
        btn_play.addEventListener("click", () => handlePlay(video));
        btn_pause.addEventListener("click", () => handlePlay(video));
        btn_mute.addEventListener("click", () => handleMute(video, btn_volume));
        btn_unmute.addEventListener("click", () => handleMute(video, btn_volume));
        btn_volume.addEventListener("change", () => setVolume(video, btn_volume.value));
        btn_repeat.addEventListener("click", () => handleRepeat(video));
        btn_unrepeat.addEventListener("click", () => handleRepeat(video));
        video.addEventListener("timeupdate", () => changeTimeline(video));
        btn_timeline.addEventListener("input", () => handleTimeChange(video, btn_timeline.value));
        btn_forward.addEventListener("click", () => forward(video, 10));
        btn_backward.addEventListener("click", () => backward(video, 10));
        btn_stop.addEventListener("click", () => stop(video));
        btn_fullscreen.addEventListener("click", () => fullScreen());
        /*functions*/
        function handlePlay(video) {
            video.paused ? (video.play(), setInvisible(".pause", ".play")) : (video.pause(), setInvisible(".play", ".pause"));
        }
        function handleMute(video, btn_volume) {
            video.volume == 0.0 ? (video.volume = tmpVol, btn_volume.value = tmpVol, setInvisible(".unmute", ".mute")) : (tmpVol = video.volume, video.volume = 0.0, btn_volume.value = 0.0, setInvisible(".mute", ".unmute"));
        }
        function setVolume(video, value) {
            console.log("here", value);
            if (value == 0) {
                handleMute(video, btn_volume);
            } else if (btn_mute.style.display == "block") {
                tmpVol = value;
                handleMute(video, btn_volume);
            }
            video.volume = value;
        }
        function handleRepeat(video) {
            video.loop ? (video.loop = false, setInvisible(".repeat-off", ".repeat")) : (video.loop = true, setInvisible(".repeat", ".repeat-off"));
        }
        function initSettings(video) {
            video.volume = tmpVol;
            handleRepeat(video);
            // set total song time
            let total = document.querySelector(".total-time");
            total.innerHTML = getTime(video.duration);
        }
        function getTime(time) {
            let min = Math.floor(time / 60);
            let sec = Math.floor(time % 60);
            sec < 10 ? sec = "0" + sec : sec;
            min < 10 ? min = "0" + min : min;
            return min + ":" + sec;
        }
        function changeTimeline(video) {
            // set current time
            let current = document.querySelector(".current-time");
            current.innerHTML = getTime(video.currentTime);
            // set current-line
            let line = document.querySelector(".current-line");
            let length = video.currentTime / video.duration;
            line.value = length;
        }
        function setInvisible(show, hide) {
            let first = document.querySelector(show);
            first.style.display = "block";
            let second = document.querySelector(hide);
            second.style.display = "none";
        }
        function handleTimeChange(video, value) {
            video.pause();
            setInvisible(".pause", ".play");
            video.currentTime = value * duration;
        }
        function forward(video, value) {
            video.currentTime = video.currentTime + value;
        }
        function backward(video, value) {
            video.currentTime = video.currentTime - value;
        }
        function stop(video) {
            if (video.loop) {
                video.loop = false;
                setInvisible(".repeat-off", ".repeat")
            }
            if(!video.paused){
                handlePlay(video);
            }
            video.currentTime = 0;
        }
        function fullScreen() {
            video.requestFullscreen();
        }
    };
});