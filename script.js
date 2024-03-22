//TRABAJO CON DOM
//por id
var elemento=document.getElementById("Titulo");
elemento.textContent="Contenido fue cambiado por el DOM";
//por clases
var elementoClase=document.getElementsByClassName("TituloClase");
//Recorrido de las clases con el nombre establecido
for(var i=0;i<elementoClase.length; i++){
    elementoClase[i].textContent="CONTENIDO MODIFICADO POR EL DOM - EN LAS CLASES";
}

//Eventos
var eventoBoton=document.getElementById("boton");
eventoBoton.addEventListener("click", function(){
    alert("Este es un evento del click del boton");
    cambioImagen();
   
});

var botonTamaño=document.getElementById("btnTamaño");
botonTamaño.addEventListener("click", function(){
    cambioTamaño();
})

//POR ID OTROS ATRIBUTOS
function cambioImagen(){
    var imagen=document.getElementById("imagen");
    imagen.src="https://i.ytimg.com/vi/5fb2aPlgoys/maxresdefault.jpg"
}

function cambioTamaño(){
    var imagenTamaño=document.getElementById("imagen");
    imagenTamaño.style.width="500px";
    imagenTamaño.style.height="300px";
}



