document.addEventListener('DOMContentLoaded', () => {
	new WOW().init();

	// Header START
	$('.hamburger').on('click', function() {
		if($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.header-mobile-wrap').slideUp(500);
		}
		else {
			$(this).addClass('is-active');
			$('.header-mobile-wrap').slideDown(500);
		}
	});

	function showArrowUp() {
		if($(this).scrollTop() > 1500) {
			$('.go-up').addClass('is-active');
		}
		else {
			$('.go-up').removeClass('is-active');
		}
	}

	// Number counter START
	function animateCounter(element, targetValue, duration) {
		jQuery({ count: jQuery(element).text() }).animate(
			{
				count: targetValue
			},
			{
				duration: duration,
				easing: 'linear',
				step: function () {
					jQuery(element).text(Math.floor(this.count));
				},
				complete: function () {
					jQuery(element).text(targetValue);
				},
			}
		);
	}

	function isElementInViewport(elem) {
		if (!elem) return false;
		var rect = elem.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	jQuery(window).on('scroll', function () {
		if (isElementInViewport(jQuery('.num-scroll')[0])) {
			jQuery('.num-js').each(function () {
				var targetValue = parseInt(jQuery(this).data('count'));
				var duration = 2000;
				animateCounter(this, targetValue, duration);
			});

			jQuery(window).off('scroll');
		}
	});

	jQuery(window).trigger('scroll');
	// Number counter END



	$(window).on('scroll', function() {
		showArrowUp();
	});
	showArrowUp();

	$('.anchor-link').on('click', function () {
	    let href = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    }, {
	        duration: 700,
	    });
		$('.header-mobile-wrap').slideUp(500);
		$('.hamburger').removeClass('is-active');
	    return false;
	});

	$('.go-up').on('click', function () {
	    $('html, body').animate({
	        scrollTop: 0
	    }, {
	        duration: 700,
	    });
	    return false;
	});
	// Header END
	
	// Banner START
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		autoHeight: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		on: {
			slideChange: function () {
				// Ocultar todos los elementos de texto en el slide activo
				const activeSlide = this.slides[this.activeIndex];
				const textElements = activeSlide.querySelectorAll('.banner-subtitle, .banner-title');
				
				textElements.forEach(element => {
					element.style.opacity = '0';
					element.style.visibility = 'hidden';
				});
				
				// Mostrar el subtítulo después de 1 segundo
				setTimeout(() => {
					const subtitle = activeSlide.querySelector('.banner-subtitle');
					if (subtitle) {
						subtitle.style.opacity = '1';
						subtitle.style.visibility = 'visible';
						subtitle.style.transition = 'opacity 0.5s ease-in';
					}
				}, 1000);
				
				// Mostrar el título después de 1.2 segundos
				setTimeout(() => {
					const title = activeSlide.querySelector('.banner-title');
					if (title) {
						title.style.opacity = '1';
						title.style.visibility = 'visible';
						title.style.transition = 'opacity 0.5s ease-in';
					}
				}, 1200);
			},
			init: function () {
				// Ejecutar slideChange en la inicialización para el primer slide
				this.emit('slideChange');
			}
		}
	});
	// Banner END

})