function adicionarCliente(){

}

function listarClientes(){

}

function editarCliente(){

}

function excluirCliente(){

}

function selecionaCliente() {
    return $("#cliente-input-radio:checked").val();
}

function removeLinhaTabela(idCliente){
    return $("#cliente-table-row" + idCliente).remove();
}

function insereDadosNaTabela(cliente) {
    $("#table-body").append(
        '<tr class="table-data text-dark" id="usuario-table-row' + cliente.id + '" onclick="selecionaCliente()">\n' +
        '     <th scope="row">\n' +
        '         <input class="form-check-input" type="radio" id="cliente-input-radio" name="cliente-input-radio" value="' + cliente.id + '">\n' +
        '         <label class="form-check-label" for="flexRadioDefault1"></label>\n' +
        '     </th>\n' +
        '     <td>' + cliente.id + '</td>\n' +
        '     <td >' + cliente.login + '</td>\n' +
        '     <td>' + cliente.senha + '</td>\n' +
        '</tr>')
}
