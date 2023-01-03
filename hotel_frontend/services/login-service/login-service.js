function logar(login, senha) {
    const usuario = {
        login: login.value,
        senha: senha.value
    }
    $.ajax({
        type: "POST",
        url: url + "/usuario/login",
        data: JSON.stringify(usuario),
    })
        .then((data) => {
            if(data.status === true){
                window.location.href = "index.html"
                //chamar template
                window.sessionStorage.setItem('usuario', JSON.stringify(data.login));
                window.sessionStorage.setItem('logado', 'true');
                usuarioRegistroComponent();
                // recepcaoComponent()
            } else {
                alert("Usuário ou senha incorretos!")
            }
        });
}

function logout(){
    window.sessionStorage.clear();
    window.location.reload()
}



