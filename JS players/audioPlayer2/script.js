document.addEventListener("DOMContentLoaded", function () {
    function voiceVolume(value) {
        let message = new SpeechSynthesisUtterance('Volume ' + value);
        message.lang = "en-EN";
        let speechSynthesis = window.speechSynthesis;
        speechSynthesis.speak(message);
    }
    /*local variables*/
    let audio = document.querySelector(".audio");

    audio.onloadedmetadata = () => {
        console.log("here", audio);

        let tmpVol = 0.0;
        let duration = 0;
        initSettings(audio);
        /*buttons*/
        let btn_play = document.querySelector(".play");
        let btn_pause = document.querySelector(".pause");
        let btn_mute = document.querySelector(".mute");
        let btn_unmute = document.querySelector(".unmute");
        let btn_volume = document.querySelector(".sound-level>input");
        console.log(btn_volume.value);
        let btn_repeat = document.querySelector(".repeat");
        let btn_unrepeat = document.querySelector(".repeat-off");
        /*events*/
        btn_play.addEventListener("click", () => handlePlay(audio));
        btn_pause.addEventListener("click", () => handlePlay(audio));
        btn_mute.addEventListener("click", () => handleMute(audio, btn_volume));
        // btn_volume.addEventListener("click", () => voiceVolume(Math.floor(audio.volume * 100)));
        btn_unmute.addEventListener("click", () => handleMute(audio, btn_volume));
        btn_volume.addEventListener("change", () => setVolume(audio, btn_volume.value));
        btn_repeat.addEventListener("click", () => handleRepeat(audio));
        btn_unrepeat.addEventListener("click", () => handleRepeat(audio));
        audio.addEventListener("timeupdate", () => changeTimeline(audio));
        /*functions*/
        function handlePlay(audio) {
            audio.paused ? (audio.play(), setInvisible(".play", ".pause")) : (audio.pause(), setInvisible(".pause", ".play"));
        }
        function handleMute(audio, btn_volume) {
            console.log("prev:");
            console.log("audio.volume:", audio.volume);
            console.log("btn.volume:", btn_volume.value);
            console.log("tmp.volume:", tmpVol);
            audio.volume == 0.0 ? (audio.volume = tmpVol, btn_volume.value = tmpVol, setInvisible(".unmute", ".mute")) : (tmpVol = btn_volume.value, audio.volume = 0.0, btn_volume.value = 0.0, setInvisible(".mute", ".unmute"));
            console.log("after:");
            console.log("audio.volume:", audio.volume);
            console.log("btn.volume:", btn_volume.value);
            console.log("tmp.volume:", tmpVol);
        }
        function setVolume(audio, value) {
            audio.volume = value;
        }
        function handleRepeat(audio) {
            audio.loop ? (audio.loop = false, setInvisible(".repeat-off", ".repeat")) : (audio.loop = true, setInvisible(".repeat", ".repeat-off"));
        }
        function initSettings(audio) {
            handleRepeat(audio);
            // set total song time
            let total = document.querySelector(".total-time");
            total.innerHTML = getTime(audio.duration);
            // set volume
            tmpVol = document.querySelector(".sound-level>input").value;
        }
        function getTime(time) {
            let min = Math.floor(time / 60);
            let sec = Math.floor(time % 60);
            sec < 10 ? sec = "0" + sec : sec;
            return min + ":" + sec;
        }
        function changeTimeline(audio) {
            // set current time
            let current = document.querySelector(".current-time");
            current.innerHTML = getTime(audio.currentTime);
            // set current-line
            let line = document.querySelector(".current-line");
            let length = audio.currentTime / audio.duration * 100;
            line.style.width = length + "%";
        }
        function setInvisible(show, hide) {
            let first = document.querySelector(show);
            first.style.display = "block";
            let second = document.querySelector(hide);
            second.style.display = "none";
        }
    };
});