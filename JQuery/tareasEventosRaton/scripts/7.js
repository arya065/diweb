$(document).ready(function () {
    $("#icon").on({
        "mouseenter": function () {
            $(this).css("color", "red");
        },
        "mouseleave": function () {
            $(this).css("color", "black");
        }
    });
});