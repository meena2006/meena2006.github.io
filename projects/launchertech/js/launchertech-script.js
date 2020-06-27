  
jQuery("#hwitwks-carousel").owlCarousel({
	autoplay: true,
	items: 3,
	loop: true,
	responsiveClass: true,
	autoHeight: true,
	autoplayTimeout: 10000,
	smartSpeed: 800,
	nav: false,
	//navText: ["<img src='images/left-arrow.jpg'>", "<img src='images/right-arrow.jpg'>"]

});
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
  

//			$('.down-arr').on('click', function(e) {
//				$('html, body').animate({
//					scrollTop: $(window).height()
//				}, 1200);
//			});
//$("a[href^='#']").click(function(e) {
//	e.preventDefault();
//	
//	var position = $($(this).attr("href")).offset().top - 70;
//
//	$("body, html").animate({
//		scrollTop: position
//	});
//});

 $(function()  {
        $('.full-page-slider').fullpage({
          navigation: true,
          navigationPosition: 'right',
          css3: true,
          scrollingSpeed: 1000,
          easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
            responsiveWidth: 767
        });

        $('.bounce').click(function() {
          $.fn.fullpage.moveSectionDown();
        });
          });

const rippleSettings = {
  maxSize: 100,
  animationSpeed: 5,
  strokeColor: [148, 217, 255],
};

const canvasSettings = {
  blur: 8,
  ratio: 1,
};

function Coords(x, y) {
  this.x = x || null;
  this.y = y || null;
}

const Ripple = function Ripple(x, y, circleSize, ctx) {
  this.position = new Coords(x, y);
  this.circleSize = circleSize;
  this.maxSize = rippleSettings.maxSize;
  this.opacity = 1;
  this.ctx = ctx;
  this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
    ${Math.floor(rippleSettings.strokeColor[1])},
    ${Math.floor(rippleSettings.strokeColor[2])},
    ${this.opacity})`;

  this.animationSpeed = rippleSettings.animationSpeed;
  this.opacityStep = (this.animationSpeed / (this.maxSize - circleSize)) / 2;
};

Ripple.prototype = {
  update: function update() {
    this.circleSize = this.circleSize + this.animationSpeed;
    this.opacity = this.opacity - this.opacityStep;
    this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
      ${Math.floor(rippleSettings.strokeColor[1])},
      ${Math.floor(rippleSettings.strokeColor[2])},
      ${this.opacity})`;
  },
  draw: function draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0,
      2 * Math.PI);
    this.ctx.stroke();
  },
  setStatus: function setStatus(status) {
    this.status = status;
  },
};

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const ripples = [];

const height = document.body.clientHeight;
const width = document.body.clientWidth;

const rippleStartStatus = 'start';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

canvas.style.filter = `blur(${canvasSettings.blur}px)`;

canvas.width = width * canvasSettings.ratio;
canvas.height = height * canvasSettings.ratio;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

let animationFrame;

// Add GUI settings
const addGuiSettings = () => {
  const gui = new dat.GUI();
  gui.add(rippleSettings, 'maxSize', 0, 1000).step(1);
  gui.add(rippleSettings, 'animationSpeed', 1, 30).step(1);
  gui.addColor(rippleSettings, 'strokeColor');

  const blur = gui.add(canvasSettings, 'blur', 0, 20).step(1);
  blur.onChange((value) => {
    canvas.style.filter = `blur(${value}px)`;
  });
};

addGuiSettings();

// Function which is executed on mouse hover on canvas
const canvasMouseOver = (e) => {
  const x = e.clientX * canvasSettings.ratio;
  const y = e.clientY * canvasSettings.ratio;
  ripples.unshift(new Ripple(x, y, 2, ctx));
};

const animation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const length = ripples.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    const r = ripples[i];

    r.update();
    r.draw();

    if (r.opacity <= 0) {
      ripples[i] = null;
      delete ripples[i];
      ripples.pop();
    }
  }
  animationFrame = window.requestAnimationFrame(animation);
};

animation();
canvas.addEventListener('mousemove', canvasMouseOver);


