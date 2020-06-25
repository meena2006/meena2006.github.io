 
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

$('#custCarousel').carousel({ interval: 6000 });
 
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
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
  

			$('.down-arr').on('click', function(e) {
				$('html, body').animate({
					scrollTop: $(window).height()
				}, 1200);
			});
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top - 70;

	$("body, html").animate({
		scrollTop: position
	});
});