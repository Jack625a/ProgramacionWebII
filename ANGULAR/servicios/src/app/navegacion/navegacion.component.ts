import { Component, inject,OnInit } from '@angular/core';
import { BasedatosService } from '../basedatos.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  //lista de los productos
  productos:any[]=[];
  constructor(private airtableService:BasedatosService){}
  //Paso 1. Configurar la gestion de estados
  ngOnInnit():void{
    this.airtableService.obtenerProductos().subscribe(
      (data)=>{
        this.productos=data;
      },(error)=>{
        console.error('Error al obtner los datos', error);
      }
    );
  }

}
