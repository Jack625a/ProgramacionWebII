//Servidor con base de datos locales
//Paso 1. Importar los modulos a utilizar
const http=require('http');

//Paso 2. Base de datos Local
const productos=[
    {
        id:1,
        nombre:'Producto 1',
        precio:125
    },
    {
        id:2,
        nombre:'Producto 2',
        precio:250
    },
    {
        id:3,
        nombre:'Producto 3',
        precio:345
    },
    {
        id:4,
        nombre:'Producto 4',
        precio:450
    },
    {
        id:5,
        nombre:'Producto 5',
        precio:650
    }
];

//Paso 3. Crear el servidor HTTP
const servidor=http.createServer((peticion,respuesta)=>{
    //Configuracion del encabezado de la respuesta
    respuesta.writeHead(200, {
        'Content-Type':'application/json'
    });

    //Convertir la lista de productos a JSON y realizar el envio como respuesta
    respuesta.end(JSON.stringify(productos));
});

//Paso 4. Definir el puerto y el host del servidor
const puerto=3000;
//const host='localhost';

//Paso 5. Inicializar el servidor
servidor.listen(puerto, ()=>{
    console.log(`Servidor activo http://localhost:${puerto}`);
});



