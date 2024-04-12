$(document).ready(function () {
    let page = localStorage.getItem('cur');
    page = page ?? 'home';
    console.log(page);

    // right menu
    $(".icon-options").on({
        "click": function () {
            $(".shadow-mask").css("display", "block")
            $(".right-menu")
                .fadeIn(200)
                .css({ "display": "flex" })
            $(".right-menu").css({ "opacity": "1" })
            $("body").css("overflow", "hidden")
        }
    })
    $(".shadow-mask").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".right-menu").css("display", "none")
            $(".info-screen").css("display", "none")
            $("body").css("overflow", "scroll")
        }
    })
    $(".icon-close").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".right-menu")
                .fadeOut(200)
            $("body").css("overflow", "scroll")
        }
    })

    // scroll slider
    $(".slider-container").scroll(function () {
        console.log("slider scroll");
    })
    // info-screen
    $(".item-controls-btn").on({
        "click": function () {
            $(".shadow-mask").css("display", "block")
            $(".info-screen").css("display", "flex")
            $("body").css("overflow", "hidden")
        }
    })
    $(".info-screen-btn").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".info-screen").css("display", "none")
            $("body").css("overflow", "scroll")
        }
    })

    // navigation
    $(".header-logo").on({//main page
        "click": function () {
            localStorage.setItem('cur', 'home');
            window.location.href = 'index.html';
        }
    })
    $(".recomended-item").on({//item page
        "click": function () {
            localStorage.setItem('cur', 'item');
            window.location.href = 'item.html';
        }
    })
    $(".menu-item").on({//item page
        "click": function () {
            localStorage.setItem('cur', 'item');
            window.location.href = 'item.html';
        }
    })
    $(".right-menu-options>p:nth-child(1)").on({//menu
        "click": function () {
            localStorage.setItem('cur', 'menu');
            window.location.href = 'menu.html';
        }
    })
    $(".right-menu-options>p:nth-child(2)").on({//booking
        "click": function () {
            localStorage.setItem('cur', 'booking');
            window.location.href = 'booking.html';
        }
    })
})