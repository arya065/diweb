$(document).ready(function () {
    $("img").mouseenter(function () {
        $(this).next()
            .css("display", "block")
            .stop()
            .animate({ opacity: 1 }, 100);
    });
    $("img").mouseleave(function () {
        $(this).next()
            // .css("display", "none")
            .animate({ opacity: 0 }, "slow");
    });
});