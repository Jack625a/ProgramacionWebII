import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DatosComponent } from './datos/datos.component';
import { FooterComponent } from './footer/footer.component';
import { Datos2Component } from './datos2/datos2.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BarraNavegacionComponent,
    CuerpoComponent,
    DatosComponent,
    Datos2Component,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos=[
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    },
    {
      nombre:'ZTE Nubia Focus 5G Negro 6+256GB',
      descripcion:'El nuevo Nubia Focus 5G es un celular de alta calidad con una excelente cámara y diseño.',
      precio:2248,
      imagenUrl:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/d/i/dise_o_sin_t_tulo_28__1.png'
    }
  ];
}
