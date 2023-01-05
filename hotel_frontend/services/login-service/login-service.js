function logar() {
    const usuarioLogarForm = {
        login: $(".usuario-login").val(),
        senha: $(".usuario-senha").val()
    }
    $.ajax({
        type: "POST",
        url: url + "/usuario/login",
        data: JSON.stringify(usuarioLogarForm),
    })
        .then((response) => {
            if(response.status){
                window.sessionStorage.setItem('usuario', JSON.stringify(response.usuario));
                window.sessionStorage.setItem('logado', 'true');
                window.location.reload();
            } else {
                alert(response.motivo);
            }
        });
}

function logout(){
    window.sessionStorage.clear();
    window.location.reload()
}

