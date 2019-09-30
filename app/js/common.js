$(function() {

		$('.offer').owlCarousel({
		loop: true,
		items: 1,
		infinity: true,
		smartSpeed: 700
	});

		$('.content').owlCarousel({
    loop: true,
    dots: false,
    margin: 30,
    nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
    	   0:{
            items:1
        },
        576:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
})
		$('.slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
    	   0:{
            items:1
        },
        576:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:4
        },
         1200:{
            items:5
        }
    }
})

 // modal window
    $('#buttonModal').click(function() {
		$('#menuModal').addClass('menu-modal_active');
	});

	    $('#menuModalClose').click(function() {
		$('#menuModal').removeClass('menu-modal_active');
	});

	    $('#buttonModalTwo').click(function() {
		$('#menuModalTwo').addClass('menu-modal_active');
	});

	  	$('#menuModalCloseTwo').click(function() {
		$('#menuModalTwo').removeClass('menu-modal_active');
	});

 // Preloader
    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(800).fadeOut('slow');

    $(window).scroll(function(){
        if($(document).scrollTop()>$(window).height()){
            $('.scrolltotop').show();
        }else{
            $('.scrolltotop').hide();
        }
      });
      $('.scrolltotop').click(function(){
        $('html,body').animate({scrollTop: 0}, 600);
  });

$(window).scroll(function() {
        $('.news, .brands, .article__block-right').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass("fadeInRight");
            }
        });
        $('.sales, .special, .article__block-left').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
});





