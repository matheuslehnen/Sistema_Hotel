function quartoTemplate(){
    return ' <div id="quarto-component" class="card text-bg-light m-3 w-100">\n' +
        '        <div class="card-header fw-bold">Lista de Quartos</div>\n' +
        '        <div class="card-body">\n' +
        '            <table class="table table-hover text-center">\n' +
        '                <thead>\n' +
        '                <tr>\n' +
        '                    <th scope="col"><input class="form-check-input" type="radio" disabled></th>\n' +
        '                    <th scope="col">Id</th>\n' +
        '                    <th scope="col">Localização</th>\n' +
        '                    <th scope="col">Tipo</th>\n' +
        '                    <th scope="col">Valor</th>\n' +
        '                    <th scope="col">Permite Fumante</th>\n' +
        '                    <th scope="col">Situação</th>\n' +
        '                </tr>\n' +
        '                </thead>\n' +
        '                <tbody class="table-body"></tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="quartoCadastroComponent()">Adicionar</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarQuartos()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-secondary fw-bold float-end me-2 botao-limpar" onclick="limparTabela()" disabled>Limpar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2 botao-editar" onclick="quartoEditarComponent()" disabled>Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2 botao-excluir" onclick="excluirQuarto()" disabled>Excluir</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function quartoComponent(){
   removeTemplateAnterior();
   closeSidebar();
   $(CONTAINER).append(quartoTemplate());
}
