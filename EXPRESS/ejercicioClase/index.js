const express=require('express');
const path=require('path')

const servidor=express();

//Archivos estaticos
servidor.use(express.static(path.join(
    __dirname, 'public'
)));

//Rutas 4 
servidor.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'));
});

servidor.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'login.html'));
});

servidor.get('/servicios',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'servicios.html'));
});

const puerto=3000;
const host='localhost';

servidor.listen(puerto,host,()=>{
    console.log(`Servidor esta activo: http://${host}:${puerto}`);
});

