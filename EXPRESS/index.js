//Servidor Basico en Express
//Paso 1. Importar el modulo de express
const express=require('express');
//Paso 2. Crear el servidor
const servidor=express();
//Paso 3. Enrutamiento
servidor.get('/login',(req,res)=>{
    res.send('Express JS ACTIVO - Login');
});

servidor.get('/',(req,res)=>{
    res.send('Pagina inicio')
});

servidor.get('/productos/:nombre',(req,res)=>{
    const {nombre}=req.params;
    res.send(`Producto Disponible: ${nombre} `)
});

servidor.get('/pedidos',(req,res)=>{
    res.send('Historial de Pedidos')
});
//Paso 4. Crear puerto y el host del servidor
const puerto=3000;
const host='localhost';
//Paso 5. Inicializamos el servidor
servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo http://${host}:${puerto}`);
});

