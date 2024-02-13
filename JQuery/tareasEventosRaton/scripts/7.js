$(document).ready(function () {
    $("#icon")
        .hover(function () {
            $(this).css("color", "red");
        })
        .mouseleave(function () {
            $(this).css("color", "black");
        });
});