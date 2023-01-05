function adicionarUsuario() {
    const usuarioForm = {
        login: $(".usuario-login").val(),
        senha: $(".usuario-senha").val(),
    }
    $.ajax({
        type: "POST",
        url: url + "/usuario",
        data: JSON.stringify(usuarioForm),
        success: (response) => {
            if (response.status) {
                usuarioComponent();
                closeSidebar()
                listarUsuarios()
            } else {
                alert(response.motivo)
            }
        },
        error: (response) => {
            console.log(response)
            alert("Erro ao realizar a operação. Tente novamente.")
        }
    })
}

function listarUsuarios() {
    limparTabela();
    closeSidebar();
    $.ajax({
        type: "GET",
        url: url + "/usuario",
        success: (response) => {
            if (response.status) {
                response.usuarios.forEach(usuario => {
                    insereDadosNaTabelaUsuario(usuario);
                    ativaBotaoLimpar();
                })
            } else {
                alert(response.motivo)
            }
        },
        error: (response) => {
            console.log(response)
            alert("Erro ao realizar a operação. Tente novamente.")
        }
    })
}

function editarUsuario(id) {
    const usuarioForm = {
        login: $(".usuario-login").val(),
        senha: $(".usuario-senha").val()
    }
    $.ajax({
        type: "PUT",
        url: url + "/usuario/" + id,
        data: JSON.stringify(usuarioForm),
        success: (response) => {
            if (response.status) {
                usuarioComponent();
                listarUsuarios();
            } else {
                alert(response.motivo);
            }
        },
        error: (response) => {
            console.log(response)
            alert("Erro ao realizar a operação. Tente novamente.")
        }
    })
}

function excluirUsuario() {
    const id = $(".usuario-input-radio:checked").val();

    $.ajax({
        type: "DELETE",
        url: url + "/usuario/" + id,
        success: (response) => {
            if (response.status) {
                removeLinhaTabelaUsuario(id);
            } else {
                alert(response.motivo);
            }
        },
        error: (response) => {
            console.log(response);
            alert("Erro ao realizar a operação. Tente novamente.")
        }
    })
}

function removeLinhaTabelaUsuario(id) {
    $(".usuario-table-row" + id).remove();
    if (!$("#usuario-table-row").hasClass('table-data')) {
        desativaBotoes();
    }
}

function insereDadosNaTabelaUsuario(usuario) {
    $(".table-body").append(
        '<tr class="text-dark table-data usuario-table-row' + usuario.id + '" id="usuario-table-row">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input usuario-input-radio" type="radio" name="usuario-input-radio" id="usuario-input-radio" value="' + usuario.id + '" onclick="ativaBotoesEditarExcluir()">\n' +
        '         <label class="form-check-label" for="usuario-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + usuario.id + '</td>\n' +
        '     <td class="text-center">' + usuario.login + '</td>\n' +
        '     <td class="text-center">' + usuario.senha + '</td>\n' +
        '</tr>')
}

function validaUsuarioFormFields() {
    if ($(".usuario-login").val() && $(".usuario-senha").val()) {
        $(".botao-enviar").attr("disabled", false);
    } else {
        $(".botao-enviar").attr("disabled", true);
    }
}

