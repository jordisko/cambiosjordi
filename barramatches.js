let id =1
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

})}

mostrarBarraMatches()