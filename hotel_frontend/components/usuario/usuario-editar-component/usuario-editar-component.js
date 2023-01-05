function usuarioEditarTemplate(idUsuario) {
    return '<div class="row d-flex justify-content-center align-items-center p-5 h-100 w-100" id="usuario-editar-component">\n' +
        '            <div class="card text-bg-light w-50">\n' +
        '                <div class="card-body p-5 text-center">\n' +
        '                    <div>\n' +
        '                        <h2 class="fw-bold mb-2 text-uppercase">Editar Usuário ' + idUsuario + '</h2>\n' +
        '                        <p class="text-dark-50 mb-5">Por favor informe novos valores para o usuário!</p>\n' +
        '                        <form class="usuarioForm" method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text" placeholder="Usuário" class="form-control form-control-lg usuario-login" onblur="validaUsuarioFormFields()"/>\n' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="password" placeholder="Senha" class="form-control form-control-lg usuario-senha" onblur="validaUsuarioFormFields()"/>\n' +
        '                            </div>\n' +
        '                            <button class="btn btn-outline-danger btn-lg px-5" type="button" onclick="usuarioComponent()">\n' +
        '                                Voltar\n' +
        '                            </button>\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5 botao-enviar" type="button" onclick="editarUsuario(' + idUsuario + ')" disabled>\n' +
        '                                Enviar\n' +
        '                            </button>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '    </div>'
}

function usuarioEditarComponent() {
    let idUsuario = $(".usuario-input-radio:checked").val();
    removeTemplateAnterior();
    closeSidebar();
    $(CONTAINER).append(usuarioEditarTemplate(idUsuario));
}
