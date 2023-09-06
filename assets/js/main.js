

card(data.events, 'contCard');


crearCategorias (categorias, `contenedorCategoria`)

let buscador = document.getElementById ('buscar');
let checkboxes = document.querySelectorAll (".check")

checkboxes.forEach (ch => {
    ch.addEventListener("change", () => {
        filtrar(data.events, 'contCard')
    })
})

buscador.addEventListener('input', () => {
    filtrar(data.events, 'contCard')
})
