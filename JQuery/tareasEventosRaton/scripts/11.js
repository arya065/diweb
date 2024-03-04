$(document).ready(function () {
    //ini
    $("#menu")
        .fadeOut(0);
    $("#menu")
        .css("z-index", "2")
    $("#top")//fix header top
        .css({ "position": "sticky", "top": "0", "width": "100%", "z-index": "5", "background": "white" })

    //scroll
    $(window).on('load scroll', function () {
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
                $(window).scrollTop(0);
            }
        })
    });
    //menu
    $("#menu-principal>span").on({
        "click": function () {
            if ($("#menu").css("display") == "none") {
                $("#menu")
                    .stop(true)
                    .fadeIn(250);
                $(".overlay").css("display", "block");
            } else {
                $("#menu")
                    .stop(true)
                    .fadeOut(100);
                $(".overlay").css("display", "none");
            }
        }
    });
    //darkening
    $(".overlay").on({
        "click": function () {
            $("#menu")
                .stop(true)
                .fadeOut(100);
            $(".overlay")
                .css("display", "none")
        }
    });

    //menu options
    $("#menu>*").map((i, e) => {
        $(e).on({
            "click": function () {
                //stop all queries
                if ($(e).children("a").children("span").queue() == "inprogress") {
                    $(e).children("a").children("span").stop().animate({ rotate: "0deg" }, 250);
                    $(e).children("ul").stop().fadeOut(250);
                } else {
                    //animate arrow and submenu
                    $("#menu>*").map((i, e) => {
                        $(e).children("a").children("span")
                            .animate({ rotate: "0deg" }, 250)
                        $(e).children("ul")
                            .fadeOut(250)
                    })
                    if ($(e).children("a").children("span").css("rotate") != "180deg") {
                        $(e).children("a").children("span")
                            .animate({ rotate: "180deg" }, { duration: 250, queue: false })
                        $(e).children("ul")
                            .fadeIn({ duration: 250, queue: false })
                    } else {
                        $(e).children("a").children("span")
                            .animate({ rotate: "0deg" }, 250)
                        $(e).children("ul")
                            .fadeOut(250)
                    }
                }
            }
        })
    });

    //replace images
    $("article>a>picture>img").on({
        "mouseenter": function () {
            let src = $(this).attr("src");
            src = src.slice(0, src.length - 4) + "-1.jpg";
            $(this).attr("src", src);
        },
        "mouseleave": function () {
            let src = $(this).attr("src");
            src = src.slice(0, src.length - 6) + ".jpg";
            $(this).attr("src", src);
        }
    })
    $("article").on({
        "mouseenter": function () {
            $(this).children("button")
                .css("display", "block")
        },
        "mouseleave": function () {
            $(this).children("button")
                .css("display", "none")
        }
    })
});