function hospedagemCheckinTemplate() {
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="hospedagem-checkin-component">\n' +
        '            <div class="card text-bg-light w-50">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Hospedagem Check in</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor informe os dados da hospedagem!</p>\n' +
        '                        <form class="checkInForm" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text"  class="form-control form-control-lg cpf" placeholder="Cpf do cliente" onblur="buscaQuartosVagosParaCliente(this)" onkeyup="validaCheckinFormFields()"/>\n' +
        '                            </div>\n' +
        '                            <div class="row g-3">\n' +
        '                               <div class="form-outline form-white col-md-6">\n' +
        '                                   <select class="form-select form-select-lg mb-3 quarto-id" onblur="validaCheckinFormFields()">/n' +
        '                                       <option value="" hidden>Quarto</option>/n' +
        '                                   </select>' +
        '                               </div>\n' +
        '                                <div class="form-outline form-white col-md-6">\n' +
        '                                    <input type="text" placeholder="Diárias" class="form-control form-control-lg diarias" onkeyup="validaCheckinFormFields()"/>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-danger btn-lg px-5" type="button" onclick="hospedagemComponent()">\n' +
        '                                Voltar\n' +
        '                            </button>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5 botao-enviar" type="button" onclick="checkIn()" disabled>\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '    </div>'
}

function hospedagemCheckinComponent() {
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(hospedagemCheckinTemplate());
    // buscaQuartosVagos();
    aplicaMascaraClienteForm();

}
