 
jQuery("#testimonials-carousel").owlCarousel({
	autoplay: true,
	items: 1,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false,
	//navText: ["<img src='images/left-arrow.jpg'>", "<img src='images/right-arrow.jpg'>"]

});
 
AOS.init({
  duration: 1000,
    once: true
});
 
 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $('.fixed-top').addClass('header-scrolled');
        $('body').addClass('scrolled');
    } else {
      $('.fixed-top').removeClass('header-scrolled');
        $('body').removeClass('scrolled');
    }
  });

  if ($(window).scrollTop() > 80) {
    $('.fixed-top').addClass('header-scrolled');
  }
 