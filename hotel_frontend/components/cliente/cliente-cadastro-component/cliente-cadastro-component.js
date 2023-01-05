function clienteCadastroTemplate(){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="cliente-cadastro-component">\n' +
        '            <div class="card text-bg-light w-75">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Cadastrar Cliente</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor informe os dados do cliente!</p>\n' +
        '                        <form class="clienteForm" method="post">\n' +
        '                            <div class="row">\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control nome" placeholder="Nome" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="email" class="form-control email" placeholder="Email" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <div class="row">\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control cpf" placeholder="CPF">\n' +
        '                               </div>\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control nascimento date" placeholder="Nascimento" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control telefone phone_with_ddd" placeholder="Telefone" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control cep" placeholder="CEP" onblur="buscaCep()" onkeyup="validaClienteFormFields()" >\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <div class="row">\n' +
        '                               <div class="col-10 form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control logradouro" placeholder="Rua" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col-2 form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control complemento" placeholder="Nº" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <div class="row">\n' +
        '                               <div class="col-4 form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control bairro" placeholder="Bairro" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col-6 form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control localidade" placeholder="Cidade" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                               <div class="col-2 form-outline form-white mb-4">\n' +
        '                                   <input type="text" class="form-control uf" placeholder="UF" onkeyup="validaClienteFormFields()">\n' +
        '                               </div>\n' +
        '                            </div>\n' +
        '                            <div class="form-check form-switch text-start mb-4">\n' +
        '                                <input class="form-check-input form-switch fumante" type="checkbox" role="switch" id="cliente-cadastrar-fumante" >\n' +
        '                                <label class="form-check-label ms-3" for="cliente-cadastrar-fumante">Fumante?</label>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-danger btn-lg px-5" type="button" onclick="clienteComponent()">\n' +
        '                                Voltar\n' +
        '                            </button>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5 botao-enviar" type="button" onclick="adicionarCliente()" disabled>\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '    </div>'
}

function clienteCadastroComponent(){
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(clienteCadastroTemplate());
    aplicaMascaraClienteForm();
}

