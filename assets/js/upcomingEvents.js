crearCategorias (categorias, `contenedorCategoria`)

card(filtrarFecha('futuro'), 'contCard');

let buscador = document.getElementById ('buscar');
let checkboxes = document.querySelectorAll (".check")

checkboxes.forEach (ch => {
    ch.addEventListener("change", () => {
        filtrar(filtrarFecha('futuro'), 'contCard')
    })
})

buscador.addEventListener('input', () => {
    filtrar(filtrarFecha('futuro'), 'contCard')
})