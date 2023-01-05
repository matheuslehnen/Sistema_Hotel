function quartoEditarTemplate(idQuarto){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="quarto-editar-component">\n' +
        '        <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Editar Quarto ' + idQuarto  + '</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor informe um novo valor para login e senha!</p>\n' +
        '                        <form id="quartoEditarForm" name="quartoForm" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="quarto-editar-localizacao">/n' +
        '                                       <option hidden>Localização do Quarto</option>/n' +
        '                                       <option value="Norte">Norte</option>/n' +
        '                                       <option value="Sul">Sul</option>/n' +
        '                                       <option value="Leste">Leste</option>/n' +
        '                                       <option value="Oeste">Oeste</option>/n' +
        '                                       </select>' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="quarto-editar-tipo">/n' +
        '                                       <option hidden>Tipo do quarto</option>/n' +
        '                                       <option value="Solteiro">Quarto Solteiro</option>/n' +
        '                                       <option value="Casal">Quarto Duplo</option>/n' +
        '                                       <option value="Duplo">Quarto Casal</option>/n' +
        '                                </select>' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text" placeholder="Valor da Diária" id="quarto-editar-valor" class="form-control form-control-lg currency"/>\n' +
        '                            </div>\n' +
        '                            <div class="form-check form-switch text-start mb-4">\n' +
        '                                <input class="form-check-input form-switch" type="checkbox" role="switch" id="quarto-editar-permite-fumante">\n' +
        '                                <label class="form-check-label ms-3" for="quarto-editar-permite-fumante">Permite Fumantes?</label>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5" type="button" onclick="editarQuarto(' + idQuarto  + ')">\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}

function quartoEditarComponent(){
    let idQuarto = $("#quarto-input-radio:checked").val();
    if(idQuarto){
        removeTemplateAnterior();
        $(CONTAINER).append(quartoEditarTemplate(idQuarto));
        $('.currency').maskMoney(maskMoney);
    } else {
        alert("Selecione um quarto primeiro.");
    }
}
