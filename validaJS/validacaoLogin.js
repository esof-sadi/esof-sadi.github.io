window.onload = function() {
    let btn = document.getElementById('loginButton');

    btn.onClick (
        function (a) {
            a.preventDefault();
            if (validaLogin() === false) {
                alert('Erro no login.');
            } else {
                form.submit();
            }
        }
    );
    let form = document.getElementById('formLogin');

    formSucesso(1);
    formErro(1);
}

function validaLogin() {
    // Valida o campo e-mail.
    if (document.getElementById('emailLogin').value.indexOf("@") == -1 ||
        document.getElementById('emailLogin').value.indexOf(".") == -1 ||
        document.getElementById('emailLogin').value == "" ||
        document.getElementById('emailLogin').value == null) {
            document.getElementById('erro').style.display = 'block';
            alert('E-mail ou senha incorreto.');
            document.getElementById('emailLogin').focus();
    } else {
        document.getElementById('sucesso').style.display = 'none';
    }

    // Valida o campo senha.
    if (document.getElementById('senhaLogin').value.length == '' ||
        document.getElementById('senhaLogin').value.length == null ||
        document.getElementById('senhaLogin').value.length < 6) {
            document.getElementById('erro').style.display = 'block';
            alert('E-mail ou senha incorreto.');
            document.getElementById('senhaLogin').focus();
            return false;
    } else {
        document.getElementById('sucesso').style.display = 'block';
        return true;
    }
}

function formSucesso(){
    document.getElementById('sucesso').style.display = 'none';
}

function formErro(){
    document.getElementById('erro').style.display = 'none';
}
