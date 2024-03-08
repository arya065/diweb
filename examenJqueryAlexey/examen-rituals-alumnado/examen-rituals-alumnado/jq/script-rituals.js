$(document).ready(function () {
    //MOBILE VERSION
    let tmp = $(window.innerWidth)[0]
    if (tmp < 680) {


        $("#menu-principal>label").on({
            "click": function () {
                let color = $("#menu-principal>label>span").css("color");
                if (color == "rgb(233, 161, 64)") {
                    $("#menu-principal>label>span")
                        .animate({ "color": "white" }, 250);
                } else {
                    $("#menu-principal>label>span")
                        .animate({ "color": "#e9a140" }, 250);
                }

                let status = $("#menu-toggle").css("display");
                console.log(status);
                if (status == "block") {
                    $("#menu-toggle")
                        .fadeOut()
                } else {
                    $("#menu-toggle")
                        .fadeIn()
                }
            }
        })

        $("#menu-toggle>li").on({
            "click": function () {
                //colors
                let color = $(this).children("a").children("span").css("color");
                if (color == "rgb(233, 161, 64)") {
                    $(this).children("a").children("span").animate({ "color": "white" }, 250);
                } else {
                    $(this).children("a").children("span").animate({ "color": "#e9a140" }, 250);
                }
                //move
                let deg = $(this).children("a").children("span:nth-child(2)").css("rotate");
                if (deg == "-90deg") {
                    $(this).children("a").children("span:nth-child(2)")
                        .animate({ "rotate": "0deg" });
                } else {
                    $(this).children("a").children("span:nth-child(2)")
                        .animate({ "rotate": "-90deg" });
                }
                //open submenu
                if (deg == "-90deg") {
                    $(this).children("ul").fadeOut({ duration: 250, queue: false });
                } else {
                    $(this).children("ul").fadeIn({ duration: 250, queue: false });
                }
            }
        })
    }
    //widow change
    function removeAllAttr() {
        $("#menu-toggle").removeAttr("style");
        $("#menu-toggle>li>a>span").removeAttr("style");
        $("#menu-toggle>li>ul").removeAttr("style");
        $("#menu-principal>label>span").removeAttr("style");
    }
    $(window).on({
        "resize": function () {
            removeAllAttr();
            $("#cartel").removeAttr("style");
        },
        "scroll": function () {
            removeAllAttr();
        }
    })
    //cartel
    function cartel(top, left) {
        $("#cartel")
            .fadeIn({ duration: 500, queue: false })
            .css({ "left": left, "top": top })
        $("#cartel").promise().done(function () {
            $("#cartel")
                .fadeOut({ duration: 500, queue: false })
        })
    }
    $("article>img").on({
        "click": function () {
            let top = $(this).offset().top;
            let left = $(this).offset().left;
            cartel(top, left);
        }

    })
    $("article>input").on({
        "click": function () {
            let top = $(this).offset().top;
            let left = $(this).offset().left;
            cartel(top, left);
        }
    })

    //COOKIES
    function closeCookie() {
        $("#cookies")
            .fadeOut()
    }
    $("#cookies").css({ "display": "flex", "flex-direction": "row", "justify-content": "space-around", "align-items": "center" });
    $("#cookies>span").on({
        "click": function () {
            closeCookie();
        }
    })
});