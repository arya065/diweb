$(document).ready(function () {
    //set ini
    $("svg").parent().each(function (i, e) {
        $(e).attr({ "isOpen": false, "index": i });
    });
    //open close render
    $("svg").parent().each(function (i, e) {
        if ($('[index="' + i + '"]').attr("isOpen") == "false") {
            $(".texto").eq(i).css("display", "none")
        } else {
            $(".texto").eq(i).css("display", "block")
        }
        //change value isOpen
        $(e).on({
            "click": function (event) {
                if ($(e).attr("isOpen") == "false") {
                    $(e).attr("isOpen", true);
                    $(".texto").eq(i).css("display", "block");
                } else {
                    $(e).attr("isOpen", false);
                    $(".texto").eq(i).css("display", "none")
                }
            }
        })
    });
    $("rect").css("fill", "aqua");
});