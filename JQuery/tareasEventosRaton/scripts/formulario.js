$(document).ready(function () {
    $("input").on({
        "input": function () {
            let message = "te queda " + parseInt(100 - $(this).val().length) + "simbolos";
            $(this).next()
                .css("color", "black")
                .text(message);
        },
        "focusout": function () {
            if ($(this).val() == "") {
                $(this).next()
                    .css("color", "red")
                    .text("error");
            }
        }
    })
});