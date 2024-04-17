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
    // card input
    $(".card-input>input").on({
        "focus": function () {
            $(this).css("box-shadow", "0rem .25rem .25rem .3125rem rgba(0, 0, 0, .5)")

        },
        "focusout": function () {
            $(this).css("box-shadow", "none")

        }
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
    
    // delay for pay form
    $(".pay-form-btn").on({
        "click": function () {
            const multipleSpins = (spins) => {//set num of rotations and show info-screen
                for (let i = 1; i <= spins; i++) {
                    $('.process-circle').queue('spin-circle', function (next) {
                        $(this).css("display", "flex").animate({ rotate: `${i * 360}deg` }, 1000, "swing", next);
                    });
                }

                $('.process-circle').queue('spin-circle', function (next) {
                    $(".shadow-mask-noclick").css("display", "block")
                    $(".info-screen")
                        .fadeIn(200)
                        .css("display", "flex")
                    $("body").css("overflow", "hidden")
                });
                $('.process-circle').dequeue('spin-circle');
            }

            $(".main-pay>*").css("display", "none")
            $('.process-circle').css("display", "flex")
            multipleSpins(3);
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