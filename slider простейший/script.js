document.addEventListener('DOMContentLoaded', function () {
    let offset = 0; // смещение от левого края
    const sliderLine = document.querySelector(".slider-line");
    document.querySelector(".slider-next").addEventListener('click', function () {
        offset += 380;
        if (offset > 1140) {
            offset = 0;
        }
        sliderLine.style.left = -offset + "px";
    });
    document.querySelector(".slider-prev").addEventListener('click', function () {
        offset -= 380;
        if (offset < 0) {
            offset = 1140;
        }
        sliderLine.style.left = -offset + "px";
    });

});
