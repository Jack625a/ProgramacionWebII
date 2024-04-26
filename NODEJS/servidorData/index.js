//Servidor con base de datos locales
//Paso 1. Importar los modulos a utilizar
const http=require('http');

//Paso 2. Base de datos Local
const productos=[
    {
        id:1,
        nombre:'Honor 90 Lite Negro 8+256 GB',
        precio:2599,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/o/honor_90_lite_negro_2.jpg'
    },
    {
        id:2,
        nombre:'iPhone 15 PRO 256GB Titanio Negro',
        precio:14298,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/i/p/iphone_15_pro_negro_1.jpg'
    },
    {
        id:3,
        nombre:'Realme 12 Pro+ Beige 5G 12+512GB RMX3840',
        precio:5199,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/r/e/realme_12_pro_beige_6.jpg'
    },
    {
        id:4,
        nombre:'Infinix HOT 40I Negro 8+256GB X6528',
        precio:1400,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/i/n/infinix_hot_40i_negro_3.jpg'
    },
    {
        id:5,
        nombre:'Samsung Galaxy S24+ Negro Onyx 12+256 GB',
        precio:9739,
        imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/g/a/galaxy_s24_4.jpg'
    }
];

//Funcion para crear dinamicamente los cardviews de los productos
const crearCardviews=()=>{
    let cardViews='';
    productos.forEach(producto=>{
        cardViews+=`
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" width: 300px;>
            <div class="card-body>
                <h2 class="card-title">${producto.nombre}</h2>
                <p class="card-text">Precio: ${producto.precio} Bs</p>
            </div>
        </div>
        `;
    });
return cardViews;
};

//Paso 3. Crear el servidor HTTP
const servidor=http.createServer((peticion,respuesta)=>{
    //Configuracion del encabezado de la respuesta
    respuesta.writeHead(200, {
        'Content-Type':'text/html'
    });

    //Generar el HTML con los cardviws

    const html=`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Productos</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                
            </head>
            <body>
            <div class="container text-center">
            <div class="col">
                <h1>Lista de Productos</h1>
                ${crearCardviews()}
            </div>
            </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>
    
    `;

    //Convertir la lista de productos a JSON y realizar el envio como respuesta
    respuesta.end(html);
});

//Paso 4. Definir el puerto y el host del servidor
const puerto=3000;
//const host='localhost';

//Paso 5. Inicializar el servidor
servidor.listen(puerto, ()=>{
    console.log(`Servidor activo http://localhost:${puerto}`);
});



