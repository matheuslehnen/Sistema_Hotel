function clienteTemplate(){
    return ' <div id="cliente-component" class="card text-bg-light m-3 w-75">\n' +
        '        <div class="card-header fw-bold">Lista de Clientes</div>\n' +
        '        <div class="card-body">\n' +
        '            <table class="table table-hover" id="cliente-table">\n' +
        '                <thead>\n' +
        '                <tr>\n' +
        '                    <th scope="col"><input class="form-check-input" type="radio" disabled></th>\n' +
        '                    <th scope="col">Id</th>\n' +
        '                    <th scope="col">Login</th>\n' +
        '                    <th scope="col">Senha</th>\n' +
        '                </tr>\n' +
        '                </thead>\n' +
        '                <tbody id="table-body"></tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="clienteCadastroComponent()">Adicionar</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarUsuarios()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2" onclick="clienteEditarComponent()">Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2" onclick="excluirUsuario()">Excluir</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function clienteComponent(){
    removeTemplateAnterior();
    // closeSidebar();
    $(CONTAINER).append(clienteTemplate());
}

