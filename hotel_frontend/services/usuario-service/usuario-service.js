function adicionarUsuario(login, senha) {
    const usuarioForm = {
        login: login.value,
        senha: senha.value,
    }

    $.ajax({
        type: "POST",
        url: url + "/usuario",
        data: JSON.stringify(usuarioForm),
    })
        .then((response) => {
            //colocar um alert fal
            if(window.sessionStorage.getItem('logado')){
                carouselComponent()
            } else {
                loginComponent();
            }

        });
}

function listarUsuarios() {
    limparTabela();
    $.ajax({
        type: "GET",
        url: url + "/usuario"
    })
        .then((data) => {
            data.forEach(user => {
                $("#table-body").append(
                    '    <tr class="table-data">\n' +
                    '        <th scope="row">' + user.id + '</th>\n' +
                    '        <td>' + user.login + '</td>\n' +
                    '        <td>' + user.senha + '</td>\n' +
                    '    </tr>')
            })
        })
}

function editarUsuario(id) {
    $.ajax({
        type: "PUT",
        url: url + "/usuario" + id
    })
        .then((data) => {
            console.log(data);
        })
}

function excluirUsuario(id) {
    $.ajax({
        type: "DELETE",
        url: url + "/usuario" + id
    })
        .then((data) => {
            console.log(data);
        })
}

function limparTabela(){
    $(".table-data").remove();
}
