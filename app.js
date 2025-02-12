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
   
}

