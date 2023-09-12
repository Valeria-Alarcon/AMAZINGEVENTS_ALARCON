const urlData = "https://mindhub-xj03.onrender.com/api/amazing"
let buscador = ''
let checkboxes =''

async function ejecutar(){
    data = await getBaseDeDatos(urlData);
    
    crearCategorias (filtrarCategorias(data.events), `contenedorCategoria`)
card(filtrarFecha('pasado',data.currentDate,data.events), 'contCard');

buscador = document.getElementById ('buscar');
checkboxes = document.querySelectorAll (".check")

checkboxes.forEach (ch => {
    ch.addEventListener("change", () => {
        filtrar(filtrarFecha('pasado',data.currentDate,data.events), 'contCard')
    })
})

buscador.addEventListener('input', () => {
    filtrar(filtrarFecha('pasado',data.currentDate,data.events), 'contCard')
})

}

ejecutar()



