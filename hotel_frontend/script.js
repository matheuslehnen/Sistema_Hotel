$(document).ready(() => {
    navbarComponent();
    carouselComponent();
    footerComponent();
    sidebarComponent();
});


function removeTemplateAnterior() {
    if ($(CAROUSELCOMPONENT).length > 0) {
        $(CAROUSELCOMPONENT).remove();
    }
    if ($(LOGINCOMPONENT).length > 0) {
        $(LOGINCOMPONENT).remove();
    }
    removeTemplatesQuarto();
    removeTemplatesCliente();
    removeTemplatesHospedagem();
    removeTemplatesUsuario();
}

function removeTemplatesQuarto() {
    if ($(QUARTOCOMPONENT).length > 0) {
        $(QUARTOCOMPONENT).remove();
    }
    if ($(QUARTOCADASTROCOMPONENT).length > 0) {
        $(QUARTOCADASTROCOMPONENT).remove();
    }
    if ($(QUARTOEDITARCOMPONENT).length > 0) {
        $(QUARTOEDITARCOMPONENT).remove();
    }
}

function removeTemplatesCliente() {
    if ($(CLIENTECOMPONENT).length > 0) {
        $(CLIENTECOMPONENT).remove();
    }
    if ($(CLIENTECADASTROCOMPONENT).length > 0) {
        $(CLIENTECADASTROCOMPONENT).remove();
    }
    if ($(CLIENTEEDITARCOMPONENT).length > 0) {
        $(CLIENTEEDITARCOMPONENT).remove();
    }
}

function removeTemplatesHospedagem() {
    if ($(HOSPEDAGEMCOMPONENT).length > 0) {
        $(HOSPEDAGEMCOMPONENT).remove();
    }
    if ($(HOSPEDAGEMCHECKINCOMPONENT).length > 0) {
        $(HOSPEDAGEMCHECKINCOMPONENT).remove();
    }
    if ($(HOSPEDAGEMEDITARCOMPONENT).length > 0) {
        $(HOSPEDAGEMEDITARCOMPONENT).remove();
    }
    if ($(HOSPEDAGEMCHECKOUTCOMPONENT).length > 0) {
        $(HOSPEDAGEMCHECKOUTCOMPONENT).remove();
    }
}

function removeTemplatesUsuario() {
    if ($(USUARIOCOMPONENT).length > 0) {
        $(USUARIOCOMPONENT).remove();
    }
    if ($(USUARIOCADASTROCOMPONENT).length > 0) {
        $(USUARIOCADASTROCOMPONENT).remove();
    }
    if ($(USUARIOEDITARCOMPONENT).length > 0) {
        $(USUARIOEDITARCOMPONENT).remove();
    }
}

function limparTabela() {
    $(".table-data").remove();
    desativaBotoes()
}

function ativaBotoes() {
    $(".botao-limpar").attr("disabled", false);
    $(".botao-editar").attr("disabled", false);
    $(".botao-excluir").attr("disabled", false);
}

function desativaBotoes() {
    $(".botao-limpar").attr("disabled", true);
    $(".botao-editar").attr("disabled", true);
    $(".botao-excluir").attr("disabled", true);
}

function ativaBotoesEditarExcluir() {
    $(".botao-editar").attr("disabled", false);
    $(".botao-excluir").attr("disabled", false);
}

function ativaBotaoLimpar() {
    $(".botao-limpar").attr("disabled", false);
}


function aplicaMascaraClienteForm() {
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.date').mask('00/00/0000');
    $('.cep').mask('00000-000');
}
