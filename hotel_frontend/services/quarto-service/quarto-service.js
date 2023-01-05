function adicionarQuarto() {
    const quartoForm = {
        localizacao: $("#quarto-cadastro-localizacao").val(),
        tipo: $("#quarto-cadastro-tipo").val(),
        valor: parseFloat($("#quarto-cadastro-valor").val().replace("." , "")),
        permiteFumante: $("#quarto-cadastro-permite-fumante").is(":checked"),
        situacao: "Vago",
    }
    $.ajax({
        method: 'POST',
        url: url + "/quarto",
        data: JSON.stringify(quartoForm),
        success: (response) => {
            quartoComponent();
            closeSidebar()
            listarQuartos();
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function listarQuartos() {
    limparTabela();
    $.ajax({
        method: "GET",
        url: url + "/quarto",
        success: (response) => {
            response.forEach(quarto => {
                insereDadosNaTabelaQuarto(quarto);
            })
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function buscaQuartosVagos(){
    $.ajax({
        method: "GET",
        url: url + "/quartos/listar-vagos",
        success: (response) => {
            response.forEach(quarto => {
                $("#hospedagem-cadastro-quarto-id").append('<option value="' + quarto.id + '">Quarto ' + quarto.id + '</option>');
            })
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function buscaQuartosVagosParaCliente(cpf){
    $(".hospedagem-quarto-option").remove();
    let cpfUsuario;
    typeof cpf === "string" ? cpfUsuario = cpf : cpfUsuario = cpf.value;

    if(cpfUsuario){
        $.ajax({
            method: "GET",
            url: url + "/quartos/listar-vagos-para-cliente/" + cpfUsuario,
            success: (response) => {
                console.log(response)
                if(response.status){
                    response.quartos.forEach(quarto => {
                        $(".hospedagem-quarto-id").append('<option class="hospedagem-quarto-option" value="' + quarto.id + '">Quarto ' + quarto.id + '</option>');
                    })
                }
            },
            error: (response) => {
                console.log(response)
            }
        })
    }
}

function editarQuarto(idQuarto) {
    const editarQuartoForm = {
        localizacao: $("#quarto-editar-localizacao").val(),
        tipo: $("#quarto-editar-tipo").val(),
        valor: parseFloat($("#quarto-editar-valor").val().replace("." , "")),
        permiteFumante: $("#quarto-editar-permite-fumante").is(":checked"),
        situacao: "Vago",
    }
   $.ajax({
       method: "PUT",
       url: url + "/quarto/" + idQuarto,
       data: JSON.stringify(editarQuartoForm),
       success: (response) => {
           quartoComponent();
           listarQuartos();
       },
       error: (response) => {
           console.log(response)
       }
   })
}

function excluirQuarto() {
    const idQuarto = $("#quarto-input-radio:checked").val();
    if(idQuarto){
        $.ajax({
            method: "DELETE",
            url: url + "/quarto/" + idQuarto,
            success: (response) => {
                removeLinhaTabelaQuarto(idQuarto)
            },
            error: (response) => {
                console.log(response);
                console.log("Criar um alert informando que erro ao deletar")
            }
        })
    } else {
        alert("Selecione um quarto primeiro.");
    }
}

function removeLinhaTabelaQuarto(idQuarto) {
    return $("#quarto-table-row" + idQuarto).remove();
}

function insereDadosNaTabelaQuarto(quarto) {
    let permiteFumante;
    quarto.permiteFumante ? permiteFumante = "Sim" : permiteFumante = "Não";
    $("#table-body").append(
        '<tr class="table-data text-dark" id="quarto-table-row' + quarto.id + '">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="quarto-input-radio" value="' + quarto.id + '">\n' +
        '         <label class="form-check-label" for="quarto-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + quarto.id + '</td>\n' +
        '     <td class="text-center">' + quarto.localizacao + '</td>\n' +
        '     <td class="text-center">' + quarto.tipo + '</td>\n' +
        '     <td class="text-center">R$ ' + parseFloat(quarto.valor).toFixed(2).replace("." , ",") + '</td>\n' +
        '     <td class="text-center">' + permiteFumante + '</td>\n' +
        '     <td class="text-center">' + quarto.situacao + '</td>\n' +
        '</tr>');
}
