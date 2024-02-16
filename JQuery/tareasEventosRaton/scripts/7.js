$(document).ready(function () {
    $("label").on({
        "mouseenter": function () {
            $("label>span").css("background", "red");
        },
        "mouseleave": function () {
            $("label>span").css("background", "white");
        },
        "click": function () {
            $("ul").css({ "display": "block", "transform": "translateX(0px)", "transition": "0.5s" })
            $("#content").css({ "transform": "translateX(320px)", "transition": "0.5s" })
        },
        "dblclick": function () {
            $("ul").css({ "transform": "translateX(-320px)", "transition": "0.5s" })
            $("#content").css({ "transform": "translateX(0px)", "transition": "0.5s" })
        }
    });
});