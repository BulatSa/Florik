/***********************
 отправка формы в php BEGIN
***********************/
$(function($){

	$(".ajax-form").on("submit", function(event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')){
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')){
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label');
			form_data.append(input_label__name,input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function(result) {
					var response = JSON.parse(result);
					console.log(response);
					$.fancybox.close();
					if (response["MAILER_ERROR"] !== undefined){
						$.fancybox.open({src  : '#modal-error'});
					} else {
						$.fancybox.open({src  : '#modal-thanks'});
						setTimeout(function() {$.fancybox.close();},4500);
						form[0].reset();
					}
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
***********************/


/***********************
Input mask BEGIN
***********************/
$(function($){
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});
/***********************
Input mask END
***********************/


/***********************
GreenSock BEGIN
***********************/
/*$(document).ready(function() {
	if($(window).width() > 1030) {
		var $headerLogo = $('.header-nav__logo');
		var $headerLinks = $('.header-nav__links a');
		var $headerContact = $('.header-nav__contact');
		var $headerTitle = $('.header__title');
		var $headerDescr = $('.header__descr');
		var $headerBtn = $('.header__info .btn');

		var tlHeader = new TimelineMax();
		tlHeader
			.fromTo($headerLogo, 1, {y:-100, opacity: 0}, {y: 0, opacity: 1})
			.staggerFromTo($headerLinks, 0.5, {opacity:0}, {opacity: 1}, 0.03)
			.fromTo($headerContact, 1, {opacity:0}, {opacity: 1})
			.fromTo($headerTitle, 0.5, {x: 60, opacity:0}, {x: 0, opacity: 1})
			.fromTo($headerDescr, 0.5, {x: 60, opacity:0}, {x: 0, opacity: 1})
			.fromTo($headerBtn, 0.5, {y: 30, opacity:0}, {y: 0, opacity: 1});
	}

});*/
/***********************
GreenSock END
***********************/


/***********************
Clients Open BEGIN
***********************/
$(document).ready(function() {
	var $clientsListMore = $('.clients__list-more-wrap');
	$('.clients__title-link').on('click',function(e) {
		e.preventDefault();
		$clientsListMore.slideToggle('300');
		$(this).toggleClass('opened');
	});
});
/***********************
Clients Open END
***********************/


/***********************
Services Tracking BEGIN
***********************/
$(document).ready(function() {
	// This Hack for Safari :(
	function servicesAutoHeight() {
		var $servicesItem = $('.services__item');
		$servicesItem.each(function (indx, el) {
			$(el).find('.services__img').innerHeight($(el).find('.services__info').innerHeight());
		})
	};

	if(!device.mobile()) {
		servicesAutoHeight();
		$(window).resize(function () {
			servicesAutoHeight();
		});
	}



});
/***********************
Services Tracking END
***********************/


/***********************
Replace Src Image BEGIN
***********************/
$(document).ready(function() {
	function replaceSrcImg(){
		var $img = $('img');
		$img.each(function (indx, el) {
			$(el).attr('src', $(el).data('src'));
		})
	};

	function replaceSrcImgMobile(){
		var $img = $('img');
		$img.each(function (indx, el) {
			$(el).attr('src', $(el).data('src-mobile'));
		})
	};

	if(!device.mobile()) {
		replaceSrcImg();
	} else {
		replaceSrcImgMobile();
	}

	$(window).resize(function () {
		if(!device.mobile()) {
			replaceSrcImg();
		} else {
			replaceSrcImgMobile();
		}
	});
});
/***********************
Replace Src Image END
***********************/


/***********************
Slick BEGIN
***********************/
$(document).ready(function(){
	$('.cases__slider').slick({
		dots: false,
		//speed: 300,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		lazyLoad: 'progressive',
		fade: true,
		nextArrow: '<a href="#" class="cases__slide-next"></a>',
		prevArrow: '<a href="#" class="cases__slide-prev"></a>'
	});
});
/***********************
Slick END
***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$('.fancy').fancybox({
		buttons : ['close'],
		backFocus : false,
		animationEffect: "zoom-in-out",
		animationDuration : 300,
		transitionEffect : "slide",
		btnTpl : {
			smallBtn: '<button data-fancybox-close class="fancybox-close-corner" title="Закрыть"><span>Закрыть</span></button>'
		}
	});
}

function init_fancy__video() {
	$('.fancy-video').fancybox({
		toolbar: false,
		smallBtn : true,
		backFocus : false,
		animationEffect: "zoom-in-out",
		animationDuration : 300,
		transitionEffect : "slide",
		btnTpl : {
			smallBtn   : '<button data-fancybox-close class="fancybox-close-corner" title="Закрыть"></button>'
		},
		youtube: {
			controls : 1,
			showinfo : 0,
			autoplay: 1
		},
		onUpdate : function( instance, current ) {
			var width,
				height,
				ratio = 16 / 9,
				video = current.$content;
			if ( video ) {
				video.hide();
				width  = current.$slide.width() - 30;
				height = current.$slide.height() - 100;
				if ( height * ratio > width ) {
					height = width / ratio;
				} else {
					width = height * ratio;
				}
				video.css({
					width  : width,
					height : height
				}).show();
			}
		}
	});
}

$(function(){
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
Masonry BEGIN
***********************/
$(document).ready(function() {
	var $itemList = $('.reviews__list');
	function reviewsMasonry($itemList) {
		$itemList.masonry({
			// options...
			percentPosition: true
		});
	}

	if($(window).width() > 770) {
		reviewsMasonry($itemList);
	}

	$(window).resize(function () {
		if($(window).width() > 770) {
			reviewsMasonry($itemList);
		}
	});
});
/***********************
Masonry END
***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function($){
	$('.scrollto').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 30;
		$('html,body').stop().animate({scrollTop:destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/


/***********************
Waypoints BEGIN
***********************/
$(function($){
	$('.anim').waypoint(function () {
		$(this.element).toggleClass('animated');
	}, {
		offset: '85%'
	});

	$('.clients-sec').waypoint(function () {
		$('.header-nav-sec').toggleClass('active');
	}, {
		offset: '85%'
	});
});
/***********************
Waypoints END
***********************/


/***********************
 Link anchors BEGIN
 ***********************/
$(document).ready(function(){

	$('.header-nav__links a').each(function () {
		var target = $(this).attr('href');
		$(target).addClass('__nav-section');
	});

	$(window).scroll(function() {
		var w_scroll = $(window).scrollTop();
		var w_height = $(window).height();
		$('.header-nav__links a').removeClass('active');
		$('.__nav-section').each(function() {
			var section_top = $(this).offset().top;
			var section_h = $(this).outerHeight();

			if ((w_scroll >= section_top-w_height/2) && (w_scroll < section_top + section_h-80)){
				var section_index = $(this).index('.__nav-section');
				$('.header-nav__links a').eq(section_index).addClass('active');
			}
		});
	});

});
/***********************
 Link anchors END
 ***********************/