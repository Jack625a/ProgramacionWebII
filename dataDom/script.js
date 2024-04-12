//Creacion de los datos para conexion con el DOM
var productos={
    juegos: [
        {
            "nombre":"Producto 1",
            "precio":1500,
            "imagen":"https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2019/3/12/155c4cd3a00d8414e67f8039bf39d0247108f6ee.jpeg"
        },
        {
            "nombre":"Producto 2",
            "precio":2000,
            "imagen":"./imagenes/2.jpg"
        },
        {
            "nombre":"Producto 3",
            "precio":3500,
            "imagen":"./imagenes/1.webp"
        },
        {
            "nombre":"Producto 4",
            "precio":15040,
            "imagen":"https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2019/3/12/155c4cd3a00d8414e67f8039bf39d0247108f6ee.jpeg"
        },
        {
            "nombre":"Producto 5",
            "precio":5400,
            "imagen":"./imagenes/2.jpg"
        },
        {
            "nombre":"Producto 6",
            "precio":3500,
            "imagen":"./imagenes/1.webp"
        }
    ],
    tv:[
        
            {
                "nombre":"Producto 1",
                "precio":3550,
                "imagen":"https://oruro.solutekla.com/photo/1/lg/televisores_led_4k_smart/televisor_lg_70_led_uhd_4k_active_hdr_sonido_ultra_surround_smart_tv/televisor_lg_70_led_uhd_4k_active_hdr_sonido_ultra_surround_smart_tv_0001"
            },
            {
                "nombre":"Producto 2",
                "precio":8550,
                "imagen":"https://multicenter.vtexassets.com/arquivos/ids/282426-800-auto?v=638295393836900000&width=800&height=auto&aspect=true"
            } 
        
    ],
    celulares:[
        {
            "nombre":"Producto 1",
            "precio":3550,
            "imagen":"https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/r/e/realme_12_pro_beige_6.jpg"
        },
        {
            "nombre":"Producto 2",
            "precio":8550,
            "imagen":"https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/s/a/samsung_galaxy_a05_plata_4_1.jpg"
        }
    ]
    
    
};

//Funcion para crear de forma dinamica los productos
function crearProducto(productos){
    var contenedor=document.getElementById('contenedorProductos');
    contenedor.innerHTML='';// Limpieza del contenedor
    
    //recorrido de los productos
    productos.forEach(function(producto){
        var card=document.createElement('div');
        card.classList.add('col-md-4', 'product-card');

        var cardContenido=` <div class="card">
        <img src="${producto.imagen}" class="card-img-top">
        <div class="card-body">
        <h3>"${producto.nombre}"</h3>
        <p>"${producto.precio}Bs"</p>
        </div>
        </div>
        `;
        card.innerHTML=cardContenido

        contenedor.appendChild(card);
    });
}
//fUNCION PARA FILTRAR LOS PRODUCTOS POR LA CATEGORIA
function filtrarProductos(categoria){
    var todosProductos=[];

    if(categoria==='todos'){
        Object.values(productos).forEach(function(categoriasProductos){
            todosProductos=todosProductos.concat(categoriasProductos);
        });

        
    }else{
       
        var seleccionProducto=productos[categoria];
        //MOstrar los productos por categoria seleccionada
    crearProducto(seleccionProducto);
    }
}

//Lllamar a la funcion para crear los cardvies de los productos al iniciar la pagian
    window.onload=function(){
        filtrarProductos('todos');//Mostrar todos los productos
        //Envase a la seleccion realizar cambios de la categoria
        var categoriaSeleccionada=document.getElementById('categoriasSelector');

        categoriaSeleccionada.addEventListener('change',function(){
            var selectCategoria=this.value;
            filtrarProductos(selectCategoria);
        });
    };











