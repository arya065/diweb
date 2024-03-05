$(document).ready(function () {
    var counter = 1;
    $(".slider").children("div").map((i, e) => {
        console.log(i);
        $(e)
            .css("order", i)
        $(e).on({
            "click": function () {
                $(e).css("order", i + $(".slider").children("div").length)
                console.log("order", i + $(".slider").children("div").length);
                counter++;
            }
        })
    })

})