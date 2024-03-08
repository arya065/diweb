$(document).ready(function () {
    var counter = $(".slider").children("div").length;
    var length = $(".slider").children("div").length;
    $(".slider").children("div").each((i, e) => {
        $(e)
            .css("order", i)
        $(e).on({
            "forward": function (event, value) {
                if (value == 3) {
                    $(e)
                        .animate({ "marginLeft": "-33vw" }, 500)
                    $(e).promise().done(function () {
                        $(e)
                            .animate({ "marginLeft": "0" }, 0)
                            .css({ "position": "static", "order": value })
                    })
                } else {
                    $(e)
                        .css("order", value)
                }
            },
            "backward": function (event, value) {
                if (value == 0) {
                    $(e)
                        .animate({ "marginLeft": "-33vw" }, 0)
                    $(e).promise().done(function () {
                        $(e)
                            .animate({ "marginLeft": "0" }, 500)
                            .css({ "position": "static", "order": value })
                    })
                } else {
                    $(e)
                        .css("order", value)
                }
            }
        })
    })
    $(".arrow-next").on({
        "click": function () {
            let focus = (counter % length);
            $(".slider").children("div").each((i, e) => {
                if (focus == i) {
                    $(e).trigger("forward", [3]);
                } else {
                    let curr = $(e).css("order");
                    $(e).trigger("forward", [curr - 1]);
                }
            })
            counter++;
        }
    })
    $(".arrow-prev").on({
        "click": function () {
            counter--;
            if (counter == -1) {
                counter = 3;
            }
            let focus = (counter % length);
            $(".slider").children("div").each((i, e) => {
                if (focus == i) {
                    $(e).trigger("backward", [0]);
                } else {
                    let curr = $(e).css("order");
                    $(e).trigger("backward", [parseInt(curr) + 1]);
                }
            })
        }
    })
})