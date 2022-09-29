let id =7
const yourUrl =('http://localhost:3001/matches/'+id)
async function fetchByIdJSON() {
    const response = await fetch(yourUrl,{
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'})})
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return (jsonResponse);
}
const mostrarBarraMatches = function (){
  fetchByIdJSON().then(json =>{
    console.log(json)
    var image= document.getElementById('imagenperfil').value 
     image.src = json.fotoUsuario;
    document.getElementById('nombre').value = json.nombreEvento
    document.getElementById('apellido').value = json.nombreEvento
    document.getElementById('tipoUsuario').value = json.nombreEvento
    document.getElementById('desripcion').value = json.nombreEvento
    document.getElementById('numeroTelefono').value = json.nombreEvento
    document.getElementById('direccion').value = json.nombreEvento
    document.getElementById('codigoPostal').value = json.nombreEvento
    document.getElementById('fechaNacimiento').value = json.nombreEvento
    document.getElementById('numeroTelefono').value = json.nombreEvento

})}

mostrarBarraMatches()