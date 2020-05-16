//var     selecciona por un id o clase
btnSend = document.querySelector('#btnEnviar');
//var     Creador de eventos      Funcion
btnSend.addEventListener("click", ()=> {
  var elInput = document.querySelector('#inpCl').value;
  //imprimo por consola para asegurarme que todo esta bien
 // console.log(elInput);
  
  //condicion que se encarga de que recisar que la variable contenga texto
  if(elInput === ""){
     alert("Deves ingresar un color")
     }else{
    cambiarColor(elInput);
  }
  
});

//funcion que recibe datos
function cambiarColor(x){
  //se encarga de recibir la var x, en este caso la variable del color
  document.body.style.backgroundColor = x;
}