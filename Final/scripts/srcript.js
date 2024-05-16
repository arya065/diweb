$(document).ready(function () {
    let page = localStorage.getItem('cur');
    page = page ?? 'home';
    console.log(page);

    /* BURGER MENU */
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

    /* SLIDER */
    $(".slider-container").scroll(function () {
        console.log("slider scroll");
    })

    /* FORM */
    // card input
    $(".card-input>input").on({
        "focus": function () {
            $(this).css("box-shadow", "0rem .25rem .25rem .3125rem rgba(0, 0, 0, .5)")
        },
        "focusout": function () {
            if ($(this)[0].value.trim() == 0) {
                $(this).parent().children("div").text("Required field");
            } else {
                $(this).parent().children("div").text("");
            }
            $(this).css("box-shadow", "none")
        }
    })

    // form input
    $(".form-input-block>*").on({
        "focus": function () {
            $(this).css("box-shadow", "0rem 0rem .25rem .1rem rgba(0, 0, 0, .5)")
        },
        "focusout": function () {
            $(this).css("box-shadow", "none")

        }
    })
    $(".form-input-block>*:nth-child(1)").on({
        "focusout": function () {
            if ($(this)[0].value.trim() == 0) {
                $(this).css("box-shadow", "0rem 0rem .3125rem .125rem #F36C50");
                $(this).parent().children("div").text("Required field");
            } else {
                $(this).css("box-shadow", "none");
                $(this).parent().children("div").text("");
            }
        }
    })

    /* CAPTCHA */
    $(".input-captcha").on({
        "click": function () {
            console.log("here");
            $(this)
                .queue("captcha", function (next) {//make circle and reduce it
                    $(this).animate({
                        "border-radius": "100%",
                        "height": "-3px",
                        "width": "-3px"
                    }, 500, function () {
                        next();
                    })
                })
                .queue("captcha", function (next) {//change border color and expand circle
                    $(this)
                        .css({
                            "outline": "none",
                            "border": "3px solid rgba(0, 0, 255, 0.346)"
                        })
                        .animate({
                            "height": "30px",
                            "width": "30px",
                        }, 250, function () {
                            next();
                        })
                })
                .queue("captcha", function (next) {//add left border and rotate circle
                    $(this)
                        .css({ "border-left": "3px solid blue" })
                        .animate({
                            "rotate": "720deg"
                        }, 2000, function () {
                            next();
                        })
                })
                .queue("captcha", function (next) {//close circle
                    $(".input-captcha-container").delay(500).fadeOut(0, function () {
                        next();
                    })
                })
                .queue("captcha", function (next) {//show check
                    $(".input-captcha-check")
                        // .css("display", "block")
                        .fadeIn(500)
                    next();
                })
                .dequeue("captcha")
        }
    })


    /* INFO SCREEN */
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
            $(".shadow-mask-noclick").css("display", "none")
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
    $(".book-form-btn").on({
        "click": function () {
            $(".shadow-mask").css("display", "block")
            $(".info-screen")
                .fadeIn(200)
                .css("display", "flex")
            $("body").css("overflow", "hidden")
        }
    })


    /* PAY FORM LOADING */
    $(".pay-form-btn").on({
        "click": function () {
            const multipleSpins = (spins) => {//set num of rotations and show info-screen
                for (let i = 1; i <= spins; i++) {
                    $('.process-circle').queue('spin-circle', function (next) {
                        $(this).css("display", "flex").animate({ rotate: `${i * 360}deg` }, 1000, "swing", next);
                    });
                }

                $('.process-circle').queue('spin-circle', function (next) {
                    localStorage.setItem('cur', 'order made');
                    window.location.href = 'order-made.html';
                    // $(".shadow-mask-noclick").css("display", "block")
                    // $(".info-screen")
                    //     .fadeIn(200)
                    //     .css("display", "flex")
                    // $("body").css("overflow", "hidden")
                });
                $('.process-circle').dequeue('spin-circle');
            }



            $(".main-pay>*").css("display", "none")
            $('.process-circle').css("display", "flex")
            multipleSpins(3);
        }
    })

    /* ADDITIONAL INFO */
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

    /* NAVIGATION */
    $(".header-logo").on({//main page
        "click": function () {
            localStorage.setItem('cur', 'home');
            window.location.href = 'index.html';
        }
    })
    $(".desktop-logo").on({//main page
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
    $(".desktop-options>p:nth-child(1)").on({//menu
        "click": function () {
            localStorage.setItem('cur', 'menu');
            window.location.href = 'menu.html';
        }
    })
    $(".btn-menu").on({//menu from ini-screen
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
    $(".desktop-options>p:nth-child(2)").on({//booking
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
    $(".desktop-options>p:nth-child(3)").on({//about us
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
    // $(".conifrm-payment").on({//confirm payment and view order details
    //     "click": function () {
    //         localStorage.setItem('cur', 'order made');
    //         window.location.href = 'order-made.html';
    //     }
    // })
    $(".item-slider>picture").on({//item slider
        "click": function () {
            localStorage.setItem('cur', 'item');
            window.location.href = 'item.html';
        }
    })

    /*Google recaptcha*/
    function handleSubmit(token) {
        document.getElementById("demo-form").submit();
    }
    function handleClick(e) {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LerGcQpAAAAABLnLKBjQd4d1_h5aUZVa3bxKlcn', { action: 'submit' }).then(function (token) {
                // Add your logic to submit to your backend server here.
            });
        });
    }
    // $(".g-recaptcha").on({
    //     "click": handleClick()
    // })
})