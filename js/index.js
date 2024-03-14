$(document).ready(function(){
    $('.video').click(function(){
        $('.popup_Video').fadeIn(500);
        $('.yt').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/P-ksaABweHI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
    });
    $('.mask,.close').click(function(){
        $('.popup_Video').fadeOut(500);
        $('.yt iframe').remove();
    })
});