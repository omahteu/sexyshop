$(window).on("load", function() {
    var tags = $("body")[0].children[3]
    var tags2 = $(tags)[0].children[0]
    
    $(tags2).append(
        `
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center bg-light mb-4" style="padding: 30px;">
                <h1 class="fa fa-check cor_tag_meio m-0 mr-3"></h1>
                <h5 class="font-weight-semi-bold fpi_n">DESCRIÇÃO</h5>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center bg-light mb-4" style="padding: 30px;">
                <h1 class="fa fa-shipping-fast cor_tag_meio m-0 mr-2"></h1>
                <h5 class="font-weight-semi-bold fpi_n">ENTREGA RÁPIDA</h5>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center bg-light mb-4" style="padding: 30px;">
                <h1 class="fas fa-exchange-alt cor_tag_meio m-0 mr-3"></h1>
                <h5 class="font-weight-semi-bold fpi_n">REEMBOLSO</h5>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center bg-light mb-4" style="padding: 30px;">
                <h1 class="fa fa-phone-volume cor_tag_meio m-0 mr-3"></h1>
                <h5 class="font-weight-semi-bold fpi_n">ATENDIMENTO</h5>
            </div>
        </div>
        `
    )
})
