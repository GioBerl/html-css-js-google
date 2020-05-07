$(document).ready(function () {
    //imposto visualizzazione del footer-top dopo 3 secondi
    setTimeout(function () {
        $(".footer-top-wrapper").fadeIn();
    }, 3000);

    //al click su 'ricordamelo piu tardi' footer-top scompare
    $(".later").click(function () {
        $(".footer-top-wrapper").fadeOut();
    });

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

    //click sul document che mi nasconde il dropdown (se aperto)
    // !RICORDA CHE DEVI SELEZIONARE IL TARGET COME OGGETTO JQUERY ==> $(e.target) senno se usi solo e.target e' un oggetto JS a cui non puoi applicare i metodi di JQUERY
    $(document).click(function (e) {
        var target = $(e.target);
        if ($(".dropdown").is(":visible") && !target.hasClass("menu-icon")) {
            $("div.dropdown").hide();
        }
    });
});
