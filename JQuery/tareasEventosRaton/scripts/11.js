$(document).ready(function () {
    //ini
    $("#menu")
        .fadeOut(0);

    //scroll
    $(window).on('load scroll', function () {
        // $(window).scrollTop(500);
        if ($(window).scrollTop() >= 240) {
            $("#volverarriba")
                .stop(true)
                .fadeIn(250)
        } else {
            $("#volverarriba")
                .stop(true)
                .fadeOut(250)
        }
        $("#volverarriba").on({
            "click": function () {
                $(window)
                    // .animate()
                    .scrollTop(500);
            }
        })
    });
    //menu
    $("#menu-principal>span").on({
        "click": function () {
            // console.log($("#menu").queue()[0]);
            // if ($("#menu").css("display") == "none" || ($("#menu").css("opacity") != 1 && $("#menu").queue()[0] != "inprogress")) {
            if ($("#menu").css("display") == "none") {
                $("#menu")
                    .stop(true)
                    .fadeIn(250);
            } else {
                $("#menu")
                    .stop(true)
                    .fadeOut(250);
            }
        }
    });

    //menu options
    $("#menu>*").map((i, e) => {
        $(e).on({
            "click": function () {
                if ($(e).children("a").children("span").css("rotate") != "180deg") {
                    $(e).children("a").children("span")
                        .animate({ rotate: "180deg" })
                } else {
                    $(e).children("a").children("span")
                        .animate({ rotate: "0deg" })
                }
            }
        })
    });
});