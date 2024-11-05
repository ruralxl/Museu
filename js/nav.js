$(function(){
    $('.three-points').click((e)=>{
        e.stopPropagation();
        $('.three-points').css('display','none');
        $('.menu-mobile').css('display','block');
        $('.menu-mobile').animate({'width':'40%'});
    })

    function verificarCliqueFechar(){
        $('html,body').click(()=>{
            $('.menu-mobile').animate({'width':'0'});
            if($('menu-mobile').css('width') == 0){
                $('.menu-mobile').css('display','none');
            }

            $('.three-points').css('display','block');
        })

        $('.menu-mobile').click((e)=>{
            e.stopPropagation();
        })
    }

    verificarCliqueFechar();
})