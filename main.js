// Ejercicio Nº1:
// Tomar TODOS los elementos <p> de la página y cambiar el color de fondo
// (crear varios elementos)
// Ejercicio Nº2:
// Contar la cantidad de palabras dentro de los elementos <p> e insertar al principio de la página la cantidad
// Ejercicio Nº3:
// Crear un anchor que el link sea https://www.google.com.ar/
// al clickearlo no permitir que salga de la página en la que estas y muestre la dirección en un elemento del html
// Ejercicio Nº4:
// Crear un elemento <img> que contenga una imagen a elección


const p = document.querySelectorAll('p');
const contenido = document.querySelector('.content');
const a = document.querySelector('a');

let cont = 0;

p.forEach(element => {
    cont++;
    element.style.background = 'red';
});

console.log(cont);
contenido.innerHTML = `Palabras totales: ${cont}`;

a.addEventListener('click', e=>{

    e.preventDefault();
    document.body.insertAdjacentElement("beforebegin",e.target.href)
});

let imagen = document.createElement("img");
imagen.src = '/mandarina.jpg';

document.querySelector('.container').appendChild(imagen);