$(document).ready(function () {
    $("#menu").children("li").children("a").hover(function () {
        $(this)
            .css("color", "#5d2e2e")
    });
    $("#menu").children("li").children("a").mouseleave(function () {
        $(this)
            .css("color", "#FFF")
    });
});