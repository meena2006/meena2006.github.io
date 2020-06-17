jQuery("#banner-carousel").owlCarousel({
	autoplay: true,
	items: 1,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false
	
});
jQuery("#features-carousel").owlCarousel({
	autoplay: true,
	items: 1,
	loop: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false

});
jQuery("#cityride-carousel").owlCarousel({
	autoplay: true,
	items: 3,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false,
    responsive: {
	      0: {
	          items: 1
	      },

	      768: {
	          items: 2
	      },

	      1024: {
	          items: 3
	      },

	      1366: {
	          items: 3
	      }
	  } 

});
jQuery("#usecase-carousel").owlCarousel({
	autoplay: true,
	items: 1,
	margin: 15,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false

});
jQuery("#customer-carousel").owlCarousel({
	autoplay: true,
	items: 1,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: true,
	navText: ["<img src='images/left-arrow.jpg'>", "<img src='images/right-arrow.jpg'>"]

});
jQuery("#members-carousel").owlCarousel({
	autoplay: true,
	items: 4,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false,
    responsive: {
	      0: {
	          items: 1
	      },
        600: {
	          items: 2
	      },

	      768: {
	          items: 3
	      },

	      1024: {
	          items: 3
	      },

	      1366: {
	          items: 4
	      }
	  }

});
jQuery("#honours-carousel").owlCarousel({
	autoplay: true,
	items: 6,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false,
    responsive: {
	      0: {
	          items: 1
	      },
        500: {
	          items: 2
	      },

	      768: {
	          items: 4
	      },

	      1024: {
	          items: 5
	      },

	      1366: {
	          items: 6
	      }
	  }

});
AOS.init({
  duration: 1000,
    once: true
});
 
