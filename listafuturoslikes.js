let id = 3
let etiqueta1id = "";
let etiqueta2id = "";
let etiqueta3id = "";
let etiqueta4id = "";
let etiqueta5id = "";
let etiqueta6id = "";
let etiqueta7id = "";
let etiqueta8id = "";
let prioridades = [];
let tipoid = "";
let jsonfinal = [];

async function fetchFuturosLikesJSON() {
    const response = await fetch('http://localhost:3001/api/futuroslikes/' + id);
    const jsonResponse = await response.json();
    return jsonResponse;
}
async function fetchInfoIdJSON() {
    const response = await fetch('http://localhost:3001/api/usuarios/' + id);
    const jsonResponse = await response.json();
    return jsonResponse;
}
const encontrarPrioridad = function () {
    fetchInfoIdJSON().then(jsonid => {
        
        tipoid = jsonid.data.tipoUsuario;
        etiqueta1id = jsonid.data.etiquetaPersona1;
        etiqueta2id = jsonid.data.etiquetaPersona2;
        etiqueta3id = jsonid.data.etiquetaPersona3;
        etiqueta4id = jsonid.data.etiquetaMascota1;
        etiqueta5id = jsonid.data.etiquetaMascota2;
        etiqueta6id = jsonid.data.etiquetaMascota3;
        etiqueta7id = jsonid.data.etiquetaMascota4;
        etiqueta8id = jsonid.data.etiquetaMascota5;
        console.log(tipoid)
    })
        .then(fetchFuturosLikesJSON().then(json => {
            const result = JSON.stringify(json.data)
            var as = JSON.parse(result)

            for (const jsonElement of json.data) {

                let prioridad = 0;
                if (tipoid == "persona") {
                    // console.log(etiqueta4id)
                    // console.log(jsonElement.etiquetaMascota1)
                    // console.log(etiqueta5id)
                    // console.log(jsonElement.etiquetaMascota2)
                    // console.log(etiqueta6id)
                    // console.log(jsonElement.etiquetaMascota3)
                    // console.log(etiqueta7id)
                    // console.log(jsonElement.etiquetaMascota4)
                    // console.log(etiqueta8id)
                    // console.log(jsonElement.etiquetaMascota5)
                    if (etiqueta4id == jsonElement.etiquetaMascota1) {
                        prioridad++

                    }
                    else if (etiqueta5id == jsonElement.etiquetaMascota2) {
                        prioridad++
                    }
                    else if (etiqueta6id == jsonElement.etiquetaMascota3) {
                        prioridad++
                    }
                    else if (etiqueta7id == jsonElement.etiquetaMascota4) {
                        prioridad++
                    }
                    else if (etiqueta8id == jsonElement.etiquetaMascota5) {
                        prioridad++
                    }
                    prioridades.push(prioridad)


                }
                if (tipoid == "gato" | tipoid == "perro") {

                    if (etiqueta1id == jsonElement.etiquetaPersona1) {
                        prioridad++

                    }
                    if (etiqueta2id == jsonElement.etiquetaPersona2) {
                        prioridad++

                    }
                    if (etiqueta3id == jsonElement.etiquetaPersona3) {
                        prioridad++

                    }

                    prioridades.push(prioridad)






                }





            }
            console.log(prioridades);
            var numArray = new Float64Array(prioridades);
            var resultado = Array.from(Array(numArray.length).keys())
                .sort((a, b) => numArray[a] < numArray[b] ? -1 : (numArray[b] < numArray[a]) | 0)
            console.log(resultado)
            console.log(as)
            for (const i in resultado){
                    jsonfinal.push(as[resultado[i]])
            }
            console.log(jsonfinal)
            var myJsonString = JSON.stringify(jsonfinal);
            console.log(myJsonString)
            

        }))

};
export default encontrarPrioridad;