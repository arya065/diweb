$(document).ready(function () {
    $("img").click(function () {
        $(this).next().css("display", "block")
    })
    $("img").dblclick(function () {
        $(this).next().css("display", "none")
    });

    // $("article").map((i, e) => {
    //     $("article:nth-of-type(" + (i + 1) + ")").click(function () {
    //         $("article:nth-of-type(" + (i + 1) + ")" + " #" + e.children[1].id).css("display", "block");
    //     });
    //     $("article:nth-of-type(" + (i + 1) + ")").dblclick(function () {
    //         $("article:nth-of-type(" + (i + 1) + ")" + " #" + e.children[1].id).css("display", "none");
    //     });
    // });
});
