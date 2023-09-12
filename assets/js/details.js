const urlData = "https://mindhub-xj03.onrender.com/api/amazing";

async function ejecutar(){
    data = await getBaseDeDatos(urlData);
    const contenedorTarjeta = document.getElementById('details')
    const querySearch = document.location.search;
    const id = new URLSearchParams(querySearch).get('id');
    const tarjEven = data.events.find(evento => evento._id == id)
    crearDetail (tarjEven, contenedorTarjeta)

}

ejecutar ()