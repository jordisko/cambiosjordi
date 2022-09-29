let id
const modificarPerfil= async function (){

    const url = 'http://localhost:3001/api/usuarios'+id;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;
  const descripcion = document.getElementById("descripcion").value;
  const numeroTelefono = document.getElementById("numeroTelefono").value;
  const direccion = document.getElementById("direccion").value;
  const fotoPerfil = document.getElementById("img1").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const quebusco = document.getElementById("quebusco").value;

  const data = {"nombre": nombre,
                "apellido": apellido,
                "tipoUsuario":tipoUsuario,  
                "descripcion":descripcion ,
                "numeroTelefono":numeroTelefono,
                "fotoPerfil":fotoPerfil,
                "fechaNacimiento": fechaNacimiento,
                "direccion": direccion,
                "codigoPostal": codigoPostal,
                "quebusco" :quebusco
                    }
                console.log(data);
    fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
  console.log(JSON.stringify(data));
}
export default modificarPerfil