var nome_categorias = ["Camisas", "Calças", "Saias", "Vestidos"]

$(window).on("load", function() {
    var navbar = $("#navbar-vertical")[0].children[0]
    var navbar2 = $(navbar).attr("class")

    nome_categorias.forEach(e => {
        $(navbar).append(
            `
            <a href="" class="nav-item nav-link">${e}</a>

            `
        )
    });

})
