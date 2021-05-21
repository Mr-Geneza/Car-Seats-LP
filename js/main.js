jQuery(function($) {
	
	
	// Labels focus
	$('label').click(function() {$(this).next('input, textarea').focus();})
	
	// Client phone jump
	$('.client-phone-jump').on('input', function() {if ($(this).val().length >= $(this).prop('maxlength')) {$(this).next('input, textarea').focus()}})
	
	// Mask phone
	$('.client-phone-1').mask('+9');
	$('.client-phone-2').mask('999');
	$('.client-phone-3').mask('999-99-99');
	
	// IE placeholders
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	// Counter
	var tomorrow = new Date();
		tomorrow.setHours(24,0,0,0);
	$('.counter').countdown({
		until: tomorrow,
		layout: '<div class="counter-item">{dnn}</div>'+
				'<div class="counter-dots">:</div>'+
				'<div class="counter-item">{hnn}</div>'+
				'<div class="counter-dots">:</div>'+
				'<div class="counter-item">{mnn}</div>'+
				'<div class="counter-dots">:</div>'+
				'<div class="counter-item">{snn}</div>'
	});


	$(function() {
		if ($('.top_menu').length > 0) {
			$('.top_menu').css('z-index', 9);
			var menu = $('.top_menu').offset().top;
			$(window).scroll(function() {
				if ($(this).scrollTop() > menu) {
					if ($('.top_menu').css('position') != 'fixed') {
						$('.top_menu').css({
							'position': 'fixed',
							'top': '0px'
						});
					}
				} else {
					if ($('.top_menu').css('position') != 'static') {
						$('.top_menu').css({
							'position': 'static'
						});
					}
				}
			});
		}
	}); 


	$('head').append('<link rel="stylesheet" href="css/animation.css" />');


	$('.scroll-animate').each(function () {
		var block = $(this);
		$(window).scroll(function() {
			var top = block.offset().top;
			var bottom = block.height()+top;
			top = top - $(window).height() + 300;
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass('animate')) {
					block.addClass('animate');
					block.trigger('animateIn');
				}
			} else {
				block.removeClass('animate');
				block.trigger('animateOut');
			}
		});				
	
	});
	
	$('.counts em').each(function() {
		$(this).attr('data-number', parseInt($(this).text()));
	});
	
	$('.counts').on('animateIn', function() {
		$(this).find('em').each(function() {
			var count =  parseInt($(this).attr('data-number'));
			var block = $(this);
			var timeout = null;
			var step = 2;
			timeout = setInterval(function() {
				if (step == 20) {
					block.text(count.toString());
					clearInterval(timeout);
				} else {
					block.text((Math.floor(count*step/20)).toString());
					step++;
				}
			}, 300);
		});
	});

	$('.counts').on('animateIn', function() {
		var inter = 0;
		$(this).find('.scale').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
				block.css('transform', 'scale(1.0, 1.0)');
			}, inter*200);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.scale').each(function() {
			$(this).css('opacity', 0.01);
			$(this).css('transform', 'scale(0.5, 0.5)');
		});
	});

		$('#headline').on('animateIn', function() {
			var inter = 0;
			$(this).find('.fade1').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
				}, inter*220);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.fade1').each(function() {
				$(this).css('opacity', 0.01);
			});
		});	


	// Modal photos
	$('a[data-rel]').each(function() {$(this).attr('rel', $(this).data('rel'));});
	$('a[rel^=prettyPhoto]').prettyPhoto({social_tools:false});
	
	// Sliders
	$('#armchair-slider').seainside_slider({'how_much_slide' : 3, 'num_in_one' : 3});
	$('#armchair-slider2').seainside_slider({'how_much_slide' : 3, 'num_in_one' : 3});
	$('#armchair-slider3').seainside_slider({'how_much_slide' : 3, 'num_in_one' : 3});
	
	
	
	// Modals
		
		// Phone modal
		$('.open-phone-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .phone-modal').fadeIn(700);
			$('.phone-modal .send-extra').val($(this).data('extra'));
			return false;
		})
				
		// Example modal
		$('.open-example-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .example-modal').fadeIn(700);
			$('.example-modal .send-extra').val($(this).data('extra'));
			return false;
		})
						
		// Cost modal
		$('.open-calc-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .calc-modal').fadeIn(700);
			$('.calc-modal .send-extra').val($(this).data('extra'));
			return false;
		})
								
		// Questions modal
		$('.open-questions-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .questions-modal').fadeIn(700);
			return false;
		})
										
		// Privacy modal
		$('.open-privacy-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .privacy-modal').fadeIn(700);
			return false;
		})
		
			
			// Controls
			$('.si-close').click(function() {
			
				$('.si-overlay').fadeOut(700);
				$('.si-modal').fadeOut(700);
				$('.si-success-modal').fadeOut(700);

				return false;
				
			})
				
			$('.si-overlay').click(function() {
			
				$('.si-overlay').fadeOut(700);
				$('.si-modal').fadeOut(700);
				$('.si-success-modal').fadeOut(700);
				
				return false;
				
			})
		
	
	// Form validate 
