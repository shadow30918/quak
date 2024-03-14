$(window).load(function(){
    


    $(window).on('resize', function () {
        if(isMobile){
            $('dt').removeClass('active');
            $('dd').slideUp(200);
        }else{
            $('dd').show();
        }
    });
});

$(document).ready(function(){
    $('.food dt').click(function(){
        if(isMobile){
            if(!$(this).hasClass('active')){
                $('dt').removeClass('active');
                $(this).addClass('active');
                $('dd').slideUp(500);
                $(this).siblings('dd').slideDown(500);
            }else{
                $('dt').removeClass('active');
                $(this).siblings('dd').slideUp(500);
            }
        }
    });

    $('.RG dt').click(function(){
        if(isMobile){
            if(!$(this).hasClass('active')){
                $('dt').removeClass('active');
                $(this).addClass('active');
                $('dd').slideUp(500);
                $(this).siblings('dd').slideDown(500);
            }else{
                $('dt').removeClass('active');
                $(this).siblings('dd').slideUp(500);
            }
        }
    });

    $('.act dt').click(function(){
        if(isMobile){
            if(!$(this).hasClass('active')){
                $('dt').removeClass('active');
                $(this).addClass('active');
                $('dd').slideUp(500);
                $(this).siblings('dd').slideDown(500);
            }else{
                $('dt').removeClass('active');
                $(this).siblings('dd').slideUp(500);
            }
        }
    });
});
