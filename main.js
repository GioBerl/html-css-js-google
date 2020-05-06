//shadow sull'hover del search
$(".search").mouseenter(function () {
    $(this).addClass("shadow");
});
$(".search").mouseleave(function () {
    $(this).removeClass("shadow");
});
// --------------------

//comparsa-scomparsa dropdown al click sull'icona
$(".menu-icon").click(function () {
    $(".dropdown").toggle();
});
