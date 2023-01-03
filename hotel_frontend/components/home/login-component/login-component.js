function loginTemplate(){
    return '<div class="row d-flex justify-content-center align-items-center p-3 h-100 w-100" id="login-component">\n' +
        '            <div class="col-12 col-md-8 col-lg-6 col-xl-5">\n' +
        '                <div class="card text-bg-light" style="border-radius: 1rem; ">\n' +
        '                    <div class="card-body p-5 text-center">\n' +
        '                        <div>\n' +
        '                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>\n' +
        '                            <p class="text-dark-50 mb-5">Por favor insira seu login-service e senha!</p>\n' +
        '                            <form method="post">\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="text" id="login" name="login" placeholder="Usuário" class="form-control form-control-lg" />\n' +
        '                            </div>\n' +
        '                            <div class="form-outline form-white mb-4">\n' +
        '                                <input type="password" id="senha" name="senha" placeholder="Senha" class="form-control form-control-lg" />\n' +
        '                            </div>\n' +
        '                            <p class="small pb-lg-2 "><button class="btn btn-link">Esqueceu sua senha?</button></p>\n' +
        '\n' +
        '                            <button class="btn btn-outline-primary btn-lg px-5 " type="button" onclick="logar(login, senha)">Login</button>\n' +
        '                            </form>\n' +
        '                            <div class="d-flex justify-content-center text-center mt-4 pt-1">\n' +
        '                                <a href="#!" class="text-dark-"><i class="fab fa-facebook-f fa-lg"></i></a>\n' +
        '                                <a href="#!" class="text-dark-"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>\n' +
        '                                <a href="#!" class="text-dark-"><i class="fab fa-google fa-lg"></i></a>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div>\n' +
        '                            <p class="mb-0">Não tem uma conta? <button class="btn btn-link mt-2" onclick="usuarioCadastroComponent()">Registre-se</a>\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
}

function loginComponent(){
    removeTemplateAnterior();
    $(CONTAINER).append(loginTemplate());
}






