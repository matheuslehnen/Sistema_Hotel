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
            alert('Usuário adicionado com sucesso');
            usuarioComponent();
            closeSidebar()

        });
}

function listarUsuarios() {
    limparTabela();
    $.ajax({
        type: "GET",
        url: url + "/usuario"
    })
        .then((data) => {
            data.forEach(usuario => {
                insereDadosNaTabela(usuario);
            })
        })

}

function editarUsuario(login, senha, idUsuario) {
    const usuarioForm = {
        login: login.value,
        senha: senha.value,
    }
    //ABRIR UM CARD COM UM NOVO FORMULARIO PARA PREENCHER OS DADOS NOVAMENTE E ENVIAR
    $.ajax({
        type: "PUT",
        url: url + "/usuario/" + idUsuario,
        data: JSON.stringify(usuarioForm)
    })
        .then((data) => {
            usuarioComponent();
            listarUsuarios();
        })
}

function excluirUsuario() {
    const idUsuario = selecionaUsuario();
    $.ajax({
        type: "DELETE",
        url: url + "/usuario/" + idUsuario
    })
        .then((data) => {
            if (data === 1) {
                removeLinhaTabela(idUsuario);
            } else {
                console.log("Criar um alert informando que erro ao deletar")
            }
        })
}


function selecionaUsuario() {
    return $("#usuario-input-radio:checked").val();
}

function removeLinhaTabela(idUsuario){
    return $("#usuario-table-row" + idUsuario).remove();
}

function insereDadosNaTabela(usuario) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="usuario-table-row' + usuario.id + '" onclick="selecionaUsuario()">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="usuario-input-radio" name="usuario-input-radio" value="' + usuario.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
        '     </th>\n' +
        '     <td>' + usuario.id + '</td>\n' +
        '     <td >' + usuario.login + '</td>\n' +
        '     <td>' + usuario.senha + '</td>\n' +
        '</tr>')
}
