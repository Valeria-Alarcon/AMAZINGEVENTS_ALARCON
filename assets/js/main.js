
const urlData = "https://mindhub-xj03.onrender.com/api/amazing"

let buscador = ''
let checkboxes =''

async function ejecutar(){
    data = await getBaseDeDatos(urlData);
    
    card(data.events, 'contCard');


    crearCategorias (filtrarCategorias(data.events), `contenedorCategoria`)
    
    buscador = document.getElementById ('buscar');
    checkboxes = document.querySelectorAll (".check")
    
    checkboxes.forEach (ch => {
        ch.addEventListener("change", () => {
            filtrar(data.events,'contCard')
        })
    })
    
    buscador.addEventListener('input', () => {
        filtrar(data.events,'contCard')
    })
}

ejecutar()
