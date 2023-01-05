function checkIn() {
    const hospedagemForm = {
        cpf: $(".cpf").val(),
        idQuarto: $(".quarto-id").val(),
        diarias: $(".diarias").val(),
    }
    $.ajax({
        method: "POST",
        url: url + "/hospedagem",
        data: JSON.stringify(hospedagemForm),
        success: (response) => {
            if (response.status) {
                hospedagemComponent();
                closeSidebar()
                listarHospedagens();
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

function listarHospedagens() {
    limparTabela();
    closeSidebar();
    $.ajax({
        method: "GET",
        url: url + "/hospedagem",
        success: (response) => {
            if (response.status) {
                response.hospedagens.forEach(hospedagem => {
                    insereDadosNaTabelaHospedagem(hospedagem);
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

function editarHospedagem(id) {
    const hospedagemForm = {
        idQuarto: $(".quarto-id").val(),
        diarias: $(".diarias").val(),
    }
    $.ajax({
        method: "PUT",
        url: url + "/hospedagem/" + id,
        data: JSON.stringify(hospedagemForm),
        success: (response) => {
            if (response.status) {
                hospedagemComponent();
                closeSidebar();
                listarHospedagens();
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

function checkOut(id) {
    $.ajax({
        method: "DELETE",
        url: url + "/hospedagem/" + id,
        success: (response) => {
            if (response.status) {
                hospedagemComponent();
                closeSidebar();
                listarHospedagens();
                if (!$("#quarto-table-row").hasClass('table-data')) {
                    desativaBotoes();
                }
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

function removeLinhaTabelaHospedagem(id) {
    $(".hospede-table-row" + id).remove();
}

function insereDadosNaTabelaHospedagem(hospedagem) {
    $(".table-body").append(
        '<tr class="text-dark table-data hospede-table-row' + hospedagem.id + '" id="hospede-table-row">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input hospedagem-input-radio" id="hospedagem-input-radio" name="hospedagem-input-radio" type="radio" value="' + hospedagem.id + '" onclick="ativaBotoesEditarExcluir()">\n' +
        '         <label class="form-check-label" for="hospedagem-input-radio"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + hospedagem.id + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-nome">' + hospedagem.idCliente.nome + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-cpf">' + hospedagem.idCliente.cpf + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-quarto-id">' + hospedagem.idQuarto.id + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-diarias">' + hospedagem.diarias + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-total">R$ ' + parseFloat(hospedagem.total).toFixed(2).replace("." , ",") + '</td>\n' +
        '</tr>')
}

function buscaQuartosVagos() {
    $.ajax({
        method: "GET",
        url: url + "/quartos/listar-vagos",
        success: (response) => {
            if(response.status){
                response.quartosVagos.forEach(quarto => {
                    $(".hospedagem-quarto-id").append('<option class="hospedagem-quarto-option" value="' + quarto.id + '">Quarto ' + quarto.id + '</option>');
                })
            } else {
                alert(response.motivo);
            }
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function buscaQuartosVagosParaCliente(cpf) {
    $(".hospedagem-quarto-option").remove();

    let cpfUsuario;
    typeof cpf === "string" ? cpfUsuario = cpf : cpfUsuario = cpf.value;
    console.log(cpfUsuario)
    if (cpfUsuario) {
        $.ajax({
            method: "GET",
            url: url + "/quartos/listar-vagos-para-cliente/" + cpfUsuario,
            success: (response) => {
                if (response.status) {
                    response.quartos.forEach(quarto => {
                        $(".quarto-id").append('<option class="hospedagem-quarto-option" value="' + quarto.id + '">Quarto ' + quarto.id + '</option>');
                    })
                } else {
                    alert(response.motivo);
                }
            },
            error: (response) => {
                console.log(response)
            }
        })
    }
}

function validaCheckinFormFields(){
    if ($(".cpf").val() && $(".quarto-id").val() && $(".diarias").val()) {
        $(".botao-enviar").attr("disabled", false);
    } else {
        $(".botao-enviar").attr("disabled", true);
    }
}
