console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')

const comentarios = document.querySelector('span');
console.log(comentarios)
 comentarios.classList.add('favorito');


 const separadorSeccion = document.querySelectorAll('hr');
 for(i=0; i<separadorSeccion.length; i++){
     separadorSeccion[i].classList.add('separador');
 }
     
//Ejercicio 4
const caracteres = document.querySelectorAll('.comment--text');
caracteres[0].classList.add('text');

//ejercicio 3
const menor50 = document.querySelectorAll('.comment--text');
for(i = 0; i < menor50.length; i++){
    if(menor50[i].textContent.length <150){
    menor50[i].classList.add('text');
   }
}


