$(document).ready(function () {
    $(document).keydown(function (e) {
        console.log(e.originalEvent.key);
        if (e.originalEvent.key == "d") {
            $("h3").css("display", "block");
        }
    });

});