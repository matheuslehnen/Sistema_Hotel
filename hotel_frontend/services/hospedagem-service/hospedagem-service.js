function checkIn() {
    const checkInForm = {
        cpf: $("#hospedagem-cadastro-cpf").val(),
        idQuarto: $("#hospedagem-cadastro-quarto-id").val(),
        diarias: $("#hospedagem-cadastro-diarias").val(),
    }

    $.ajax({
        method: "POST",
        url: url + "/hospedagem",
        data: JSON.stringify(checkInForm),
        success: (response) => {

            if (!response.status) {
                alert(response.motivo)
            } else {
                hospedagemComponent();
                listarHospedagens();
            }
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function listarHospedagens() {
    limparTabela();
    $.ajax({
        method: "GET",
        url: url + "/hospedagem",
        success: (response) => {
            response.forEach(hospedagem => {
                insereDadosNaTabelaHospedagem(hospedagem);
            })
        },
        error: (response) => {
            console.log(response);
        }
    })
}

function editarHospedagem(idHospedagem) {
    const editarHospedagemForm = {
        idQuarto: $("#hospedagem-editar-quarto-id").val(),
        diarias: $("#hospedagem-editar-diarias").val(),
    }

    $.ajax({
        method: "PUT",
        url: url + "/hospedagem/" + idHospedagem,
        data: JSON.stringify(editarHospedagemForm),
        success: (response) => {
            console.log(response);
            hospedagemComponent();
            listarHospedagens();
        },
        error: (response) => {
            console.log(response)
        }
    })
}

function checkOut(idHospedagem) {

    $.ajax({
        method: "DELETE",
        url: url + "/hospedagem/" + idHospedagem,
        success: (response) => {
            hospedagemComponent();
            listarHospedagens();
        },
        error: (response) => {
            console.log(response);
            console.log('estou caindo aqui');
        }
    })
}


function removeLinhaTabelaHospedagem(idHospedagem) {
    return $("#hospedagem-table-row" + idHospedagem).remove();
}

function insereDadosNaTabelaHospedagem(hospedagem) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="hospede-table-row' + hospedagem.id + '">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input hospedagem-input-radio" type="radio" value="' + hospedagem.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
        '     </th>\n' +
        '     <td class="text-center">' + hospedagem.id + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-nome">' + hospedagem.idCliente.nome + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-cpf">' + hospedagem.idCliente.cpf + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-quarto-id">' + hospedagem.idQuarto.id + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-diarias">' + hospedagem.diarias + '</td>\n' +
        '     <td class="text-center hospedagem-table-data-total">R$ ' + parseFloat(hospedagem.total).toFixed(2).replace("." , ",") + '</td>\n' +
        '</tr>')
}
