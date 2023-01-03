function usuarioTemplate(){
    return ' <div id="usuario-component" class="card text-bg-light m-3">\n' +
        '        <div class="card-header fw-bold">Usuarios</div>\n' +
        '        <div class="card-body">\n' +
        '            <h5 class="card-title">Lista de Usuarios</h5>\n' +
        '            <table class="table table-striped table-hover">\n' +
        '                <thead>\n' +
        '                <tr>\n' +
        '                    <th scope="col">Id</th>\n' +
        '                    <th scope="col">Login</th>\n' +
        '                    <th scope="col">Senha</th>\n' +
        '                </tr>\n' +
        '                </thead>\n' +
        '                <tbody id="table-body"></tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="usuarioRegistroComponent()">Adicionar Usuário</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarUsuarios()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2" onclick="editarUsuario()">Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2" onclick="excluirUsuario()">Excluir Usuário</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function usuarioComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(usuarioTemplate());
}
