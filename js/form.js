$(()=>{

    $('#form1').submit(()=>{
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'), $('input[name=nome]').next('p'));
            return false;
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'), $('input[name=telefone]').next('p'));
            return false;
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'), $('input[name=email]').next('p'));
            return false;
        }else{
            alert('Formulário Enviado!');
        }
    })

    //Funções verificações:
    function verificarNome(nome){
        if(nome == ''){
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');

        //Contando quant de espaços e respectivos valores
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                //Verifica se a Primeira letra é maiúscula:
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log('A');
                }else{
                    aplicarCampoInvalido($('input[name=nome]'), $('input[name=nome]').next('p'));
                    return false;
                }
            }
        }else{
            return false;
        }
    }

    function verificarTelefone(telefone){
        if(telefone == '') return false;
        
        if(telefone.match(/^\(\d{2}\)\d{4}\d{4}$/) == null){
            return false;
        }
    }

    function verificarEmail(email){
        if(email == '') return false;
        
        if(email.match(/^([a-z0-9-_.}{1,})@([a-z.]{1,})$/) == null){
            return false;
        }
    }

    //Funções campo inválido:
    function aplicarCampoInvalido(el,p){
        el.css('color','red');
        el.css('border','2px solid red');
        el.data('invalido','true');
        el.css('margin-bottom','5px');
        el.val('Campo Inválido!');
        p.css('display','block');
    }

    function resetarCampoInvalido(el){
        el.css('color','black');
        el.css('border-bottom','1px solid black');
        el.data('invalido','');
        el.css('margin-bottom','20px');
        el.val('');
        el.next('p').css('display','none');
    }

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

    verificarNome();
})