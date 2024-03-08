$(document).ready(function () {
    $("#email").on({
        "focusout": function () {
            let mailLength = $("#email").val().length;
            if (mailLength <= 0) {
                $("#error-email").css("visibility", "visible");
            } else {
                $("#error-email").css("visibility", "hidden");
            }
        }
    })
    $("#pswd").on({
        "focusout": function () {
            let passLength = $("#pswd").val().length;
            if (passLength <= 0) {
                $("#error-pswd").css("visibility", "visible");
            } else {
                $("#error-pswd").css("visibility", "hidden");
            }
        }
    })
});