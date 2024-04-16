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
            $(".info-screen")
                .fadeIn(200)
                .css("display", "flex")
            $("body").css("overflow", "hidden")
        }
    })
    $(".info-screen-btn").on({
        "click": function () {
            $(".shadow-mask").css("display", "none")
            $(".info-screen")
                .fadeOut(200)
            $("body").css("overflow", "scroll")
        }
    })
    $(".about-form-btn").on({
        "click": function () {
            $(".shadow-mask").css("display", "block")
            $(".info-screen")
                .fadeIn(200)
                .css("display", "flex")
            $("body").css("overflow", "hidden")
        }
    })
    $(".pay-form-btn").on({
        "click": function () {
            let countRounding = 5;
            $('.main-pay>*').css("display", "none")
            $('.process-circle')
                .css("display", "flex")
                .animate({ rotate: `${countRounding * 360}deg` }, countRounding * 1000, "linear", function () {
                    $(".shadow-mask-noclick").css("display", "block")
                    $(".info-screen")
                        .fadeIn(200)
                        .css("display", "flex")
                    $("body").css("overflow", "hidden")
                })
        }
    })
    //additional info
    $('.info-pay-additional-title').on({
        'click': function () {
            if ($(".info-pay-additional-content").css("display") == "flex") {
                $('.info-pay-additional-content')
                    .fadeOut(200)
                $('.info-pay-additional-title>svg')
                    .css({ "transform": "rotate(0deg)" })
            } else {
                $('.info-pay-additional-content')
                    .fadeIn(200)
                    .css("display", "flex");
                $('.info-pay-additional-title>svg')
                    .css({ "transform": "rotate(180deg)" })
            }
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
    $(".right-menu-options>p:nth-child(3)").on({//about us
        "click": function () {
            localStorage.setItem('cur', 'about');
            window.location.href = 'about.html';
        }
    })
    $(".icon-order").on({//order view
        "click": function () {
            localStorage.setItem('cur', 'order check');
            window.location.href = 'order-check.html';
        }
    })
    $(".order-form-btn").on({//pay order
        "click": function () {
            localStorage.setItem('cur', 'pay form');
            window.location.href = 'pay-form.html';
        }
    })
    $(".pay-icon-close").on({//back from pay order
        "click": function () {
            localStorage.setItem('cur', 'order check');
            window.location.href = 'order-check.html';
        }
    })
    $(".conifrm-payment").on({//confirm payment and view order details
        "click": function () {
            localStorage.setItem('cur', 'order made');
            window.location.href = 'order-made.html';
        }
    })
})