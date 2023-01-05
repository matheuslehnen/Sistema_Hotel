function adicionarCliente() {
    const clienteForm = {
        nome: $(".nome").val(),
        cpf: $(".cpf").val(),
        nascimento: $(".nascimento").val(),
        fumante: $(".fumante").is(":checked"),
        idContato: {
            email: $(".email").val(),
            telefone: $(".telefone").val()
        },
        idEndereco: {
            cep: $(".cep").val(),
            logradouro: $(".logradouro").val(),
            numero: $(".complemento").val(),
            bairro: $(".bairro").val(),
            localidade: $(".localidade").val(),
            uf: $(".uf").val()
        }
    }
    $.ajax({
        method: "POST",
        url: url + "/cliente",
        data: JSON.stringify(clienteForm),
        success: (response) => {
            if (response.status) {
                clienteComponent();
                closeSidebar()
                listarClientes();
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

function listarClientes() {
    limparTabela();
    closeSidebar();
    $.ajax({
        method: "GET",
        url: url + "/cliente",
        success: (response) => {
            if (response.status) {
                response.clientes.forEach(cliente => {
                    insereDadosNaTabelaCliente(cliente);
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

function editarCliente(id) {
    const clienteForm = {
        nome: $(".nome").val(),
        cpf: $(".cpf").val(),
        nascimento: $(".nascimento").val(),
        fumante: $(".fumante").is(":checked"),
        idContato: {
            email: $(".email").val(),
            telefone: $(".telefone").val()
        },
        idEndereco: {
            cep: $(".cep").val(),
            logradouro: $(".logradouro").val(),
            numero: $(".complemento").val(),
            bairro: $(".bairro").val(),
            localidade: $(".localidade").val(),
            uf: $(".uf").val()
        }
    }
    $.ajax({
        method: "PUT",
        url: url + "/cliente/" + id,
        data: JSON.stringify(clienteForm),
        success: (response) => {
            if (response.status) {
                clienteComponent();
                listarClientes();
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

function excluirCliente() {
    const id = $(".cliente-input-radio:checked").val();
    $.ajax({
        method: "DELETE",
        url: url + "/cliente/" + id,
        success: (response) => {
            if (response.status) {
                removeLinhaTabelaCliente(id);
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

function removeLinhaTabelaCliente(id) {
    $(".cliente-table-row" + id).remove();
    if (!$("#cliente-table-row").hasClass('table-data')) {
        desativaBotoes();
    }
}

function buscaCep() {
    const cep = $(".cep").val();
    if (cep) {
        $.ajax({
            method: "GET",
            url: "https://viacep.com.br/ws/" + cep + "/json/",
            success: (response) => {
                $(".logradouro").val(response.logradouro);
                $(".bairro").val(response.bairro);
                $(".localidade").val(response.localidade);
                $(".uf").val(response.uf);
            },
            error: (response) => {
                console.log(response);
            }
        })
    }
}

function insereDadosNaTabelaCliente(cliente) {
    let fumante;
    cliente.fumante ? fumante = "Sim" : fumante = "Não";
    $(".table-body").append(
        '<tr class="text-dark table-data cliente-table-row' + cliente.id + '" id="cliente-table-row">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input cliente-input-radio" type="radio" id="cliente-input-radio" name="cliente-input-radio" value="' + cliente.id + '" onclick="ativaBotoesEditarExcluir()">\n' +
        '         <label class="form-check-label" for="cliente-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + cliente.id + '</td>\n' +
        '     <td class="text-center">' + cliente.nome + '</td>\n' +
        '     <td class="text-center">' + cliente.cpf + '</td>\n' +
        '     <td class="text-center">' + cliente.nascimento + '</td>\n' +
        '     <td class="text-center">' + cliente.idEndereco.cep + '</td>\n' +
        '     <td class="text-center">' + cliente.idContato.email + '</td>\n' +
        '     <td class="text-center">' + fumante + '</td>\n' +
        '</tr>')
}

function validaClienteFormFields() {
    const nome = $(".nome").val();
    const cpf = $(".cpf").val();
    const nascimento = $(".nascimento").val();
    const telefone = $(".telefone").val();
    const cep = $(".cep").val();
    const logradouro = $(".logradouro").val();
    const complemento = $(".complemento").val();
    const bairro = $(".bairro").val();
    const localidade = $(".localidade").val();
    const uf = $(".uf").val()
    if (nome && cpf && nascimento && telefone && cep && logradouro && complemento && bairro && localidade && uf) {
        $(".botao-enviar").attr("disabled", false);
    } else {
        $(".botao-enviar").attr("disabled", true);
    }
}
