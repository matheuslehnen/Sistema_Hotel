function footerTemplate(){
    return '<section class="d-flex justify-content-between p-4 text-white bg-dark">\n' +
        '        <div class="me-5">\n' +
        '            <span>Acompanhe-nos nas Redes Sociais:</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <a href="https://www.facebook.com/thegalleryfloripa/" class="text-white me-4" target="_blank">\n' +
        '                <i class="fab fa-facebook-f"></i>\n' +
        '            </a>\n' +
        '            <a href="https://www.instagram.com/thegalleryfloripa/?hl=en" class="text-white me-4" target="_blank">\n' +
        '                <i class="fab fa-instagram"></i>\n' +
        '            </a>\n' +
        '        </div>\n' +
        '    </section>\n' +
        '    <section>\n' +
        '        <div class="container text-center text-md-start mt-5">\n' +
        '            <div class="row mt-3">\n' +
        '                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">\n' +
        '                    <h6 class="text-uppercase fw-bold">The Gallery Hostel</h6>\n' +
        '                    <hr class="mb-4 mt-0 d-inline-block mx-auto"/>\n' +
        '                    <p>\n' +
        '                        Todas as unidades do albergue possuem área de estar. O Gallery Floripa oferece alguns quartos\n' +
        '                        com vista do jardim, e os quartos estão equipados com banheiro privativo e guarda-roupa. Os\n' +
        '                        quartos incluem roupa de cama.\n' +
        '                    </p>\n' +
        '                </div>\n' +
        '                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">\n' +
        '                    <h6 class="text-uppercase fw-bold">Reservas </h6>\n' +
        '                    <hr class="mb-4 mt-0 d-inline-block mx-auto"/>\n' +
        '                    <p>\n' +
        '                        <a href="#!" class="text-dark">\n' +
        '                            <i class="fa-sharp fa-solid fa-calendar-days"></i>\n' +
        '                            Reservas\n' +
        '                        </a>\n' +
        '                    </p>\n' +
        '                    <p>\n' +
        '                        <a href="https://www.booking.com/hotel/br/the-gallery-floripa.pt-br.html" class="text-dark">\n' +
        '                            <i class="fa-solid fa-b"></i>\n' +
        '                            Booking\n' +
        '                        </a>\n' +
        '                    </p>\n' +
        '                    <p>\n' +
        '                        <a href="https://www.tripadvisor.com.br/Hotel_Review-g303576-d12132449-Reviews-The_Gallery_Floripa-Florianopolis_State_of_Santa_Catarina.html" class="text-dark">\n' +
        '                            <i class="fa-sharp fa-solid fa-earth-americas"></i>\n' +
        '                            Trip Advisor\n' +
        '                        </a>\n' +
        '                    </p>\n' +
        '                    <p>\n' +
        '                        <a href="https://www.airbnb.com/" class="text-dark">\n' +
        '                            <i class="fa-brands fa-airbnb mr-3"></i>\n' +
        '                            Airbnb\n' +
        '                        </a>\n' +
        '                    </p>\n' +
        '                </div>\n' +
        '                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">\n' +
        '                    <h6 class="text-uppercase fw-bold">Contato</h6>\n' +
        '                    <hr class="mb-4 mt-0 d-inline-block mx-auto"/>\n' +
        '                    <p><i class="fas fa-home mr-3"></i> Rua Euríco Hosterno, 100 - Santa Monica, Florianópolis - SC, 88035-400</p>\n' +
        '                    <p><i class="fas fa-envelope mr-3"></i> info@thegalleryhostel.com</p>\n' +
        '                    <p><i class="fas fa-phone mr-3"></i> + 55 (48) 99973-4268</p>\n' +
        '                    <p><i class="fas fa-print mr-3"></i> + 55 (48) 99973-4268</p>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </section>\n' +
        '    <div id="copyright-div" class="text-center p-3" >\n' +
        '        © 2023 Copyright:\n' +
        '        <a class="text-dark" href="https://github.com/matheuslehnen" target="_blank">Matheus Lehnen</a>\n' +
        '    </div>'
}

function footerComponent(){
    $(FOOTER).append(footerTemplate());
}
