function clienteTemplate(){
    return ' <div id="cliente-component" class="card text-bg-light m-3">\n' +
        '        <div class="card-header">Cliente</div>\n' +
        '        <div class="card-body">\n' +
        '            <h5 class="card-title">Lista de Clientes</h5>\n' +
        '            <div class="border">AQUI VAI UMA TABELA COM OS Clientes</div>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="adicionarCliente()">Adicionar</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarClientes()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2" onclick="editarCliente()">Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2" onclick="excluirCliente()">Excluir</button>\n' +
        '        </div>\n' +
        '    </div>';
}

function clienteComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(clienteTemplate);
}
