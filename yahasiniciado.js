async function modificarPerfil(){
    const url = 'http://localhost:3001/api/usuarios'+"16";
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;
  const descripcion = document.getElementById("descripcion").value;
  const numeroTelefono = document.getElementById("numeroTelefono").value;
  const direccion = document.getElementById("direccion").value;
  //const fotousuario = document.getElementById("img1").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
  const data = {"nombre": nombre,
                "apellido": apellido,
                "tipoUsuario":tipoUsuario,  
                "descripcion":descripcion ,
                "numeroTelefono":numeroTelefono,
                "fechaNacimiento": fechaNacimiento,
                "direccion": direccion,
                "codigoPostal": codigoPostal
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
export default ModificarPerfil