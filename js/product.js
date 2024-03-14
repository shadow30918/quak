var scroll ;

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
    $('dt').click(function(){
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

    $('.buy').click(function(){
        window.open('https://www.sfworldwide.com/sf/order/order_list.aspx','_blank');
    });

    //popup
    $('.facts').click(function(){
        scroll = $(document).scrollTop();
        $('body,html').animate({
            scrollTop: 0 
        },800,'swing',function(){
           $('.wrap').css({'position':'fixed','width':'100%'}); 
        })
        $('#popup').fadeIn(500);
    });

    $('#btn_x,#mask').click(function(){
        $('.wrap').css({'position':'relative','width':'100%'});
        $('body,html').animate({
            scrollTop: scroll
        },500,'swing');
        $('#popup').fadeOut(500);
        
    });
});
