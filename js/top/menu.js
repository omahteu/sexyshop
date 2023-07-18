var nome_categorias = ['home', 'ofertas', 'marque seu exame']

$(window).on("load", function() {
    var navbar = $("#navbarCollapse")[0].children[0]
    var navbar2 = $(navbar).attr("class")

    nome_categorias.forEach(e => {
        $(navbar).append(
            `
            <a href="index.html" class="nav-item nav-link active">${e}</a>

            `
        )
    });

})
