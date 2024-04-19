const http=require('http');
//Pasos para el uso de NODE JS
//Paso 1. Instalacion de Node.js
//Paso 2. Creacion de un proyecto de Node.js
// Ejecutar el comando para inicializar un nuevo proyecto de Node.js : npm init
//Paso 3. Crear y ejecutar un archivo JAVASCRIPT
//console.log('Hola bienvenidos a NODE JS');
//Paso 4. Ejecutar el archivo Javascript con Node.js
// en la terminal en visual studio code ejecutamos el comando node nombrearchivo.js

//EJERCICIO 1. CREAR UN SERVIDRO WEB SIMPLE
//PASOS PARA CREAR UN SERVIDOR WEB
//PASO 1. IMPORTAR EL MODULO HTTP DE NODE 

//Paso 2. FUNCION PARA MANEJAR LAS SOLICUTDES HTTP
const solicitudes=(peticion,respuesta)=>{
    respuesta.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    respuesta.end("Pagina funcionando correctamente en el servidor de node");
};


//Paso 3. Crear el servidor
const servidor=http.createServer(solicitudes);

//Paso 4. Creacion del puerto y host del servidor
const host='localhost';
const puerto=3000;

//Paso 5. Iniciar Servidor
servidor.listen(3000,()=>{
    console.log(`Servidor activo http://localhost:${puerto}`)
});
