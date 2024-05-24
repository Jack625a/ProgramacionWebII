//Parametros en la URL
const express=require('express');
const path=require('path');
const fs=require('fs')

//Productos simulados
const productos=[
    {
        id:1,nombre:'Producto 1', descricion:'Loren ipsun', precio:'100'
    },
    {
        id:2,nombre:'Producto 2', descricion:'Loren ipsun', precio:'200'
    },
    {
        id:3,nombre:'Producto 3', descricion:'Loren ipsun', precio:'300'
    },
    {
        id:4,nombre:'Producto 4', descricion:'Loren ipsun', precio:'400'
    },
    {
        id:5,nombre:'Producto 5', descricion:'Loren ipsun', precio:'500'
    }
];

const servidor=express();

servidor.use(express.static(path.join(__dirname,'public')));

//Rutas del servidor
servidor.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname,'public','login.html'));
});

servidor.get('/productos/:nombre',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','detalles.html'));
});

servidor.get('/productos', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','productos.html'))
})

servidor.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
});

//Ruta con parametros por ID
servidor.get('/productos/:id', (req,res)=>{
    const { id }=req.params;
    const producto=productos.find(p=>p.id==id);
    
    if(producto){
        fs.readFile(path.join(__dirname,'public','detalles.html'),(error,data)=>{
            if(error){
                res.status(500).send("Error al leer el archivo");
                return;
            }
            let resultado=data.replace(/{{nombre}}/g,producto.nombre)
            .replace(/{{descripcion}}/g,producto.descricion)
            .replace(/{{precio}}/g,producto.precio);
            res.send(resultado);
        });

    }else{
        res.status(404).send("Producto no encontrado");
    }
});



const puerto=3000;
const host='localhost';

servidor.listen(puerto,host, ()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});

