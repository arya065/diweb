$(document).ready(function () {
    let page = localStorage.getItem('cur');
    page = page ?? 'home';
    console.log(page);

    if (page == "item") {
        $("header").css("position", "static")
        $(".header-logo").css("display", "block")
    } else if (page == "home") {
        $("header").css("position", "absolute")
        $(".header-logo").css("display", "none")
    }

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

    // scroll slider
    $(".slider-container").scroll(function () {
        console.log("slider scroll");
    })

    // navigation
    $(".recomended-item").on({
        "click": function () {
            localStorage.setItem('cur', 'item');
            window.location.href = 'item.html';
        }
    })
    $(".header-logo").on({
        "click": function () {
            localStorage.setItem('cur', 'home');
            window.location.href = 'index.html';
        }
    })
})