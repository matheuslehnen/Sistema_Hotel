function clienteEditarTemplate(idCliente){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="cliente-editar-component">\n' +
        '        <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Editar Cliente</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor informe os novos valores do cliente!</p>\n' +
        '                        <form id="clienteCadastroForm" class="row g-3" method="post">\n' +
        '                            <div class="col-md-6">\n' +
        '                               <input type="text" class="form-control" id="cliente-editar-nome" placeholder="Nome">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-6">\n' +
        '                               <input type="email" class="form-control" id="cliente-editar-email" placeholder="Email">\n' +
        '                            </div>\n' +

        '                            <div class="col-md-4">\n' +
        '                               <input type="text" class="form-control cpf" id="cliente-editar-cpf" placeholder="CPF">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-4">\n' +
        '                               <input type="text" class="form-control date" id="cliente-editar-nascimento" placeholder="Nascimento">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-4">\n' +
        '                               <input type="text" class="form-control phone_with_ddd" id="cliente-editar-telefone" placeholder="Telefone">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-4">\n' +
        '                               <input type="text" class="form-control cep" id="cliente-editar-cep" placeholder="Cep" onblur="buscaCep()">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-6">\n' +
        '                               <input type="text" class="form-control logradouro" id="cliente-editar-logradouro" placeholder="Rua">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-2">\n' +
        '                               <input type="text" class="form-control" id="cliente-editar-complemento" placeholder="Nº">\n' +
        '                            </div>\n' +
        '                            <div class="col-md-4">\n' +
        '                               <input type="text" class="form-control bairro" id="cliente-editar-bairro" placeholder="Bairro">\n' +
        '                            </div>\n' +
        '                            <div class="col-6">\n' +
        '                               <input type="text" class="form-control localidade" id="cliente-editar-localidade" placeholder="Cidade">\n' +
        '                            </div>\n' +
        '                            <div class="col-2">\n' +
        '                               <input type="text" class="form-control uf" id="cliente-editar-uf" placeholder="UF">\n' +
        '                            </div>\n' +
        '                            <div class="form-check form-switch text-start mb-4">\n' +
        '                                <input class="form-check-input form-switch" type="checkbox" role="switch" id="cliente-editar-fumante" >\n' +
        '                                <label class="form-check-label ms-3" for="cliente-cadastro-fumante">Fumante?</label>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5" type="button" onclick="editarCliente(' + idCliente + ')">\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}



function clienteEditarComponent(){
    let idCliente = $("#cliente-input-radio:checked").val();
    if(idCliente){
        removeTemplateAnterior();
        $(CONTAINER).append(clienteEditarTemplate(idCliente));
        aplicaMascaraClienteForm();
    } else {
        alert("Selecione um cliente primeiro.");
    }
}
