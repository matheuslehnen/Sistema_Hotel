function adicionarCliente(){
    const cadastrarClienteForm = {
        nome: $("#cliente-cadastro-nome").val(),
        cpf: $("#cliente-cadastro-cpf").val(),
        nascimento: $("#cliente-cadastro-nascimento").val(),
        fumante: $("#cliente-cadastro-fumante").is(":checked"),
        idContato: {
            email: $("#cliente-cadastro-email").val(),
            telefone: $("#cliente-cadastro-telefone").val()
        },
        idEndereco: {
            cep: $("#cliente-cadastro-cep").val(),
            logradouro: $("#cliente-cadastro-logradouro").val(),
            numero: $("#cliente-cadastro-complemento").val(),
            bairro: $("#cliente-cadastro-bairro").val(),
            localidade: $("#cliente-cadastro-localidade").val(),
            uf: $("#cliente-cadastro-uf").val()
        }
    }
    $.ajax({
        method: "POST",
        url: url + "/cliente",
        data: JSON.stringify(cadastrarClienteForm),
        success: (response) => {
            console.log(response)
            clienteComponent();
            closeSidebar()
            listarClientes();
        },
        error: (response) => {
            console.log(response);
            console.log("erro");
        }
    })
}

function listarClientes(){
    limparTabela();
    $.ajax({
        method: "GET",
        url: url + "/cliente",
        success: (response) => {
            console.log(response)
            response.forEach(cliente => {
                insereDadosNaTabelaCliente(cliente);
            })
        },
        error: (response) => {
            console.log(response);
        }
    })
}

function editarCliente(idCliente){
    const editaClienteForm = {
        nome: $("#cliente-editar-nome").val(),
        cpf: $("#cliente-editar-cpf").val(),
        nascimento: $("#cliente-editar-nascimento").val(),
        fumante: $("#cliente-editar-fumante").is(":checked"),
        idContato: {
            email: $("#cliente-editar-email").val(),
            telefone: $("#cliente-editar-telefone").val()
        },
        idEndereco: {
            cep: $("#cliente-editar-cep").val(),
            logradouro: $("#cliente-editar-logradouro").val(),
            numero: $("#cliente-editar-complemento").val(),
            bairro: $("#cliente-editar-bairro").val(),
            localidade: $("#cliente-editar-localidade").val(),
            uf: $("#cliente-editar-uf").val()
        }
    }
    $.ajax({
        method: "PUT",
        url: url + "/cliente/" + idCliente,
        data: JSON.stringify(editaClienteForm),
        success: (response) => {
            console.log(response)
            clienteComponent();
            listarClientes();
        },
        error: (response) => {
            console.log(response);
        }
    })
}

function excluirCliente(){
    const idCliente = $("#cliente-input-radio:checked").val();
    if(idCliente){
        $.ajax({
            method: "DELETE",
            url: url + "/cliente/" + idCliente,
            success: (response) => {
                console.log(response)
                removeLinhaTabelaCliente(idCliente);
            },
            error: (response) => {
                console.log(response);
            }
        })
    } else {
        alert("Selecione um cliente primeiro.");
    }
}

function removeLinhaTabelaCliente(idCliente){
    return $("#cliente-table-row" + idCliente).remove();
}

function buscaCep(){
    const cep = $(".cep").val();
    console.log()
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


function insereDadosNaTabelaCliente(cliente) {
    let fumante;
    cliente.fumante ? fumante = "Sim" : fumante = "Não";
    $("#table-body").append(
        '<tr class="table-data text-dark" id="cliente-table-row' + cliente.id + '">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="cliente-input-radio" name="cliente-input-radio" value="' + cliente.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
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
