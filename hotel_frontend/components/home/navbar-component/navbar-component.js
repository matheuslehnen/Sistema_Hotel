function navbarTemplate(){

    if(window.sessionStorage.getItem('logado') == null){
        return '<div class="container-fluid">\n' +
            '        <div class="p-4">' +
            // '           <button type="button" class="btn btn btn-outline-light" onclick="loginComponent()"><i class="fa-solid fa-right-to-bracket fa-lg"></i> Login</button>\n' +
            '        </div>\n' +
            '        <div>\n' +
            '           <a class="navbar-brand " href="index.html">\n' +
            '               <img src="assets/logo-the-gallery-2.jpg" alt="logo" class="w-100 rounded-2">\n' +
            '           </a>\n' +
            '        </div>\n' +
            '        <div class="p-4">\n' +
            '           <button type="button" class="btn btn btn-outline-light" onclick="loginComponent()"><i class="fa-solid fa-right-to-bracket fa-lg"></i> Login</button>\n' +
            '        </div>\n' +
            '    </div>'
    } else if(window.sessionStorage.getItem('logado')) {
        return '<div class="container-fluid">\n' +
            '        <div class="p-4">' +
            '               <button type="button" class="btn btn btn-outline-light" onclick="openSidebar()"><i class="fa fa-bars fa-lg"></i></button>\n' +
            '        </div>\n' +
            '        <div>\n' +
            '           <a class="navbar-brand " href="index.html">\n' +
            '               <img src="assets/logo-the-gallery-2.jpg" alt="logo" class="w-100 rounded-2">\n' +
            '           </a>\n' +
            '        </div>\n' +
            '        <div class="p-4">\n' +
            '               <button type="button" class="btn btn btn-outline-light" onclick="logout()"><i class="fa-solid fa-right-from-bracket fa-lg"></i> Logout</button>\n' +
            '        </div>\n' +
            '    </div>'
    }
}

function navbarComponent(){
    $(NAVBAR).append(navbarTemplate());
}
