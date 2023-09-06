const contenedorTarjeta = document.getElementById('details')

const querySearch = document.location.search;
const id = new URLSearchParams(querySearch).get('id');

const tarjEven = data.events.find(evento => evento._id === id)

crearDetail (tarjEven, contenedorTarjeta)