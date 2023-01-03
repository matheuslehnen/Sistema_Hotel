function hospedagemCheckoutTemplate(){
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="hospedagem-checkout-component">\n' +
        '        <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '            <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Check Out Hospedagem</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor crie um login e senha!</p>\n' +
        '\n' +
        '                        <form id="usuarioForm" name="usuarioForm" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text" id="login" name="login" placeholder="Usuário"\n' +
        '                                       class="form-control form-control-lg"/>\n' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="password" id="senha" name="senha" placeholder="Senha"\n' +
        '                                       class="form-control form-control-lg"/>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5" type="button" onclick="checkOut(login, senha)">\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}

function hospedagemCheckoutComponent(){
    removeTemplateAnterior();
    $(CONTAINER).append(hospedagemCheckoutTemplate());
}
