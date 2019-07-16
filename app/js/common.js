$(function() {

		$('.slider-offer, .block-slide, .block-slide-m').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>']
	});

	$('.slider').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dotsEach: 3,
		stagePadding: 25
	});
		$('.slider2').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dotsEach: 2,
		nav: true,
		navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>']
	});
		$('.slider3').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dotsEach: 2,
		stagePadding: 25
	});
		$('.slider4').owlCarousel({
		loop: true,
		items: 4,
		smartSpeed: 700,
		dotsEach: 2,
		nav: true,
		navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
				stagePadding: 30,
			},
			767: {
				items: 2,
				nav: false,
				stagePadding: 30,
			},
			992: {
				items: 3,
			},
			1300: {
				items: 4
			}
		}
	});
		var owl = $('.street__slider');
			owl.owlCarousel({
				loop: true,
				items: 1,
				smartSpeed: 700,
				dots: false
			});

			 $('#arrowRight').click(function(event) {
			 	owl.owlCarousel();
			 		event.preventDefault();
			    owl.trigger('next.owl.carousel');
			 })

			 		 $('#arrowLeft').click(function() {
		 			owl.owlCarousel();
			 		event.preventDefault();
			  	owl.trigger('prev.owl.carousel');
			 })

			owl.on('change.owl.carousel', function(event){
				owl.owlCarousel();
				$('#slideActive').text(event.item.index)
				$('#slideTotal').text(event.item.count)
			});


			var owl2 = $('.street__slider2');
			owl2.owlCarousel({
				loop: true,
				items: 1,
				smartSpeed: 700,
				dots: false
			});

			 $('#arrowRightTwo').click(function(event) {
			 	owl2.owlCarousel();
			 		event.preventDefault();
			    owl2.trigger('next.owl.carousel');
			 })

			 		 $('#arrowLeftTwo').click(function() {
		 			owl2.owlCarousel();
			 		event.preventDefault();
			  	owl2.trigger('prev.owl.carousel');
			 })

			owl2.on('change.owl.carousel', function(event){
				owl2.owlCarousel();
				$('#slideActiveTwo').text(event.item.index)
				$('#slideTotalTwo').text(event.item.count)
			});



			var owl3 = $('.slider-gallery');
			owl3.owlCarousel({
				loop: true,
				items: 1,
				smartSpeed: 700,
				dots: false
			});

			 $('#arrowRightThree').click(function(event) {
			 	owl3.owlCarousel();
			 		event.preventDefault();
			    owl3.trigger('next.owl.carousel');
			 })

			 		 $('#arrowLeftThree').click(function() {
		 			owl3.owlCarousel();
			 		event.preventDefault();
			  	owl3.trigger('prev.owl.carousel');
			 })

			owl3.on('change.owl.carousel', function(event){
				owl3.owlCarousel();
				$('#slideActiveThree').text(event.item.index)
				$('#slideTotalThree').text(event.item.count)
			});

			// открытие меню по клику на гамбургер
    $('.gamb').click(function() {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-opened');
	});

    $('.buttonModal').click(function (e) {
    e.preventDefault();
    $('#exampleModal').arcticmodal();
}); 

function recolor() {
	document.getElementById("main").classList.add('green');
	document.getElementByClassName("wrapper")[0].classList.add('green')
}


});






