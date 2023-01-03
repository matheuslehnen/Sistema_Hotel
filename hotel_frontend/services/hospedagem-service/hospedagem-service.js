function checkIn(){

}

function listarHospedagens(){

}

function editarHospedagem(){

}

function checkOut(){

}

function selecionaHospedagem() {
    return $("#hospedagem-input-radio:checked").val();
}

function removeLinhaTabela(idHospedagem){
    return $("#hospedagem-table-row" + idHospedagem).remove();
}

function insereDadosNaTabela(hospedagem) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="hospede-table-row' + hospedagem.id + '" onclick="selecionaHospedagem()">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="hospedagem-input-radio" name="hospedagem-input-radio" value="' + hospedagem.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
        '     </th>\n' +
        '     <td>' + hospedagem.id + '</td>\n' +
        '     <td >' + hospedagem.login + '</td>\n' +
        '     <td>' + hospedagem.senha + '</td>\n' +
        '</tr>')
}
