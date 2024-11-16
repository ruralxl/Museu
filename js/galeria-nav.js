$(function(){
    $('[goto=galeria]').click(function(){
        location.href= 'exposicoes.html?galeria';
        return false;

    })

    function chekUrl(){
        var url = location.href;
        var currePage = url.split('?');
        
        if(currePage != undefined && currePage[1] == 'galeria'){
            $('html,body').animate({'scrollTop':$('#galeria').offset().top});
        }
    }

    chekUrl();

    $(window).on('scroll', function() {
        var $elemento = $('#galeria');
        var elementoPos = $elemento.offset().top;
        var elementoAltura = $elemento.outerHeight();
        var scrollPos = $(window).scrollTop();
        var windowAltura = $(window).height();
    });
})