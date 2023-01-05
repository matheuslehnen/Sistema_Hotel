function hospedagemTemplate(){
    return ' <div id="cliente-component" class="card text-bg-light m-3 w-100">\n' +
        '        <div class="card-header fw-bold">Lista de Hospedagem</div>\n' +
        '        <div class="card-body">\n' +
        '            <table class="table table-hover text-center" id="hospedagem-table">\n' +
        '                <thead>\n' +
        '                <tr>\n' +
        '                    <th scope="col"><input class="form-check-input" type="radio" disabled></th>\n' +
        '                    <th scope="col">Id</th>\n' +
        '                    <th scope="col">Cliente</th>\n' +
        '                    <th scope="col">CPF</th>\n' +
        '                    <th scope="col">Quarto</th>\n' +
        '                    <th scope="col">Diárias</th>\n' +
        '                    <th scope="col">Total</th>\n' +
        '                </tr>\n' +
        '                </thead>\n' +
        '                <tbody class="table-body"></tbody>\n' +
        '            </table>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="hospedagemCheckinComponent()">Check-In</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarHospedagens()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-secondary fw-bold float-end me-2 botao-limpar" onclick="limparTabela()" disabled>Limpar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2 botao-editar" onclick="hospedagemEditarComponent()" disabled>Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2 botao-excluir" onclick="hospedagemCheckoutComponent()" disabled>Check-Out</button>\n' +
        '        </div>\n' +
        '    </div>'
}

function hospedagemComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(hospedagemTemplate());
}

