'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
}

function interceptarNombre(event) {
  
  if(event.target.value.length<4 || event.target.value.length>50){
    console.log('El nombre debe ser entre 5 y 50 caracteres')
  }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
