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
    imagen.src="ima.png"
}

function cambioTamaño(){
    var imagenTamaño=document.getElementById("imagen");
    imagenTamaño.style.width="500px";
    imagenTamaño.style.height="300px";
}



//Evento para modificar el tamaño de una imagen con el input rango
document.addEventListener("DOMContentLoaded", function(){
    const rangoInput=document.getElementById("rangoInput");
    const img=document.getElementById("imagenCambio");


    //Funcion para modificar el tamaño de la imagen
    function modificarTamaño(){
        const nuevoTamaño=rangoInput.value;
        img.style.width=nuevoTamaño+"%"; 
    }
    rangoInput.addEventListener("input",modificarTamaño);
});


//Evento para bloquear mediante el DOM EL click derecho de la pagina
function bloquear(evento){
    //Verificar si se presiono el click derecho del raton
    if(evento.button==2 || evento.which==3){
        //Cancelar el evento
        evento.preventDefault();
    }
}
document.addEventListener("contextmenu",bloquear);


//Evento para bloquear el reproductor
function bloquearVideo(e){
    e.preventDefault();
}

document.addEventListener("play",bloquearVideo, true);


//Evento para activar el reproductor con el scroll
function reproducirVideo(){
    var video=document.getElementById("video");
    video.play();
    window.removeEventListener('scroll',reproducirVideo);
}
window.addEventListener('scroll',reproducirVideo);