function reservaTemplate(){
    return '<div id="hospedagem-component" class="card text-bg-light m-3">\n' +
        '        <div class="card-header">Hospedagem</div>\n' +
        '        <div class="card-body">\n' +
        '            <h5 class="card-title">Lista de Hospedagem</h5>\n' +
        '            <div class="border">AQUI VAI UMA TABELA COM AS HOSPEDAGENS</div>\n' +
        '        </div>\n' +
        '        <div class="card-footer bg-transparent ">\n' +
        '            <button type="button" class="btn btn-outline-success fw-bold float-end" onclick="checkIn()">Check-in</button>\n' +
        '            <button type="button" class="btn btn-outline-primary fw-bold float-end me-2" onclick="listarHospedagens()">Buscar</button>\n' +
        '            <button type="button" class="btn btn-outline-warning fw-bold float-end me-2" onclick="editarHospedagem()">Editar</button>\n' +
        '            <button type="button" class="btn btn-outline-danger fw-bold float-end me-2" onclick="checkOut()">Check-out</button>\n' +
        '        </div>\n' +
        '    </div>';
}

function hospedagemComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(reservaTemplate());
}
