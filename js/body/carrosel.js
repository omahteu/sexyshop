var publis = {
    1: ['linha infantil', 'toda linha infantil com 15% de desconto', 'aproveite'],
    2: ['cosméticos', 'toda linha de cosméticos faciais com 5% de desconto', 'aproveite'],
    3: ['nutrição', 'toda linha verde com 20% de desconto', 'aproveite']
}

$(window).on("load", function() {
    var body = $('body')[0].children[2]
    var body2 = $(body)[0].children[0].children[0]

    $(body2).append(
        `
        <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item position-relative active" style="height: 430px;">
                    <img class="position-absolute w-100 h-100" src="img/vib.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 700px;">
                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown fpi">Vibradores</h1>
                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn fpi_g">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp fpi_g" href="#">quero agora</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item position-relative" style="height: 430px;">
                    <img class="position-absolute w-100 h-100" src="img/mas.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 700px;">
                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown fpi">Mastubadores</h1>
                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn fpi_g">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp fpi_g" href="#">quero agora</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item position-relative" style="height: 430px;">
                    <img class="position-absolute w-100 h-100" src="img/ana.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 700px;">
                            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown fpi">Anal</h1>
                            <p class="mx-md-5 px-5 animate__animated animate__bounceIn fpi_g">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                            <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp fpi_g" href="#">quero agora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )

})