$('.send-form').submit(function() {
		
		var name = $(this).find('.client-name');
		var mail = $(this).find('.client-mail');
		var phone_1 = $(this).find('.client-phone-1');
		var phone_2 = $(this).find('.client-phone-2');
		var phone_3 = $(this).find('.client-phone-3');
		var message = $(this).find('.client-message');
		
		send = 1;
		
		if (name.val() == '') {
			name.si_show_message('Укажите ваше имя');
			send = 0;
		}
			
			
		if (phone_1.val() == '') {
			phone_1.si_show_message(phone_1.prop('placeholder'));
			send = 0;
		}
							
		if (phone_2.val() == '') {
			phone_2.si_show_message(phone_2.prop('placeholder'));
			send = 0;
		}
							
		if (phone_3.val() == '') {
			phone_3.si_show_message(phone_3.prop('placeholder'));
			send = 0;
		}
					
		if (message.size() > 0 && message.val() == '') {
			message.si_show_message('Укажите Ваш вопрос');
			send = 0;
		}
		
		if (send == 0) 
			return false;
		
		$.post($(this).prop('action'), $(this).serialize(), function(res) {
		
			if (res.success == 1) {
				
				yaCounterХХХХХХХХ.reachGoal('target' + res.id);
				
				switch (res.id) {
					
					case 1:	ga('send', 'event', 'Заявка на обратный звонок', 'Заявка на обратный звонок с верхней формы'); break;
					case 2: ga('send', 'event', 'Заявка на обратный звонок', 'Заявка на обратный звонок с нижней формы'); break;
					
					case 3: ga('send', 'event', 'Заявка на получение образцов материалов', 'Заявка на получение образцов материалов (автомобильные чехлы)'); break;
					case 4: ga('send', 'event', 'Заявка на получение образцов материалов', 'Заявка на получение образцов материалов (меховые накидки)'); break;
					case 5: ga('send', 'event', 'Заявка на получение образцов материалов', 'Заявка на получение образцов материалов (реставрация салона)'); break;
										
					case 6: ga('send', 'event', 'Заявка на расчёт стоимости', 'Заявка на расчёт стоимости (автомобильные чехлы)'); break;
					case 7: ga('send', 'event', 'Заявка на расчёт стоимости', 'Заявка на расчёт стоимости (меховые накидки)'); break;
					case 8: ga('send', 'event', 'Заявка на расчёт стоимости', 'Заявка на расчёт стоимости (реставрация салона)'); break;
					
					case 9: ga('send', 'event', 'Вопрос менеджеру', 'Вопрос менеджеру'); break;
					
					case 10: ga('send', 'event', 'Форма "Автомобильная подушка в подарок!" ', 'Форма "Автомобильная подушка в подарок!" (верхняя)'); break;
					case 11: ga('send', 'event', 'Форма "Автомобильная подушка в подарок!" ', 'Форма "Автомобильная подушка в подарок!" (нижняя)'); break;
					
				}
				
				//
				
				$('.si-modal').fadeOut(500);
				
				$('.si-success-modal').fadeIn(500);
				$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()}).fadeIn(500);
				
				name.val('');
				phone_2.val('');
				phone_3.val('');
						
				if (mail.size() > 0) {
					mail.val('');
				}	
				
				if (message.size() > 0) {
					message.val('');
				}
				
			}else{
				alert(res.text);
			}
		
		}, 'json');
		
		return false;
	
	})	
	
})



function scrollTo(id) {
	var to = $('#'+id).offset().top - 35;
	$("html, body").animate({scrollTop: to}, 500);
}


// Map
ymaps.ready(function(){
					   
	myMap = new ymaps.Map("ya-map", {
		center: [42.314243,69.585589],
		zoom: 8
	});
			
			
		var myPlacemark = new ymaps.Placemark(
			[42.314243,69.585589]
		);
		
		
		myMap.geoObjects.add(myPlacemark);
		
		
		
		

})
