function sidebarTemplate(){
    return '<div class="offcanvas offcanvas-start text-bg-light hide" tabindex="-1" id="menu" aria-labelledby="offcanvasLabel">\n' +
        '        <div class="offcanvas-header">\n' +
        '            <h3 class="p-3 border-bottom border-secondary border-2"><a href="index.html" id="menu-title" class="text-secondary">The Gallery Hostel</a></h3>\n' +
        '            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onclick="closeSidebar()"></button>\n' +
        '        </div>\n' +
        '        <div class="offcanvas-body ">\n' +
        '\n' +
        '            <div class="list-group list-group-flush">\n' +
        '                <a href="#" class="list-group-item list-group-item-action list-group-item-light p-3" onclick="quartoComponent()">Quartos</a>\n' +
        '                <a href="#" class="list-group-item list-group-item-action list-group-item-light p-3" onclick="clienteComponent()">Clientes</a>\n' +
        '                <a href="#" class="list-group-item list-group-item-action list-group-item-light p-3" onclick="hospedagemComponent()">Hospedagens</a>\n' +
        '                <a href="#" class="list-group-item list-group-item-action list-group-item-light p-3" onclick="usuarioComponent()">Usuários</a>\n' +
        '\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}

function sidebarComponent(){
    $(SIDEBAR).append(sidebarTemplate());
}

function openSidebar(){
    $(MENU).hasClass('show') ? $(MENU).removeClass('show').addClass('hide') : $(MENU).removeClass('hide').addClass('show');

}

function closeSidebar(){
    $(MENU).removeClass('show').addClass('hide');
}
