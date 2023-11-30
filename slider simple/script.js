document.addEventListener('DOMContentLoaded', function () {
    let offset = 0; // смещение от левого края
    const sliderLine = document.querySelector(".slider-line");
    //go to the right
    document.querySelector(".slider-next").addEventListener('click', function () {
        offset += 380;
        if (offset > 1140) {
            offset = 0;
        }
        sliderLine.style.left = -offset + "px";
    });
    //go to the left
    document.querySelector(".slider-prev").addEventListener('click', function () {
        offset -= 380;
        if (offset < 0) {
            offset = 1140;
        }
        sliderLine.style.left = -offset + "px";
    });

});
