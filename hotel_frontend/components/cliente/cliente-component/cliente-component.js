function clienteTemplate(){
    return ' <div id="cliente-component" class="card text-bg-light m-3 w-100">\n' +
        '        <div class="card-header fw-bold">Lista de Clientes</div>\n' +
        '        <div class="card-body">\n' +
        '            <table class="table table-hover text-center" id="cliente-table">\n' +
        '                <thead>\n' +
        '                <tr>\n' +
        '                    <th scope="col"><input class="form-check-input" type="radio" disabled></th>\n' +
        '                    <th scope="col">Id</th>\n' +
        '                    <th scope="col">Nome</th>\n' +
        '                    <th scope="col">Cpf</th>\n' +
        '                    <th scope="col">Nascimento</th>\n' +
        '                    <th scope="col">Cep</th>\n' +
        '                    <th scope="col">Email</th>\n' +
        '                    <th scope="col">Fumante</th>\n' +
        '                </tr>\n' +
        '                </thead>\n' +
        '                <tbody class="table-body"></tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="clienteCadastroComponent()">Adicionar</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarClientes()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-secondary fw-bold float-end me-2 botao-limpar" onclick="limparTabela()" disabled>Limpar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2 botao-editar" onclick="clienteEditarComponent()" disabled>Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2 botao-excluir" onclick="excluirCliente()" disabled>Excluir</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function clienteComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(clienteTemplate());
}

