function adicionarQuarto() {
    const quartoForm = {
        localizacao: $(".quarto-localizacao").val(),
        tipo: $(".quarto-tipo").val(),
        valor: parseFloat($(".quarto-valor").val().replace(".", "")),
        permiteFumante: $(".quarto-permite-fumante").is(":checked"),
        situacao: "Vago",
    }
    $.ajax({
        method: 'POST',
        url: url + "/quarto",
        data: JSON.stringify(quartoForm),
        success: (response) => {
            if (response.status) {
                quartoComponent();
                closeSidebar();
                listarQuartos();
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

function listarQuartos() {
    limparTabela();
    closeSidebar();
    $.ajax({
        method: "GET",
        url: url + "/quarto",
        success: (response) => {
            if (response.status) {
                response.quartos.forEach(quarto => {
                    insereDadosNaTabelaQuarto(quarto);
                    closeSidebar();
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

function editarQuarto(id) {
    const quartoForm = {
        localizacao: $(".quarto-localizacao").val(),
        tipo: $(".quarto-tipo").val(),
        valor: parseFloat($(".quarto-valor").val().replace(".", "")),
        permiteFumante: $(".quarto-permite-fumante").is(":checked"),
        situacao: "Vago",
    }
    $.ajax({
        method: "PUT",
        url: url + "/quarto/" + id,
        data: JSON.stringify(quartoForm),
        success: (response) => {
            if (response.status) {
                quartoComponent();
                closeSidebar();
                listarQuartos();
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

function excluirQuarto() {
    const id = $(".quarto-input-radio:checked").val();
    $.ajax({
        method: "DELETE",
        url: url + "/quarto/" + id,
        success: (response) => {
            if (response.status) {
                removeLinhaTabelaQuarto(id);
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

function removeLinhaTabelaQuarto(id) {
    $(".quarto-table-row" + id).remove();
    if (!$("#quarto-table-row").hasClass('table-data')) {
        desativaBotoes();
    }
}

function insereDadosNaTabelaQuarto(quarto) {
    let valor = parseFloat(quarto.valor).toFixed(2).replace(".", ",");
    let permiteFumante;
    quarto.permiteFumante ? permiteFumante = "Sim" : permiteFumante = "Não";

    $(".table-body").append(
        '<tr class="text-dark table-data quarto-table-row' + quarto.id + '" id="quarto-table-row">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input quarto-input-radio" type="radio" id="quarto-input-radio" name="quarto-input-radio" value="' + quarto.id + '" onclick="ativaBotoesEditarExcluir()">\n' +
        '         <label class="form-check-label" for="quarto-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + quarto.id + '</td>\n' +
        '     <td class="text-center">' + quarto.localizacao + '</td>\n' +
        '     <td class="text-center">' + quarto.tipo + '</td>\n' +
        '     <td class="text-center">R$ ' + valor + '</td>\n' +
        '     <td class="text-center">' + permiteFumante + '</td>\n' +
        '     <td class="text-center">' + quarto.situacao + '</td>\n' +
        '</tr>');
}

function validaQuartoFormFields() {
    if ($(".quarto-localizacao").val() && $(".quarto-tipo").val() && $(".quarto-valor").val()) {
        $(".botao-enviar").attr("disabled", false);
    } else {
        $(".botao-enviar").attr("disabled", true);
    }
}
