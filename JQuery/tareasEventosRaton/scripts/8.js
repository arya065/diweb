$("#mi-capa").click(function (evento) {
    $(this).css("width", function (index, value) {
        var aumento = prompt("¿Cuánto quieres aumentar?", "25");
        return (parseInt(value) + parseInt(aumento)) + "px";
    });
});