// hameburger menu start
const openNav = () => {
	const menu = document.getElementById("menu");
	menu.classList.toggle("active");
	document.body.classList.toggle("no-scroll");
	document.getElementById("mobileMenu").classList.toggle("active")
}
document.getElementById("mobileMenu").addEventListener("click", openNav);
// hameburger menu end

// main-slider start
$('.slider-section .owl-carousel').owlCarousel({
	loop: true,
	// margin: 10,
	dots: true,
	nav: true,
	mouseDrag: true,
	autoplay: 3000,
	animateOut: 'slideOutLeft',
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
// main-slider end

// solution section script start
$(".solution-section .container .row .slide .photo:nth-child(1)").addClass("active-img");

let slideIndex = 1;

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let photo = document.getElementsByClassName("photo");

	for (let i = 0; i < photo.length; i++) {
		photo[i].classList.remove("active-img");
	}
	photo[slideIndex - 1].classList.add("active-img");
}
// solution section script end

// government js start
$('.government-slider .container .row .owl-carousel').owlCarousel({
	items: 8,
	loop: true,
	autoplay: true,
	slideTransition: 'linear',
	touchDrag: false,
	mouseDrag: false,
	autoplaySpeed: 5000,
	autoplayHoverPause: false,
	dots: false,
	responsive: {
		0: {
			items: 2
		},
		390: {
			items: 3
		},
		500: {
			items: 3.5
		},
		600: {
			items: 4
		},
		700: {
			items: 4
		},
		1150: {
			items: 6
		}
	}
});
// government js end

// fancy-box gallery js start
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: true,
  protect: true
});
// fancy-box gallery js end

// wow js class add start 

// about-section start
$('.about-section .container .row .main-box .box-1').addClass("animate__fadeInLeft");
$('.about-section .container .row .main-box .box-2').addClass("animate__fadeInRight");
// about-section end

// industry-section start
$('.industry-section').addClass("animate__fadeInUp");
$('.industry-section .container .row .main-box .box:nth-child(1)').addClass("animate__fadeInLeft");
$('.industry-section .container .row .main-box .box:nth-child(2)').addClass("animate__fadeInLeft");
$('.industry-section .container .row .main-box .box:nth-child(3)').addClass("animate__fadeInLeft");
$('.industry-section .container .row .main-box .box:nth-child(4)').addClass("animate__zoomIn");
$('.industry-section .container .row .main-box .box:nth-child(5)').addClass("animate__fadeInRight");
$('.industry-section .container .row .main-box .box:nth-child(6)').addClass("animate__fadeInRight");
$('.industry-section .container .row .main-box .box:nth-child(7)').addClass("animate__fadeInRight");
// industry-section end

// solution-section start
$('.solution-section').addClass("animate__fadeInUp");
// solution-section end

// work-section start
$('.work-section').addClass("animate__fadeInUp");
$('.work-section .container .row .main-box .box:nth-child(1)').addClass("animate__fadeInLeft");
$('.work-section .container .row .main-box .box:nth-child(2)').addClass("animate__zoomIn");
$('.work-section .container .row .main-box .box:nth-child(3)').addClass("animate__fadeInRight");
// work-section end

// work-process section start
$('.work-process-section').addClass("animate__fadeInUp");
// work-process section end

// contact-section start
$('.contact-section .container .row .main-box .box-1').addClass("animate__fadeInLeft");
$('.contact-section .container .row .main-box .box-2').addClass("animate__fadeInRight");
// contact-section end
// wow js class add end 

new WOW().init();