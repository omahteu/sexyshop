$(window).on("load", function() {
    var end = $("body")[0].children[6]
    var end2 = $(end)[0].children[0].children[1].children[0]
    
    $(end2).append(
        `
        <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">Quick Shop</h5>
            <div class="d-flex flex-column justify-content-start">
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                <a class="text-secondary" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">My Account</h5>
            <div class="d-flex flex-column justify-content-start">
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                <a class="text-secondary" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">Receber Promoções</h5>
            <p>Não perca nenhuma de nossas ofertas.</p>
            <form action="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Seu número">
                    <div class="input-group-append">
                        <button class="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </form>
            <h6 class="text-secondary text-uppercase mt-4 mb-3">Siga-nos</h6>
            <div class="d-flex">
                <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        `
    )
})
