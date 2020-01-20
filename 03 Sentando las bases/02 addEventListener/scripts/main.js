'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const mensaje = document.querySelector('.mensaje-error');
const inputSolucion = document.querySelector('#input-solucion');
const comentarioUsuario = document.querySelector('#comentario');
const enviado = document.querySelector('.enviado');
const cursor = document.getElementById('#cursor');
let resolucion = document.querySelector('');

function animarCursor(event){
cursor.onmousemove='';
}

function recibirNombre(event) {
  let comentario = document.createElement('p');
  event.preventDefault();
  console.log(event);
  enviado.textContent = 'Su comentario se ha enviado con éxito';
  enviado.style.color = 'purple';
  comentario.textContent = 'Me ayudó:'+ ' ' + inputNombre.value + '  ' + 'Solución:' + ' ' + inputSolucion.value;
  comentarioUsuario.appendChild(comentario);
  setTimeout(function(){ enviado.textContent=null; 
    
  }, timeout);
   inputNombre.value = '';
   inputSolucion.value = '';

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

function pantalla(event){
 if(resolucion.screen.width <300 || resolucion.screen.heith <400 ){
   resolucion.textContent='la pantalla es demasiado chica';

 }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
cursor.addEventListener('mousemove', animarCursor);
resolucion.addEventListener('', pantalla);