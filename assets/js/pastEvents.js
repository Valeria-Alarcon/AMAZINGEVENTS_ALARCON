crearCategorias (categorias, `contenedorCategoria`)
card(filtrarFecha('pasado'), 'contCard');

let buscador = document.getElementById ('buscar');
let checkboxes = document.querySelectorAll (".check")

checkboxes.forEach (ch => {
    ch.addEventListener("change", () => {
        filtrar(filtrarFecha('pasado'), 'contCard')
    })
})

buscador.addEventListener('input', () => {
    filtrar(filtrarFecha('pasado'), 'contCard')
})
