$(document).ready(function () {
    $("input")
        .hover(function () {
            $(this).css({ "background-color": "yellowgreen", "border": "1px solid rgb(118, 118, 118)" });
        })
        .mouseleave(function () {
            $(this).css({ "background-color": "white", "border": "1px solid rgb(118, 118, 118)" });
        });
    $(document).keydown(function (e) {
        console.log(e.originalEvent.key);
        if (e.originalEvent.key == "d") {
            $("input").css({ "background-color": "red", "border": "1px solid rgb(118, 118, 118)" });
        }
    });
});