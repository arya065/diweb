$(document).ready(function () {
    $("label").on({
        "mouseenter": function () {
            $("label>span")
                .animate({ backgroundColor: "red" }, "slow")
            // .css("background", targetColor);
        },
        "mouseleave": function () {
            $("label>span")
            .animate({ backgroundColor: "white" }, "slow")
            // .css("background", "white")
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