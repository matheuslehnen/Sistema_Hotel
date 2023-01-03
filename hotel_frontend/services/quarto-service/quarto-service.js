function adicionarQuarto(){

}

function listarQuartos(){

}

function editarQuarto(){

}

function excluirQuarto(){

}


function selecionaQuarto() {
    return $("#quarto-input-radio:checked").val();
}

function removeLinhaTabela(idQuarto){
    return $("#quarto-table-row" + idQuarto).remove();
}

function insereDadosNaTabela(quarto) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="quarto-table-row' + quarto.id + '" onclick="selecionaQuarto()">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="quarto-input-radio" name="quarto-input-radio" value="' + quarto.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
        '     </th>\n' +
        '     <td>' + quarto.id + '</td>\n' +
        '     <td >' + quarto.login + '</td>\n' +
        '     <td>' + quarto.senha + '</td>\n' +
        '</tr>')
}
