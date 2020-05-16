let h1 = document.querySelector('#h1');
let div = document.querySelector('#div');
let boton = document.querySelector('#boton');

boton.addEventListener('click', ()=>{
    h1.innerHTML='Haz hecho doble click';
    h1.style.color="red";
    h1.style.fontStyle="italic";
    div.remove();
});