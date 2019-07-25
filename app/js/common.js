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
});




