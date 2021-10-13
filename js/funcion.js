
alert("Bienvenido al ahorcado");

var palabra = document.getElementById("palabra");
let letra= document.getElementById("letra");
let aciertos= document.getElementById("aciertos");
let fallos= document.getElementById("fallos");
var guiones;



palabra.addEventListener("blur", creaGuiones,true);
letra.addEventListener("keyup",buscaCarater,true);

function creaGuiones(){
//alert(palabra.value);

    guiones=palabra.value;
    guiones= guiones.replace(/./g,"-");
    alert(guiones);
    aciertos.value=guiones;
   

}

function buscaCarater(){
    //convierte los caracteres a mayusculas.
    var caracterbuscar=letra.value.toUpperCase();
    console.log(caracterbuscar);
    var posicion=palabra.value.toUpperCase().indexOf(caracterbuscar);
    console.log(posicion);
    var es_acierto=false;

    if(letra.value==""){
        return
    }
    
    //si la posición es mayor a -1 la letra está en la palabra, si no se sale. 
    while(posicion>-1){
        guiones=guiones.substring(0,posicion) + caracterbuscar + guiones.substring
        (posicion+1, guiones.length);

        aciertos.value=guiones;

        posicion=palabra.value.toUpperCase().indexOf(caracterbuscar,posicion + 1);
        es_acierto=true;
        
    }
    if(!es_acierto){
        fallos.value=fallos.value+caracterbuscar+" - ";
    }
    
    if(palabra.value.toUpperCase()==aciertos.value){
        alert("Has adivinado la palabra: " + palabra.value);
    }
}


