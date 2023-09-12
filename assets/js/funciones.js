function card (array, idContenedor){
    let html = ""

    for(let evento of array) {
        html += `<div class="card" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <p>Price $ ${evento.price}</p>
          <a href="./details.html?id=${evento._id}" class="btn btn-primary">Details</a>
        </div>
        </div>`

        document.getElementById(idContenedor).innerHTML = html;
    };
};

function filtrarCategorias(eventos){
    let categorias = []

    eventos.forEach (evento => {
        if (!categorias.includes (evento.category)){
            categorias.push (evento.category)
        }
})
return categorias
}


function crearCategorias (array, idContenedor){
    let html = ""

    for( let categoria of array){
        html += 
        `<div class="form-check form-check-inline">
          <input class="form-check-input check" type="checkbox" id="${categoria}" value="${categoria}">
          <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
        </div>`

        document.getElementById(idContenedor).innerHTML = html;
    };
};

function filtrarFecha (tiempo,currentDate,eventos){
    let fechaActual = currentDate
    if (tiempo == 'pasado') {
        return eventos.filter (e => e.date < fechaActual)
    }
    else if ( tiempo == 'futuro'){
        return eventos.filter (e => e.date > fechaActual)
    }
}

function sinCoincidencias (value){
    let mensajeAmigable = ""
    if (value = true) {
        mensajeAmigable = "<h2>No matches found</h2>"}
    document.getElementById ('contCard').innerHTML = mensajeAmigable
}

function filtrar (eventos,idContenedor){
    let filtrados = [];
    let busqueda = buscador.value;
    if (busqueda.length > 0 ){
        filtrados = eventos.filter (eve => eve.name.toLowerCase().includes(busqueda.toLowerCase()))
    }
    else {
        filtrados = eventos
    }
    let checking = Array.from(checkboxes);
    checking = checking.filter (check => check.checked).map(ch => ch.value)
    if ( checking.length > 0){
        filtrados = filtrados.filter (ch => checking.includes(ch.category))
    }
    if (filtrados.length <= 0){
        sinCoincidencias(true)        
    }
    else {
        sinCoincidencias(false)
    }
    card (filtrados, idContenedor)


}

function crearDetail (evento, idContenedor){
    idContenedor.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${evento.image}" class="img-fluid rounded-start imgTarj" alt="${evento.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <p>Place: ${evento.place}</p>
                <p>Capacity: ${evento.capacity}</p>
                <p>Price: ${evento.price} </p>
                <p>Date: ${evento.date}</p>
                </div>
            </div>
        </div>
    </div>`
}

