function adicionarUsuario() {
    const cadastrarUsuarioForm = {
        login: $("#usuario-cadastro-login").val(),
        senha: $("#usuario-cadastro-senha").val(),
    }
    $.ajax({
        type: "POST",
        url: url + "/usuario",
        data: JSON.stringify(cadastrarUsuarioForm),
        success: (response) => {
            usuarioComponent();
            closeSidebar()
            listarUsuarios()
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function listarUsuarios() {
    limparTabela();
    $.ajax({
        type: "GET",
        url: url + "/usuario",
        success: (response) => {
            response.forEach(usuario => {
                insereDadosNaTabelaUsuario(usuario);
            })
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function editarUsuario(idUsuario) {
    const editarUsuarioForm = {
        login: $("#usuario-editar-login").val(),
        senha: $("#usuario-editar-senha").val()
    }
    $.ajax({
        type: "PUT",
        url: url + "/usuario/" + idUsuario,
        data: JSON.stringify(editarUsuarioForm),
        success: () => {
            usuarioComponent();
            listarUsuarios();
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function excluirUsuario() {
    const idUsuario = $("#usuario-input-radio:checked").val();
    if(idUsuario){
        $.ajax({
            type: "DELETE",
            url: url + "/usuario/" + idUsuario,
            success: () => {
                removeLinhaTabelaUsuario(idUsuario);
            },
            error: (response) => {
                console.log(response);
                console.log("Criar um alert informando que erro ao deletar")
            }
        })
    } else {
        alert("Selecione um usuário primeiro.");
    }
}

function removeLinhaTabelaUsuario(idUsuario){
    return $("#usuario-table-row" + idUsuario).remove();
}

function insereDadosNaTabelaUsuario(usuario) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="usuario-table-row' + usuario.id + '">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="usuario-input-radio" value="' + usuario.id + '">\n' +
        '         <label class="form-check-label" for="usuario-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + usuario.id + '</td>\n' +
        '     <td class="text-center">' + usuario.login + '</td>\n' +
        '     <td class="text-center">' + usuario.senha + '</td>\n' +
        '</tr>')
}
