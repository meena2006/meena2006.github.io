$(document).ready(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });
    
    $('.navbar-nav a, .footer-pro a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500);
        event.preventDefault();
    });
    
    
    $("#navbarCollapse").scrollspy({
        offset: 20
    });
    
    
    feather.replace()
    
    $('#testi-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            992: {
                items: 2
            },
    
        }
    });


});
