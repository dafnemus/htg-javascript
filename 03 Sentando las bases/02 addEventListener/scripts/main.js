'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const mensaje = document.querySelector('.mensaje-error');
const inputSolucion = document.querySelector('#input-solucion');
const comentarioUsuario = document.querySelector('#comentario');


function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
   formulario.textContent = 'Su comentario se ha enviado con éxito';
   formulario.style.color = 'purple';
  comentarioUsuario.textContent = inputNombre.value;
  comentarioUsuario.textContent = inputSolucion.value;

}

function interceptarNombre(event) {
  
  if(event.target.value.length<4 || event.target.value.length>50){
    console.log('El nombre debe ser entre 5 y 50 caracteres')
    mensaje.textContent = ' El nombre debe contener entre 5 y 50 caracteres';
    mensaje.style.color = 'red';
  }else{
  mensaje.textContent='';
  }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
mensaje.addEventListener('span', interceptarNombre);
inputSolucion.addEventListener('input', inputSolucion);
