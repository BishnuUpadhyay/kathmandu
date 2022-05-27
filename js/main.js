$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $("nav").addClass("sticky-top");
        $("nav").addClass("shadow");

    }
    else {
        $("nav").removeClass("shadow");
        $("nav").removeClass("sticky-top");
    }
})