$(function(){
    $('[goto=contato]').click(function(){
        location.href= 'index.html?contato';
        return false;

    })

    function chekUrl(){
        var url = location.href;
        var currePage = url.split('?');
        
        if(currePage != undefined && currePage[1] == 'contato'){
            $('html,body').animate({'scrollTop':$('#contato').offset().top});
        }
    }

    chekUrl();

    $(window).on('scroll', function() {
        var $elemento = $('#contato');
        var elementoPos = $elemento.offset().top;
        var elementoAltura = $elemento.outerHeight();
        var scrollPos = $(window).scrollTop();
        var windowAltura = $(window).height();
    });
})