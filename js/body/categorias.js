$(window).on("load", function() {
    var ctg = $("body")[0].children[4]
    var ctg2 = $(ctg)[0].children[1]

    $(ctg2).append(
        `
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" href="">
                <div class="cat-item d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="img/ace.jpg" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>Acessórios</h6>
                        <small class="text-body">08 Produtos</small>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" href="">
                <div class="cat-item img-zoom d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="img/bds.jpg" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>BDSM</h6>
                        <small class="text-body">03 Produtos</small>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" href="">
                <div class="cat-item img-zoom d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="img/brin.jpg" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>Brinquedos</h6>
                        <small class="text-body">02 Produtos</small>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" href="">
                <div class="cat-item img-zoom d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="img/cat-4.jpg" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>Cósmeticos</h6>
                        <small class="text-body">11 Produtos</small>
                    </div>
                </div>
            </a>
        </div>
        `
    )
})
