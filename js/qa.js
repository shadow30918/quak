
$(document).ready(function(){
    $('dt').click(function(){
        if(!$(this).hasClass('active')){
            $('dt').removeClass('active');
            $(this).addClass('active');
            $('dd').slideUp(500);
            $(this).siblings('dd').slideDown(500);
        }else{
            $('dt').removeClass('active');
            $(this).siblings('dd').slideUp(500);
        }
    });
});
