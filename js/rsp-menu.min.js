$('.btn-nav').on({
    'click':function(){
        $('.nav').toggleClass('active');
       
    }
})
$('.main-nav>li').on({
    'click':function(){
        $('.main-nav>li').not($(this)).children('.sub-nav').slideUp(300);
        $(this).children('.sub-nav').slideToggle(300);
        $('.main-nav>li').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    }
})