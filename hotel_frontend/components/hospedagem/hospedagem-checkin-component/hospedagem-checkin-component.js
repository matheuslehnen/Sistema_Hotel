function hospedagemCheckinTemplate() {
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="hospedagem-checkin-component">\n' +
        '        <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Check in Hospedagem</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor preencha corretamente as informações!</p>\n' +
        '                        <form id="hospedagemCheckInForm" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text" id="hospedagem-cadastro-cpf" placeholder="Cpf do cliente" class="form-control form-control-lg cpf" onblur="buscaQuartosVagosParaCliente(this)"/>\n' +
        '                            </div>\n' +
        '                            <div class="row g-3">\n' +
        '                               <div class="form-outline form-white col-md-6">\n' +
        '                                   <select id="hospedagem-cadastro-quarto-id" class="form-select form-select-lg mb-3 hospedagem-quarto-id" aria-label=".form-select-lg example" >/n' +
        '                                       <option hidden>Quarto</option>/n' +
        '                                   </select>' +
        '                               </div>\n' +
        '                                <div class="form-outline form-white col-md-6">\n' +
        '                                    <input type="text" id="hospedagem-cadastro-diarias" placeholder="Diárias" class="form-control form-control-lg"/>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5" type="button" onclick="checkIn()">\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}

function hospedagemCheckinComponent() {
    removeTemplateAnterior();
    $(CONTAINER).append(hospedagemCheckinTemplate());
    // buscaQuartosVagos();
    aplicaMascaraClienteForm();

}
