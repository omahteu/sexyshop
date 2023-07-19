var publis = {
    1: ['linha infantil', 'toda linha infantil com 15% de desconto', 'aproveite'],
    2: ['cosméticos', 'toda linha de cosméticos faciais com 5% de desconto', 'aproveite'],
    3: ['nutrição', 'toda linha verde com 20% de desconto', 'aproveite']
}

$(window).on("load", function() {
    var body = $('body')[0].children[2]
    var body2 = $(body)[0].children[0].children[1]

    $(body2).append(
        `
        <div class="product-offer mb-30" style="height: 200px;">
            <img class="img-fluid" src="img/bdsm.jpg" alt="">
            <div class="offer-text">
                <!-- <h6 class="text-white">Save 20%</h6> -->
                <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown fpi">Sado</h1>
                <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp fpi_g" href="#">quero agora</a>
            </div>
        </div>
        <div class="product-offer mb-30" style="height: 200px;">
            <img class="img-fluid" src="img/fan.jpg" alt="">
            <div class="offer-text">
            <!-- <h6 class="text-white text-uppercase">Save 20%</h6> -->
            <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown fpi">Fantasias</h1>
                <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp fpi_g" href="#">quero agora</a>
            </div>
        </div>
        `
    )

})
