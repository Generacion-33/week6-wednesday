//Eventos

/** Un evento es una señal de que algo ha ocurrido. Todos los nodos, o los elementos (que integran el DOM) GENERERAN-> SEÑALES (EVENTOS) */


//readyState

console.log(document.readyState);


//readyState -> nos iforma el estado de nuesto DOM (DOCUMENTO)

/*
*"loading" - > El documento se esta cargando
*"interactive" ->  el documento se ha leido por completo, cargo en su gran mayoria, pero los recursos externos(imagens, videso, hojas de etilos) no han sido cargados
*"complete" -> cuando se leyo por completo el documento y se cargaron TODOS los recursos. 
*/



/**
 * UNA PAGINA WEB TIENE 3 EVENTOS SUPER IMPORTANTES:
 * 
 * 1-DOMContentLoaded
 * 2-load
 * 3-Beforeunload/unload
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log(document.readyState); //interactive
})


window.addEventListener('load', function () {
  console.log(this.document.readyState);
  // this.window.alert('complete')
})


/**
 * Atributos : HTML
 * Propiedades DOM
 * Metodos: addEventListener
 */

//1) Atributos : HTML  on<evento>

function atributo() {
  window.alert('handler ejecutado desde un atributo')
}


// 2) Propiedades DOM

const propiedad = document.getElementById('propiedad');

propiedad.onclick = function () {
  window.alert('Handler ejecutado desde un boton por id')
}


//❌Erores comunes 👌


const btn = document.querySelector('#btn')

function controlador() {
  alert('Analizando errores que podemos cometer...')
}

// btn.onclick = controlador()  ❌
btn.onclick = controlador //✅


//3)- * Metodos: addEventListener

//element.addEventListener('evento', function(){
//codigo
//})

const btn2 = document.getElementById('btn2');
console.log(btn2);

btn2.addEventListener('click', function () {
  window.alert('Handler ejecutado por addEventListener')
})


// Obejto del evento

document.addEventListener('click', function (e) { //event - e
  console.log(e);
  console.log(e.type);
  console.log(e.currentTarget);
  console.log(e.target);
})






