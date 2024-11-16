$(function(){
    var imgShow = 3;
    var maxIndex = Math.ceil($('.galeria-img-wraper').length/3) - 1;
    var curIndex = 0;

    function initSlider(){
        var amt = $('.galeria-img-wraper').length/2 * 33.3;
        var elScroll = $('.galeria-imgs');
        var elSingle = $('.galeria-img-wraper');

        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(function (e) { 
            e.preventDefault();
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.galeria-img-wraper').eq(curIndex*3).offset().left - $('.galeria-imgs').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }
        });

        $('.arrow-left-nav').click(function (e) { 
            e.preventDefault();
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.galeria-img-wraper').eq(curIndex*3).offset().left - $('.galeria-imgs').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }
        });
    }

    initSlider();
    navigateSlider();
})