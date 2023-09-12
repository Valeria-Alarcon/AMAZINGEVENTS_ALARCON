const urlData = "https://mindhub-xj03.onrender.com/api/amazing"

function calcularAsistencia(eventos){
    let asistencia = [];
    eventos.forEach(evento => {
        if(evento.assistance != null){
            let e = {};
            e.name = evento.name;
            e.ganancias = evento.assistance * evento.price;
            e.porcentajeAsistencia = (evento.assistance / evento.capacity)*100;
            e.assistance = evento.assistance;
            e.capacity = evento.capacity;
            e.date = evento.date;
            e.category = evento.category;
            asistencia.push(e)
        }
        else {
            let e = {};
            e.name = evento.name;
            e.ganancias = evento.estimate * evento.price;
            e.porcentajeAsistencia = (evento.assistance / evento.capacity)*100;
            e.assistance = evento.estimate;
            e.capacity = evento.capacity;
            e.date = evento.date;
            e.category = evento.category;
            asistencia.push(e)
        }       
    });
    return asistencia
}

function gananciasEventos(eventos){
    let ePasados = []
    let categorias = filtrarCategorias(eventos);
    categorias.forEach(categoria => {
        let stats = {};
        let gananciasT = 0;
        let asistenciaT = 0;
        let capacidadT = 0;
        eventos.forEach(evento => {
            if(categoria == evento.category){
                gananciasT = gananciasT + evento.ganancias;
                asistenciaT = asistenciaT + evento.assistance;
                capacidadT =  capacidadT + evento.capacity;
            }
        })
        stats.name = categoria;
        stats.ganancias = gananciasT;
        stats.capacidad = capacidadT;
        stats.asistencia = asistenciaT;
        stats.asistenciaP = (asistenciaT / capacidadT)*100
        ePasados.push(stats)
    })
    return ePasados
}


function ordenarMayoraMenor(eventos){
    return eventos.sort((a,b)=> b.porcentajeAsistencia - a.porcentajeAsistencia);
}

function ordenarMayoraMenorCapacidad(eventos){
    console.log(eventos.sort((a,b)=> b.capacity - a.capacity))
    return eventos.sort((a,b)=> b.capacity - a.capacity); 
}

function crearCeldas(eventos,capacidad,idContenedor){
    let html = ''
    for( let i = 0; i < 3; i++){
        html += `<tr>
                    <td>${eventos[i].name}</td>
                    <td>${eventos[eventos.length - (i+1)].name}</td>
                    <td>${capacidad[i].name}</td>
                </tr>` 
    }
    document.getElementById(idContenedor).innerHTML = html;
}

function crearCeldasCategorias(eventos,idContenedor){
    let html = ''
    eventos.forEach(evento => {
        html += `<tr>
                    <td>${evento.name}</td>
                    <td>$ ${evento.ganancias}</td>
                    <td>${Math.trunc(evento.asistenciaP)} % </td>
                </tr>` 
    })
    document.getElementById(idContenedor).innerHTML = html;
}

async function ejecutar(){
    const data = await getBaseDeDatos(urlData);
    const pEventos = calcularAsistencia(data.events);
    console.log(pEventos)
    ordenarMayoraMenor(pEventos);
    crearCeldas(pEventos,ordenarMayoraMenorCapacidad(data.events),"asistencia");
    crearCeldasCategorias(gananciasEventos(filtrarFecha('pasado',data.currentDate,pEventos)),"eventosPasados");
    crearCeldasCategorias(gananciasEventos(filtrarFecha('futuro',data.currentDate,pEventos)),"eventosFuturos");
}

ejecutar()

