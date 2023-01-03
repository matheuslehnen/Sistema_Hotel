function quartoTemplate(){
    return '<div id="quarto-component" class="card text-bg-light m-3">\n' +
        '        <div class="card-header">Quarto</div>\n' +
        '        <div class="card-body">\n' +
        '            <h5 class="card-title">Lista de Quartos</h5>\n' +
        '            <div class="border">AQUI VAI UMA TABELA COM OS QUARTOS</div>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="adicionarQuarto()">Adicionar</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarQuartos()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2" onclick="editarQuarto()">Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2" onclick="excluirQuarto()">Excluir</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function quartoComponent(){
   removeTemplateAnterior();
   closeSidebar();
   $(CONTAINER).append(quartoTemplate());
}
