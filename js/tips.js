$(window).load(function(){
    slider_init();


    $(window).on('resize', function () {
        
        setTimeout(slider_init, 300);
        
    });
})


function slider_init() {
    $('.step').slick({
        
        //asNavFor: '.photo_btn',
        //dots: true,
        prevArrow: $('.step_prev'),
		nextArrow: $('.step_next'),
        // fade: true
        responsive: [{
            breakpoint: 3600,
            settings: 'unslick'
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
            }
        }]
    });  
}