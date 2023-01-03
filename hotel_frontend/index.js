$(document).ready(() => {
    navbarComponent();
    carouselComponent();
    footerComponent();
    sidebarComponent();
});


function removeTemplateAnterior(){
    if($(CAROUSELCOMPONENT).length > 0){
        $(CAROUSELCOMPONENT).remove();
    }
    if($(LOGINCOMPONENT).length > 0){
        $(LOGINCOMPONENT).remove();
    }
    if($(USUARIOREGISTROCOMPONENT).length > 0){
        $(USUARIOREGISTROCOMPONENT).remove();
    }
    if($(QUARTOCOMPONENT).length > 0){
        $(QUARTOCOMPONENT).remove();
    }
    if($(CLIENTECOMPONENT).length > 0){
        $(CLIENTECOMPONENT).remove();
    }
    if($(HOSPEDAGEMCOMPONENT).length > 0){
        $(HOSPEDAGEMCOMPONENT).remove();
    }
    if($(USUARIOCOMPONENT).length > 0){
        $(USUARIOCOMPONENT).remove();
    }

}
