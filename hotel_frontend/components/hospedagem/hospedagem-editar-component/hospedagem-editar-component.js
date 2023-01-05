function hospedagemEditarTemplate(editarHospedagemForm){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="hospedagem-checkin-component">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Editar hospedagem ' + editarHospedagemForm.idHospedagem + '</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor preencha corretamente as informações!</p>\n' +
        '                        <form id="hospedagemCheckInForm" method="post">\n' +
        '                            <div class="row g-3">\n' +
        '                               <div class="form-outline form-white col-md-6 text-start">\n' +
        '                                   <label for="hospedagem-editar-quarto-id" class="form-label">Quarto</label>\n' +
        '                                   <select id="hospedagem-editar-quarto-id" class="form-select form-select-lg mb-3 quarto-id">/n' +
        '                                       <option hidden>Quarto</option>/n' +
        '                                   </select>' +
        '                               </div>\n' +
        '                               <div class="form-outline form-white col-md-6 text-start">\n' +
        '                                   <label for="hospedagem-checkout-diarias" class="form-label">Diárias</label>\n' +
        '                                    <input type="text" class="form-control form-control-lg diarias" placeholder="Diárias" />\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-danger btn-lg px-5" type="button" onclick="hospedagemComponent()">\n' +
        '                                Voltar\n' +
        '                            </button>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5 mt-4 botao-enviar" type="button" onclick="editarHospedagem(' + editarHospedagemForm.idHospedagem + ')" disabled>\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '    </div>'
}

function hospedagemEditarComponent(){
    let editarHospedagemForm = {
        idHospedagem: $(".hospedagem-input-radio:checked").val(),
        cpf: $(".hospedagem-table-data-cpf").text()
    }


    if(editarHospedagemForm.idHospedagem){
        removeTemplateAnterior();
        closeSidebar();
        $(CONTAINER).append(hospedagemEditarTemplate(editarHospedagemForm));
        buscaQuartosVagosParaCliente(editarHospedagemForm.cpf)
    } else {
        alert("Selecione uma hospedagem primeiro.");
    }
}
