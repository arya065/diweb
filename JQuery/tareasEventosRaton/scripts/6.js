function hide() {
    $("#menu").css({ "display": "none", "flex-direction": "row", "list-style-type": "none", "justify-content": "space-between" });
    $("#menu>*").css({ "display": "none" });
    $("#menu-principal").css("height", "50px");
}

$(document).ready(function () {
    $("header")
    .css({ "position": "sticky", "top": "0", "width": "100%", "z-index": "5", "background-color": "white" });
    $("#menu-principal").hover(function () {
        $("#menu").css({ "display": "flex", "flex-direction": "row", "list-style-type": "none", "justify-content": "space-between" });
        $("#menu>*").css({ "display": "block" });
        $("#menu-principal").css("height", "100px");
    })
    $("#menu-principal").mouseleave(() => hide())
    $(window).resize(() => hide())
});