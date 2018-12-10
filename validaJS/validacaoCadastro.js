window.onload = function() {
    let btn = document.getElementById('submitButton');

    btn.onClick (
        function (e) {
            e.preventDefault();
            if (erroValidacao() === false) {
                alert('Erro no preenchimento do formulário.');
            } else {
                form.submit();
            }
        }
    );
    let form = document.getElementById('form');

    formSucesso(1);
    formErro(1);
}

// Verifica o preenchimento dos campos do formulário.
function erroValidacao() {

    // Valida o campo nome.
    if (document.getElementById('inputNome').value.length == '' ||
        document.getElementById('inputNome').value.length == null ||
        document.getElementById('inputNome').value.length < 3) {
            document.getElementById('erro').style.display = 'block';
            alert('Preencha o campo nome adequadamente com no mínimo 3 caracteres.');
            document.getElementById('inputNome').focus();
    } else {
        document.getElementById('sucesso').style.display = 'none';
    }
    // Valida o campo e-mail.
    if (document.getElementById('inputEmail').value.indexOf("@") == -1 ||
        document.getElementById('inputEmail').value.indexOf(".") == -1 ||
        document.getElementById('inputEmail').value == "" ||
        document.getElementById('inputEmail').value == null) {
            document.getElementById('erro').style.display = 'block';
            alert('Preencha o campo e-mail adequadamente.');
            document.getElementById('inputEmail').focus();
    } else {
        document.getElementById('sucesso').style.display = 'none';
    }
    // Valida o campo telefone.
    if (document.getElementById('inputTelefone').value.length == '' ||
        document.getElementById('inputTelefone').value.length == null) {
            document.getElementById('erro').style.display = 'block';
            alert('Preencha o campo telefone adequadamente.');
            document.getElementById('inputTelefone').focus();
    } else {
        document.getElementById('sucesso').style.display = 'none';
    }
    // Valida o campo senha.
    if (document.getElementById('inputPassword').value.length == '' ||
        document.getElementById('inputPassword').value.length == null ||
        document.getElementById('inputPassword').value.length < 6) {
            document.getElementById('erro').style.display = 'block';
            alert('A senha deve conter no mínimo 6 caracteres.');
            document.getElementById('inputPassword').focus();
            return false;
    } else {
        document.getElementById('sucesso').style.display = 'block';
        return true;
    }

    document.getElementById('inputNome').value='';
    document.getElementById('inputEmail').value='';
    document.getElementById('inputTelefone').value='';
    document.getElementById('inputPassword').value='';
    document.getElementById('sucesso').style.display = 'block';
    document.getElementById('erro').style.display = 'none';
}

function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
function mtel(v){
    v=v.replace(/\D/g,"");     				//Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function validaTexto(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );

    var regex = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if(!regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function formSucesso(){
    document.getElementById('sucesso').style.display = 'none';
}

function formErro(){
    document.getElementById('erro').style.display = 'none';
}