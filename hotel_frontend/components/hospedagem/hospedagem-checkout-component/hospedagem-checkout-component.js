function hospedagemCheckoutTemplate(checkOutData){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="hospedagem-checkout-component">\n' +
        '        <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Check Out Hospedagem ' + checkOutData.idHospedagem + '</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Confira as informações e prossiga com o Checkout</p>\n' +
        '                        <form id="hospedagemCheckOutForm" class="text-start" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <label for="hospedagem-checkout-nome" class="form-labe">Nome Completo</label>\n' +
        '                                <input type="text" id="hospedagem-checkout-nome" placeholder="Nome Completo" class="form-control form-control-lg" readonly/>\n' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <label for="hospedagem-checkout-cpf" class="form-label">CPF</label>\n' +
        '                                <input type="text" id="hospedagem-checkout-cpf" placeholder="Cpf do cliente" class="form-control form-control-lg cpf" readonly/>\n' +
        '                            </div>\n' +
        '                            <div class="row g-3 mb-4">\n' +
        '                               <div class="form-outline form-white col-md-4">\n' +
        '                                <label for="hospedagem-checkout-quarto-id" class="form-label">Quarto</label>\n' +
        '                                   <input type="text" id="hospedagem-checkout-quarto-id" placeholder="Quarto" class="form-control form-control-lg" readonly/>\n' +
        '                               </div>\n' +
        '                               <div class="form-outline form-white col-md-4">\n' +
        '                                <label for="hospedagem-checkout-diarias" class="form-label">Diárias</label>\n' +
        '                                   <input type="text" id="hospedagem-checkout-diarias" placeholder="Diárias" class="form-control form-control-lg" readonly/>\n' +
        '                               </div>\n' +
        '                               <div class="form-outline form-white col-md-4">\n' +
        '                                <label for="hospedagem-checkout-total" class="form-label">Total</label>\n' +
        '                                   <input type="text" id="hospedagem-checkout-total" placeholder="Total" class="form-control form-control-lg" readonly/>\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5" type="button" onclick="checkOut(' + checkOutData.idHospedagem + ')">\n' +
        '                                Confirmar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}

function hospedagemCheckoutComponent(){
    let checkOutData = {
        idHospedagem: $(".hospedagem-input-radio:checked").val(),
        nome: $(".hospedagem-table-data-nome").text(),
        cpf: $(".hospedagem-table-data-cpf").text(),
        idQuarto: $(".hospedagem-table-data-quarto-id").text(),
        diarias: $(".hospedagem-table-data-diarias").text(),
        total: $(".hospedagem-table-data-total").text()
    }
    if(checkOutData.idHospedagem){
        removeTemplateAnterior();
        closeSidebar();
        $(CONTAINER).append(hospedagemCheckoutTemplate(checkOutData));
        $("#hospedagem-checkout-nome").val(checkOutData.nome);
        $("#hospedagem-checkout-cpf").val(checkOutData.cpf);
        $("#hospedagem-checkout-quarto-id").val(checkOutData.idQuarto);
        $("#hospedagem-checkout-diarias").val(checkOutData.diarias);
        $("#hospedagem-checkout-total").val(checkOutData.total);
    } else {
        alert("Selecione uma hospedagem primeiro.");
    }
}
