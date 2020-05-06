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

// !RICORDA CHE DEVI SELEZIONARE IL TARGET COME OGGETTO JQUERY ==> $(e.target)
$(document).click(function (e) {
    var target = $(e.target);
    if ($(".dropdown").is(":visible") && !target.hasClass("menu-icon")) {
        $("div.dropdown").toggle();
    }
});
