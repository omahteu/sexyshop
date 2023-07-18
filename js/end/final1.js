$(window).on("load", function() {
    var end = $("body")[0].children[6]
    var end2 = $(end)[0].children[0].children[0]
    
    $(end2).append(
        `
        <h5 class="text-secondary text-uppercase mb-4">Horizonte</h5>
        <p class="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Rua Horizonte, 000 - Horizonte</p>
        <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>horizonte@horizonte.com</p>
        <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>(85) 000000000</p>
        `
    )
})
