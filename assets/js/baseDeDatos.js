async function getBaseDeDatos(urlData){
  const respuesta = await fetch(urlData);
  const data = await respuesta.json()
  return data
}