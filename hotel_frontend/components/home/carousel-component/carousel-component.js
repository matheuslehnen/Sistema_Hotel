function carouselTemplate(){
    return '<div id="carousel-component" class="carousel slide w-75" data-bs-ride="carousel">\n' +
        '        <div class="carousel-indicators">\n' +
        '            <button type="button" data-bs-target="#carousel-component" data-bs-slide-to="0" class="active"\n' +
        '                    aria-current="true" aria-label="Slide 1"></button>\n' +
        '            <button type="button" data-bs-target="#carousel-component" data-bs-slide-to="1"\n' +
        '                    aria-label="Slide 2"></button>\n' +
        '            <button type="button" data-bs-target="#carousel-component" data-bs-slide-to="2"\n' +
        '                    aria-label="Slide 3"></button>\n' +
        '            <button type="button" data-bs-target="#carousel-component" data-bs-slide-to="3"\n' +
        '                    aria-label="Slide 4"></button>\n' +
        '        </div>\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="carousel-item active">\n' +
        '                <img src="assets/bg-img-1.jpg" class="d-block w-100" alt="Foto da entrada do Hostel">\n' +
        '            </div>\n' +
        '            <div img="carousel-item">\n' +
        '                <assets src="assets/bg-img-2.jpg" class="d-block w-100" alt="Foto da lateral do Hostel">\n' +
        '            </div>\n' +
        '            <div class="carousel-item">\n' +
        '                <img src="assets/bg-img-3.jpg" class="d-block w-100" alt="Foto dos fundos do Hostel">\n' +
        '            </div>\n' +
        '            <div class="carousel-item">\n' +
        '                <img src="assets/img-quarto-2.jpg" class="d-block w-100" alt="Foto do quarto casal 1">\n' +
        '            </div>\n' +
        '            <div class="carousel-item">\n' +
        '                <img src="assets/img-quarto-3.jpg" class="d-block w-100" alt="Foto do quarto casal 2">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-component"\n' +
        '                data-bs-slide="prev">\n' +
        '            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
        '            <span class="visually-hidden">Anterior</span>\n' +
        '        </button>\n' +
        '        <button class="carousel-control-next" type="button" data-bs-target="#carousel-component"\n' +
        '                data-bs-slide="next">\n' +
        '            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
        '            <span class="visually-hidden">Próximo</span>\n' +
        '        </button>\n' +
        '    </div>'
}

function carouselComponent(){
    removeTemplateAnterior();
    $(CONTAINER).append(carouselTemplate());
}
