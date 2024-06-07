//Configuracion  del servidor
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

//Paso 1. Crear el servidor
const servidor=express();

//Paso 2. Configuracion del envio de solicitudes POST (FORMULARIOS)
servidor.use(bodyParser.urlencoded({extended:true}));

//Paso 3. Configurar los archivos estaticos
servidor.use(express.static(path.join(__dirname,'public')));

//Paso 4. Configuracion de las Rutas
//Ruta Principal
servidor.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//Ruta Contactos
servidor.get('/contactos', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','contactos.html'));
});

//Ruta Productos
servidor.get('/productos', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','productos.html'));
});

//Ruta Servicios
servidor.get('/servicios', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','servicios.html'));
});
//Ruta Servicios
servidor.get('/enviar', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','enviar.html'));
});

//Ruta Enviar - POST
servidor.post('/enviar', (req,res)=>{
    //Crear el cuerpo del formulario
    const {nombre, correo, mensaje}=req.body;
    res.redirect(`/enviar.html?nombre${encodeURIComponent(nombre)}&correo=${encodeURIComponent(correo)}&mensaje=${encodeURIComponent(mensaje)}`);
});


//Paso 5. Configuracion del puerto y host del servidor
const puerto=3000;
const host='localhost';

//Paso 6. Inicializar el servidor
servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});









