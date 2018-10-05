$(window).on('scroll', function() {
   
    if ($(window).scrollTop()) {
        
        $('nav').addClass('black');
    } else {
        
        $('nav').removeClass('black');
    }
    

    
    
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
});