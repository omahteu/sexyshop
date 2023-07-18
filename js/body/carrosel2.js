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
                <h6 class="text-white text-uppercase">Save 20%</h6>
                <h3 class="text-white mb-3">Special Offer</h3>
                <a href="" class="btn btn-primary">Shop Now</a>
            </div>
        </div>
        <div class="product-offer mb-30" style="height: 200px;">
            <img class="img-fluid" src="img/fan.jpg" alt="">
            <div class="offer-text">
                <h6 class="text-white text-uppercase">Save 20%</h6>
                <h3 class="text-white mb-3">Special Offer</h3>
                <a href="" class="btn btn-primary">Shop Now</a>
            </div>
        </div>
        `
    )

})
