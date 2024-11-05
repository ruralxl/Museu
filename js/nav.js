$(function(){
    $('.three-points').click((e)=>{
        e.stopPropagation();
        $('.three-points').css('display','none');
        $('.menu-mobile').css('display','block');
        $('.menu-mobile').animate({'width':'40%'});
    })

    function verificarCliqueFechar(){
        $('html,body').click(() => {
            $('.menu-mobile').animate({'width':'0'}, 300, function() {
                $('.menu-mobile').css('display','none');
                if (parseInt($('html,body').css('width')) <= 1060) {
                    $('.three-points').css('display','block');
                }
            });
        });

        $('.menu-mobile').click((e) => {
            e.stopPropagation();
        });
    }

    verificarCliqueFechar();
})