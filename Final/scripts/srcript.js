$(document).ready(function () {
    // right menu
    $(".icon-options").on({
        "click": function () {
            $(".shadow-mask").css("display", "block")
            $(".right-menu").css("display", "flex")
            $("body").css("overflow", "hidden")
        }
    })
    $(".shadow-mask").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".right-menu").css("display", "none")
            $("body").css("overflow", "scroll")
        }
    })
    $(".icon-close").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".right-menu").css("display", "none")
            $("body").css("overflow", "scroll")
        }
    })

    // scroll
    $(".slider-container").scroll(function () {
        console.log("slider scroll");
    })
})