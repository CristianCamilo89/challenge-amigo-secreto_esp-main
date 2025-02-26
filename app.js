// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.
let amigos = [];


function agregarAmigo()
{
    let nombre = document.getElementById("amigo").value;
    let input = document.getElementById("amigo"); // Creamos variable input para limpiar caja de texto
    if(nombre !== ""){ // Validamos si en el campo de texto se ingreso un dato
        amigos.push(nombre); // Ingresamos el valor en la última posición de la lista
        console.log (amigos);
        }else{
               alert("Por favor, inserte un nombre");// Se Genera Alerta solicitando ingresar el nombre
    }
   input.value = ""; // limpiamos caja de Texto
   mostrarAmigo();
}

function mostrarAmigo()
{
    let nombreAmigo = document.getElementById("listaAmigos"); // Obtenemos el valor que hay en la lista
    nombreAmigo.innerHTML = ""; // limpiamos la lista antes de actualizar para asegurarnos que no haya duplicados
    for (let i=0; i < amigos.length; i++)
    {
        let lista = document.createElement("li"); // creamos el elemento li 
        lista.textContent = amigos[i];//Estamos agregando el texto que se encuentra dentro de la lista amigos en su parte i
        nombreAmigo.appendChild(lista);//Agregamos los elementos li ya con su contenido
    }
}

function sortearAmigo()
{
    if (amigos.length == 0)
    {
        agregarAmigo();
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //alert(`Nombre seleccionado ${amigos[indiceAleatorio]}`);
        let nombreAleatorio = amigos[indiceAleatorio];
        let resultadoAmigo = document.getElementById ("resultado")
        resultadoAmigo.innerHTML = `El amigo sorteado es: ${nombreAleatorio}`;
    }

}