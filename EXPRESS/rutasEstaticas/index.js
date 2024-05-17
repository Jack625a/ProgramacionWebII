//Enrutamiento Estatico
//Paso1. Importar Express
const express=require('express');
const path=require('path'); //Abrir archivos estaticos

//Paso2. Creacion del servidor
const servidor=express();

//Paso3. Configurarcion de los archivos estaticos
servidor.use(express.static(path.join(__dirname,'public')));

//Paso4. Enrutamientos (Rutas del servidor)
//RUTA PRINCIPAL
servidor.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//Ruta Productos
servidor.get('/productos',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','productos.html'));
});
//Ruta Carrito
servidor.get('/productos/:nombre',(req,res)=>{
    const {nombre}=req.params
    res.sendFile(path.join(__dirname,'public','carrito.html'));
});



//Paso5. Crear el puerto y el host del servidor
const puerto=3000;
const host='localhost';

//Paso6. Inicializar el servidor
servidor.listen(puerto,host,()=>{
    console.log(`Servidor Activo http://${host}:${puerto}`);
});


