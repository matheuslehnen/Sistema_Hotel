function logar() {
    const usuarioLogarForm = {
        login: $("#usuario-login-logar").val(),
        senha: $("#usuario-login-senha").val()
    }
    $.ajax({
        type: "POST",
        url: url + "/usuario/login",
        data: JSON.stringify(usuarioLogarForm),
    })
        .then((data) => {
            if(data.status === true){
                window.sessionStorage.setItem('usuario', JSON.stringify(data.login));
                window.sessionStorage.setItem('logado', 'true');
                window.location.reload();
            } else {
                alert("Usuário ou senha incorretos!")
            }
        });
}

function logout(){
    window.sessionStorage.clear();
    window.location.reload()
}



